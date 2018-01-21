class CREW extends PERSON {


    private _origCountry: string;
    private _groundJob: string;
    private _airClass: string;

    constructor(firstname: string, lastname: string, vetek: number, origcountry: string, airClass?: string, groudjob?: string) {
        super(firstname, lastname, vetek);
        this.origCountry = origcountry;
        this.groundJob = groudjob;
        this.airClass = airClass;
    }


    set origCountry(x: string) {
        this._origCountry = x;

    }
    get origCountry(): string {

        return this._origCountry;
    }

    set groundJob(x: string) {
        this._groundJob = x;

    }
    get groundJob(): string {

        return this._groundJob;
    }

    set airClass(x: string) {
        if (x == "First Class" || x == "Business Class" || x == "Economy Class") {
            this._airClass = x;
        }
        else this._airClass = "TBD";

    }
    get airClass(): string {

        return this._airClass;
    }


    ///////methods//////

    public printCrew(): void {

        document.write(`</br>${this.firstName} ${this.lastName} is your attendent for the flight from ${this.origCountry} today. </br>`);
        document.write(`${this.firstName} ${this.lastName} works in our company for ${this.vetek} years.</br>`);
        if (this.groundJob != undefined)
            document.write(`${this.firstName} ${this.lastName} works as a ${this.groundJob} on the groud.</br>`);
        else document.write(`${this.firstName} ${this.lastName} will be working in ${this.airClass} on your flight.</br>`);
    }
}