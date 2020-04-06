import { Command } from "@oclif/command";
import { ConnectionMongoDb } from "../../structs/mongodb";

export class Check extends Command {
  async run() {
    new ConnectionMongoDb().main();
  }
}
