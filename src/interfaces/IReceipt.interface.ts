import ICompany from "./ICompany.interface";


interface IReceipt extends ICompany {
    id: number
    number: number
}

export default IReceipt;