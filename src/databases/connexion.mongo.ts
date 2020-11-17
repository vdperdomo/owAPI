//mongodb+srv://root:root@wo.wfj0z.mongodb.net/wo?retryWrites=true&w=majority
import mongoose, { connection } from "mongoose";
import { mongo_db } from '../config/config';


class Connection {

  connectMongoDB() {
    const uri = `mongodb+srv://root:root@wo.wfj0z.mongodb.net/wo?retryWrites=true&w=majority`;
    //const uri = `mongodb+srv://${mongo_db.user}:${mongo_db.password}@${mongo_db.name}.wfj0z.mongodb.net/${mongo_db.name}?retryWrites=true&w=majority`;

    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    const connection = mongoose.connection;
    connection.once("open", async () => {
      console.log("Connected to database");
    });
    connection.on("error", () => {
      console.log("Error connecting to database");
    });
  }
}

export default Connection;




