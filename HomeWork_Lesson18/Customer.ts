class CUSTOMER extends PERSON {

    private _passportNumber: number;


    constructor(firstname: string, lastname: string, passportnumber: number, vetek?: number) {
        super(firstname, lastname, vetek);
        this.Passnumber = passportnumber;

    }

    get Passnumber() {
        return this._passportNumber;
    }

    set Passnumber(x: number) {
        this._passportNumber = x;
    }


    ///////methods//////

    public customerPrint(): void {

        //document.write(`${this.printPilot()}`);
        //document.write(`${this.printCrew()}`);
        document.write(`</br>Passanger details:</br>Full Name : ${this.firstName} ${this.lastName} 
</br>Passport Number: ${this.Passnumber}</br>
</br> ********** PLEASE REVIEW YOUR PERSONAL DETAILS************</br>`);

    }
}