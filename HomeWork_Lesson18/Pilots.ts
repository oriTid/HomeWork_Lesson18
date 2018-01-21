class PILOTS extends PERSON{


    private _licNum: number;

    constructor(licnum: number, firstname: string, lastname: string, vetek:number) {

        super(firstname, lastname, vetek);
        this._licNum = licnum;

    }
   

    set licNum(x: number) {

        this._licNum = x;
    }

    get licNum(): number {

        return this._licNum;
    }


    ///////methods//////

    public printPilot():void {

        document.write(`Welcome to your flight <br/><br/>`);
        document.write(`${this.firstName} ${this.lastName} will be flying you today. </br>`);
        document.write(`${this.firstName} ${this.lastName}'s Licese num is: ${this.licNum}<br/>`);
        document.write(`${this.firstName} ${this.lastName} works in our company for ${this.vetek} years<br/>`);
        
    }


}