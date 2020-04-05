import { Command, flags } from "@oclif/command";
import { exec, spawn, fork} from "child_process";
import cli from "cli-ux";

export class Commit extends Command{
    // static description = 'describe the command here'
  
    static flags = {
      help: flags.help({char: 'h'}),
    }
  
    static args = [{name: 'input'}]
    
    async run(){
       const {flags} = this.parse(Commit);  
       const message = await cli.prompt('enter message to commit');          
       const ls = spawn(`git add . 
                        git commit -m "${message}" `,{shell:true})
       ls.stdout.on('data', (data) => {
        console.log(`stdout message recived: ${data}`);
      });
      
      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      
      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
    }
}