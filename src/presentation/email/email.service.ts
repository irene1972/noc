import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface SendMailOptions{
    to:string | string[];
    subject:string;
    htmlBody:string;
    attachements?: Attachement[];

}

interface Attachement{
    filename:string,
    path:string
}

export class EmailService{
    private transporter=nodemailer.createTransport({
        service:envs.MAILER_SERVICE,
        auth:{
            user:envs.MAILER_EMAIL,
            pass:envs.MAILER_SECRET_KEY
        }
    });

    async sendEmail(options:SendMailOptions):Promise<boolean>{

        const {to,subject,htmlBody,attachements=[]}=options;

        try {
            const sentInformation=await this.transporter.sendMail({
                to:to,
                subject:subject,
                html:htmlBody,
                attachments:attachements
            });
            //console.log(sentInformation);
            return true;
        } catch (error) {
            return false;
        }
    }

    async sendEmailWithFileSystemLogs(to: string | string[]){
        const subject='Logs del servidor';
        const htmlBody=`
            <h3>Logs de sistema -NOC</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio vitae finibus venenatis. Donec pulvinar facilisis laoreet. Fusce nec quam arcu. Ut elementum eget nibh non laoreet. Vivamus feugiat ultricies purus, quis tristique diam. Donec finibus pharetra sapien, tincidunt finibus justo congue sit amet. In dignissim congue sodales. Quisque at porttitor risus. Curabitur in metus vel tortor mattis commodo</p>
            <p>Ver logs adjuntos</p>
        `;
        const attachements:Attachement[]=[
            {filename:'logs-all.log', path:'./logs/logs-all.log'},
            {filename:'logs-high.log', path:'./logs/logs-high.log'},
            {filename:'logs-medium.log', path:'./logs/logs-medium.log'}
        ];
        return this.sendEmail({
            to,subject,attachements,htmlBody
        });
    }
}