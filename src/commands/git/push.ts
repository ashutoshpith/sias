import { Command } from "@oclif/command";
import { exec, spawn, fork} from "child_process";
import cli from "cli-ux";

export class Push extends Command{
    async run(){
        cli.action.start('pushing started !');
        const ls = spawn(`git push `,{shell:true})
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