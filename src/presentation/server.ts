import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository=new LogRepositoryImpl(
    new FileSystemDatasource()
);

export class Server{
    public static start(){
        console.log('Server started...');

        //Mandar email
        //console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL);
        const emailService=new EmailService();
        emailService.sendEmail({
            to:'ireneog_72@hotmail.es',
            subject:'Logs de sistema',
            htmlBody:`
            <h3>Logs de sistema -NOC</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio vitae finibus venenatis. Donec pulvinar facilisis laoreet. Fusce nec quam arcu. Ut elementum eget nibh non laoreet. Vivamus feugiat ultricies purus, quis tristique diam. Donec finibus pharetra sapien, tincidunt finibus justo congue sit amet. In dignissim congue sodales. Quisque at porttitor risus. Curabitur in metus vel tortor mattis commodo</p>
            <p>Ver logs adjuntos</p>
            `
        });

        //CronService.createJob(
            //'*/5 * * * * *',
            //()=>{
                //const url='https://www.google.com/'; //const url='http://localhost:3000/';
                //new CheckService(
                    //fileSystemLogRepository,
                    //()=>console.log(`${url} is ok`),
                    //(error)=>console.log(error)
                //).execute(url); //new CheckService().execute('http://localhost:3000/');
            //}
        //);
        
        
    }
}