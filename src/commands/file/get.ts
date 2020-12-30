import { Command, flags } from "@oclif/command";
import * as fs from "fs-extra";
import * as path from "path";

export class Get extends Command {
  static description = "description file read json/csv";
  // static args = [
  //     {name: 'filetype',required: false},
  // ]
  static flags = {
    inputfile: flags.string({
      char: "i",
      description: "desc -> enter file name to read",
    }),
    name: flags.string({
      char: "n",
      description: "desc -> enter name of file",
      required: false,
    }),
    help: flags.help({
      char: "h",
      description: "desc -> for help",
      required: false,
    }),
  };

  async run() {
    const { flags } = this.parse(Get);
    if (flags.inputfile) {
      const pathAddr = path.format({
        root: "./",
        base: flags.inputfile,
      });
      if (path.extname(flags.inputfile) === ".json") {
        const readFile = await fs.readJSON(pathAddr);
        console.log(readFile);
      } else if (path.extname(flags.inputfile) === ".txt") {
        const readFile = await fs.readFile(pathAddr, "utf8");
        console.log(readFile);
      }
    } else {
      console.log("no filetype is provided");
    }
  }
}
