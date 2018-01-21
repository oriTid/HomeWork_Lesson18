class PERSON {

    private _firstName: string;
    private _lastName: string;
    private _vetek: number;


    constructor(firstname: string, lastname: string, vetek:number) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.vetek = vetek;
    }

    set vetek(x: number) {
        this._vetek = x;

    }
    get vetek(): number {

        return this._vetek;
    }



    set firstName(x: string) {
        this._firstName = x;

    }
    get firstName(): string {

        return this._firstName;
    }

    set lastName(x: string) {
        this._lastName = x;

    }
    get lastName(): string {

        return this._lastName;
    }
 
}


