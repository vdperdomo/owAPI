import { IPayment } from "../../interfaces/IPayment.interface";

class Payments {

    public getAll(): IPayment[] | any {
        let payments: IPayment[] | any;
        //TODO: query
        return payments;
    }

    public getAllByClientId(id: number): IPayment[] | any {
        let payments: IPayment[] | any;
        //TODO: query
        return payments;
    }

}

export default Payments;