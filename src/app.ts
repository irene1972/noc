import 'dotenv/config';
import {Server} from "./presentation/server";

(async()=>{
    main();
})();

function main(){
    //Server.start();
    console.log(process.env.MAILER_EMAIL);
}