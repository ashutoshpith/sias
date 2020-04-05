import { Command, flags } from "@oclif/command";
import { exec, spawn, fork} from "child_process";
import * as fs from "fs-extra";

export class Commit extends Command{
    // static description = 'describe the command here'
  
    // static flags = {
    //   help: flags.help({char: 'h'}),
    //   name: flags.string({char: 'n', description: 'name to print'}),
    //   force: flags.boolean({char: 'f'}),
    // }
  
    static args = [{name: 'input'}]
    
    async run(){
        // const data = execFileSync("../../structs/sh/git-commit.sh");

       const ls = spawn("sudo src/structs/sh/git-commit.sh",{shell:true})
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