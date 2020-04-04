import {Command, flags} from "@oclif/command";
import * as fs from "fs-extra";
import * as path from "path";
import * as notifier from "node-notifier";

export class Set extends Command{

    
      async run() {
       notifier.notify({
           title:"set task",
           message:"completed"
       });
        console.log("set")
      }
}