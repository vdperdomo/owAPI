import Client, { IClient } from "../../interfaces/IClient.interface";
import mongoose from "mongoose";

class CClient {

    public async get(id: string) {
        try {
            return await Client.findById(id).exec();
        } catch (err) {
            return err;
        }
    }

    public async create(client: IClient) {
        if (this.isValid(client)) {
            const clientDB = new Client({
                ...client,
                _id: new mongoose.Types.ObjectId()
            })

            const response = await clientDB.save()
                .then(result => result)
                .catch(error => error)

            return response;
        } else return false
    }

    public modify(client: IClient): boolean {
        //TODO: query
        return true;
    }

    public remove(id: number): boolean {
        //TODO: query
        return true;
    }

    private isValid(client: any): boolean {
        //TODO: validate client
        return true;
    }
}

export default CClient;


