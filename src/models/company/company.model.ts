import ICompany from "../../interfaces/ICompany.interface";

class Company {

    public get(id: number): ICompany | any {
        let company: ICompany | any;
        //TODO: query
        return company;
    }

    public create(company: ICompany): boolean {
        if(this.isValid(company)){
            return this.new(company);
        }
        return false;
    }

    private new(company: ICompany): boolean {
        //TODO: query
        return true;
    }

    public modify(company: ICompany): boolean {
        //TODO: query
        return true;
    }

    public remove(id: number): boolean {
        //TODO: query
        return true;
    }

    public getBillingInformation(id: number){
        let billingInfo = {}
        //TODO: query
        return billingInfo;
    }

    private isValid(company: any):boolean{
        //TODO: validate company
        return true;
    }

}

export default Company;


