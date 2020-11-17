import { IPayment, IPaymentFull } from "../../interfaces/IPayment.interface";

class Payment {

    public get(id: number): IPayment {
        let payment: IPayment | any;
        //TODO: query
        return payment;
    }

    public create(payment: IPaymentFull): boolean {
        if(this.isValid(payment)){
            if(this.generatePaymentGateway(payment)){
                return this.new(payment);
            }
        }
        return false;
    }

    private new(payment: IPayment): boolean {
        //TODO: query
        return true;
    }

    public modify(payment: IPayment): boolean {
        //TODO: query
        return true;
    }


    public remove(id: number): boolean {
        //TODO: query
        return true;
    }

    private generatePaymentGateway(gatewayPayment: IPaymentFull): boolean {
        //TODO: parse payment to send
        let paymentToSend = gatewayPayment;
        //TODO: generate payment by gateway
        return true;
    }

    private isValid(payment: IPaymentFull):boolean{
        //TODO: validate payment
        return true;
    }
}

export default Payment;


