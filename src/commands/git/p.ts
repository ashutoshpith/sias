import { Command } from "@oclif/command";
import { spawn } from "child_process";
import cli from "cli-ux";

export class P extends Command {
  async run() {
    const message = await cli.prompt("enter the message to commit: ");
    cli.action.start("pushing started !");
    const ls = spawn(
      `git add .
       git commit -m "${message}"
       git push `,
      { shell: true }
    );
    ls.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }
}
