import * as mysql from "mysql";
import { Select } from "./select";

export class ConnectionMysql {
  constructor(
    host: string,
    user: string,
    pass: string,
    db: string,
    table: string
  ) {
    this.main(host, user, pass, db, table);
  }
  async main(
    host: string,
    user: string,
    pass: string,
    db: string,
    table: string
  ) {
    const connection = mysql.createConnection({
      host: host,
      user: user,
      password: pass,
      database: db,
    });
    connection.connect((err) => {
      if (err) {
        console.log("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id: " + connection.threadId);
    });
    const selectData = new Select().select(table);
    connection.query("select * from region;", (error, results, fields) => {
      if (error) throw error;
      console.log("The solution is: ", results.solution);
    });

    connection.end();
  }
}
