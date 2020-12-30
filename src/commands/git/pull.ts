import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import { spawn } from "child_process";
export class Pull extends Command {
  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "input" }];

  async run() {
    const { flags } = this.parse(Pull);
    const ls = spawn(`git pull`, { shell: true });
    cli.action.start("process started ! ...");
    ls.stdout.on("data", (data) => {
      console.log(`stdout recived: ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }
}
