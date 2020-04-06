import { Command, flags } from "@oclif/command";
import { ConnectionMysql, Select } from "../../structs";
import cli from "cli-ux";

export class Check extends Command {
  static flags = {
    host: flags.string({
      char: "h",
      default: "localhost",
    }),
    user: flags.string({
      char: "u",
      default: "zudo",
    }),
    pass: flags.string({
      char: "p",
      default: "zudo",
    }),
    db: flags.string({
      char: "d",
      default: "crm",
    }),
    table: flags.string({
      char: "t",
      default: "",
    }),
    help: flags.help({
      char: "q",
    }),
  };
  async run() {
    const { flags } = this.parse(Check);
    new ConnectionMysql(
      flags.host,
      flags.user,
      flags.pass,
      flags.db,
      flags.table
    );
    // const select = await cli.prompt("table to select");
  }
}
