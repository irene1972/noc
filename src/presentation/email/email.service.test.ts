import nodemailer from 'nodemailer';  
import { EmailService,SendMailOptions } from "./email.service";
//import {SendEmailLogs} from '../../domain/use-cases/email/send-email-logs';

describe('email.service.ts',()=>{

    const mockSendMail=jest.fn();

    nodemailer.createTransport=jest.fn().mockReturnValue({
        sendMail:mockSendMail
    });

    const emailService=new EmailService();

    test('should send email',async()=>{

        const options:SendMailOptions={
            to:'ireneog_72@hotmail.es',
            subject:'Test',
            htmlBody:'<h1>Test</h1>'
        }

        await emailService.sendEmail(options);

        //expect(emailSent).toBe(true);
        expect(mockSendMail).toHaveBeenCalledWith({
            attachments: expect.any(Array),
            html: "<h1>Test</h1>",
            subject: "Test",
            to: "ireneog_72@hotmail.es",
        });

    });

    test('should send email with attachments', async ()=>{

        const email='ireneog_72@hotmail.es';

        await emailService.sendEmailWithFileSystemLogs(email);

        expect(mockSendMail).toHaveBeenCalledWith({
            to:email,
            subject:'Logs del servidor',
            htmlBody:expect.any(String),
            attachments: expect.arrayContaining([
                {filename:'logs-all.log', path:'./logs/logs-all.log'},
                {filename:'logs-high.log', path:'./logs/logs-high.log'},
                {filename:'logs-medium.log', path:'./logs/logs-medium.log'}
            ])
        });

    });

});