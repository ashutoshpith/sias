import {Command, flags} from "@oclif/command";
import * as fs from 'fs-extra'
import * as path from 'path'

export class FileRead extends Command {
    static description = "file read json/csv";
    // static args = [
    //     {name: 'filetype',required: false},
    // ]
    static flags = {
        inputfile: flags.string({
            char:'i',
            description:"desc -> enter file name to read"
            }),
        name: flags.string({
            char:'n',
            description:"desc -> enter name of file",
            required: false
        }),
         help: flags.help({
                 char: 'h',
                 description:"desc -> for help",
                 required: false
              }),

    }

    async run(){
       const {args,flags} = this.parse(FileRead)
       const avail = ['md', 'txt', 'text']
       if(flags.inputfile){
            if(path.extname(flags.inputfile) ==='json'){
                const readFile = await fs.readJSON(flags.inputfile);
                console.dir(readFile)
                console.log(`running my command with args: ${flags.inputfile}`)
            }
            else if(path.extname(flags.inputfile) === 'md' 
                    || path.extname(flags.inputfile) === 'txt'){
                const readFile = await fs.readFile(flags.inputfile,'utf8');
                console.dir(readFile)
            }

       }
       else{
        console.log("no filetype is provided");
       }
    
       

       

    }
}