var PERSON = /** @class */ (function () {
    function PERSON(firstname, lastname, vetek) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.vetek = vetek;
    }
    Object.defineProperty(PERSON.prototype, "vetek", {
        get: function () {
            return this._vetek;
        },
        set: function (x) {
            this._vetek = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PERSON.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (x) {
            this._firstName = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PERSON.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (x) {
            this._lastName = x;
        },
        enumerable: true,
        configurable: true
    });
    return PERSON;
}());
//# sourceMappingURL=Person.js.map