import { Command, flags } from "@oclif/command";
import { exec, spawn, fork} from "child_process";
import * as fs from "fs-extra";

export class Commit extends Command{
    // static description = 'describe the command here'
  
    static flags = {
      help: flags.help({char: 'h'}),
      message: flags.string({char: 'm', description: 'message to commit'}),
    }
  
    static args = [{name: 'input'}]
    
    async run(){
       const {flags} = this.parse(Commit);            
       const ls = spawn(`git add . 
                        git commit -m '"${flags.message}"' `,{shell:true})
       ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });
      
      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      
      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
    }
}