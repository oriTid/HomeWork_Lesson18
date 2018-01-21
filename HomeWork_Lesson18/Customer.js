var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CUSTOMER = /** @class */ (function (_super) {
    __extends(CUSTOMER, _super);
    function CUSTOMER(firstname, lastname, passportnumber, vetek) {
        var _this = _super.call(this, firstname, lastname, vetek) || this;
        _this.Passnumber = passportnumber;
        return _this;
    }
    Object.defineProperty(CUSTOMER.prototype, "Passnumber", {
        get: function () {
            return this._passportNumber;
        },
        set: function (x) {
            this._passportNumber = x;
        },
        enumerable: true,
        configurable: true
    });
    ///////methods//////
    CUSTOMER.prototype.customerPrint = function () {
        //document.write(`${this.printPilot()}`);
        //document.write(`${this.printCrew()}`);
        document.write("</br>Passanger details:</br>Full Name : " + this.firstName + " " + this.lastName + " \n</br>Passport Number: " + this.Passnumber + "</br>\n</br> ********** PLEASE REVIEW YOUR PERSONAL DETAILS************</br>");
    };
    return CUSTOMER;
}(PERSON));
//# sourceMappingURL=Customer.js.map