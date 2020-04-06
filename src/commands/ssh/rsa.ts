import { Command, flags } from "@oclif/command";

export class Rsa extends Command {
  static flags = {
    help: flags.help({
      char: "h",
    }),
  };
  async run() {
    const { flags } = this.parse(Rsa);
    console.log("ssh key");
  }
}
