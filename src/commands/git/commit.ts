import { Command, flags } from "@oclif/command";
import { exec, spawn, fork} from "child_process";

export class Commit extends Command{
    // static description = 'describe the command here'
  
    static flags = {
      help: flags.help({char: 'h'}),
    //   message: flags.string({char: 'm', description: 'message to commit'}),
    }
  
    static args = [{name: 'input'}]
    
    async run(){
       const {argv,flags} = this.parse(Commit);            
       const ls = spawn(`git add . 
                        git commit -m "${argv[0]}" `,{shell:true})
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