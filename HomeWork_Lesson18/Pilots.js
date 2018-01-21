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
var PILOTS = /** @class */ (function (_super) {
    __extends(PILOTS, _super);
    function PILOTS(licnum, firstname, lastname, vetek) {
        var _this = _super.call(this, firstname, lastname, vetek) || this;
        _this._licNum = licnum;
        return _this;
    }
    Object.defineProperty(PILOTS.prototype, "licNum", {
        get: function () {
            return this._licNum;
        },
        set: function (x) {
            this._licNum = x;
        },
        enumerable: true,
        configurable: true
    });
    ///////methods//////
    PILOTS.prototype.printPilot = function () {
        document.write("Welcome to your flight <br/><br/>");
        document.write(this.firstName + " " + this.lastName + " will be flying you today. </br>");
        document.write(this.firstName + " " + this.lastName + "'s Licese num is: " + this.licNum + "<br/>");
        document.write(this.firstName + " " + this.lastName + " works in our company for " + this.vetek + " years<br/>");
    };
    return PILOTS;
}(PERSON));
//# sourceMappingURL=Pilots.js.map