import {Command, flags} from "@oclif/command";
import * as open from "open";

export class LocalHost extends Command{
    static flags = {
        port: flags.string({
            char:'p',
            description:"desc -> enter port number to open"
            }),
        app: flags.string({
            char: 'a',
            description: `desc -> enter browser name in which to open
            ex -> -a=firefox || -a=chrome`,
            required: false
        }),
         help: flags.help({
                 char: 'h',
                 description:"desc -> for help",
                 required: false
              }),

    }
    async run(){
        const {flags} = this.parse(LocalHost);
        const hostname = `localhost:${flags.port}`;

        if(flags.port){
            if(flags.app){
                console.log("opening");
                console.log(`localhost:${flags.port} and app ${flags.app}`)
                await open(hostname, { app: flags.app });
    
            }
            else{
                console.log("opening");
                console.log(`localhost:${flags.port} and app ${flags.app}`)
                await open(hostname, { app: 'firefox' });
            }

        }
        else{
            console.log("please provide port");
        }

    }
}