import { Command } from "@oclif/command";

export class GoodByeCommand extends Command {
  async run() {
    console.log("goodbye");
  }
}
