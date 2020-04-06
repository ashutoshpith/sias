import { Command, flags } from "@oclif/command";
import { spawn } from "child_process";
import cli from "cli-ux";

export class P extends Command {
  static description = "git push with promt commit message";
  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(P);
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
