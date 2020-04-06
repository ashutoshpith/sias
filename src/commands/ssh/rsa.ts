import { Command, flags } from "@oclif/command";
import { spawn } from "child_process";
export class Rsa extends Command {
  static flags = {
    emai: flags.string({
      char: "e",
      default: "ashutoshpith@gmail.com",
    }),
    help: flags.help({
      char: "h",
    }),
  };
  async run() {
    const { flags } = this.parse(Rsa);
    const ls = spawn(`ssh-keygen -t rsa -b 4096 -C "${flags.emai}"`, {
      shell: true,
    });
    ls.stdout.on("data", (data) => {
      console.log(`stdout message recived: ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }
}
