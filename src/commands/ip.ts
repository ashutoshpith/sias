import { Command, flags } from "@oclif/command";
import * as internalIp from "internal-ip";

export class Ip extends Command {
  static description = "Get details of ip";
  static args = [
    {
      name: "ipversion",
      description: "ip version specify to get details",
      default: "v4",
      options: ["v4", "v6", "v4sync", "v6sync"],
    },
  ];
  static flags = {
    // version: flags.string({
    //     char:'v',
    //     description:"desc -> enter ip version to show"
    //     }),
    help: flags.help({
      char: "h",
      description: "desc -> for help",
      required: false,
    }),
  };

  async run() {
    const { argv } = this.parse(Ip);
    switch (argv[0]) {
      case "v4":
        console.log(await internalIp.v4());
        break;
      case "v6":
        console.log(await internalIp.v6());
        break;
      case "v4sync":
        console.log(internalIp.v4.sync());
        break;
      case "v6sync":
        console.log(internalIp.v6.sync());
        break;
      default:
        console.log("something error");
    }
  }
}
