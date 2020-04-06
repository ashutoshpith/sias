import { Command } from "@oclif/command";
import { spawn } from "child_process";

export class Info extends Command {
  async run() {
    const ls = spawn(`hostnamectl`, { shell: true });
    ls.stdout.on("data", (data) => {
      console.log(`stdout message recived:\n ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }
}
