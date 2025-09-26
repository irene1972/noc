import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository=new LogRepositoryImpl(
    new FileSystemDatasource()
);

const emailService=new EmailService();

export class Server{
    public static start(){
        console.log('Server started...');
        //Envía el email a través del caso de uso
        /*
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository
        ).execute(
            ['ireneog_72@hotmail.es','ireneolgo1972@gmail.com']
        );
        */

        //const emailService=new EmailService();
        //emailService.sendEmailWithFileSystemLogs(
            //['ireneog_72@hotmail.es','ireneolgo1972@gmail.com']
        //);

        //Graba log de envío de email
        //console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL);
        /*
        const emailService=new EmailService(
            fileSystemLogRepository
        );
        emailService.sendEmailWithFileSystemLogs(
            ['ireneog_72@hotmail.es','ireneolgo1972@gmail.com']
        );
        */

        //Mandar email a dos cuentas con adjuntos
        /*
        const emailService=new EmailService();
        emailService.sendEmailWithFileSystemLogs(
            ['ireneog_72@hotmail.es','ireneolgo1972@gmail.com']
        );
        */

        //Manda email a una cuenta
        /*
        emailService.sendEmail({
            to:'ireneog_72@hotmail.es',
            subject:'Logs de sistema',
            htmlBody:`
            <h3>Logs de sistema -NOC</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio vitae finibus venenatis. Donec pulvinar facilisis laoreet. Fusce nec quam arcu. Ut elementum eget nibh non laoreet. Vivamus feugiat ultricies purus, quis tristique diam. Donec finibus pharetra sapien, tincidunt finibus justo congue sit amet. In dignissim congue sodales. Quisque at porttitor risus. Curabitur in metus vel tortor mattis commodo</p>
            <p>Ver logs adjuntos</p>
            `
        });
        */
       
        //Graba logs del estado de la aplicación cada cinco segundos
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