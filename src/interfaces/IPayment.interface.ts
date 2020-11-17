interface IPayment {
    id: number
    type: number,   //can i use factory pattern (and singleton?) to implement payment type?
    date: Date
    amount: number
    reason: string
    cardLastNumbers: number,
    clientId: number
}

interface IPaymentFull extends IPayment{
    cardNumber: number
    cardName: string,
    CVV: number
    expirationDate: Date
    documentType: number
    documentNumber: number
}

export {IPayment, IPaymentFull}