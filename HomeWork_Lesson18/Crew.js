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
var CREW = /** @class */ (function (_super) {
    __extends(CREW, _super);
    function CREW(firstname, lastname, vetek, origcountry, airClass, groudjob) {
        var _this = _super.call(this, firstname, lastname, vetek) || this;
        _this.origCountry = origcountry;
        _this.groundJob = groudjob;
        _this.airClass = airClass;
        return _this;
    }
    Object.defineProperty(CREW.prototype, "origCountry", {
        get: function () {
            return this._origCountry;
        },
        set: function (x) {
            this._origCountry = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CREW.prototype, "groundJob", {
        get: function () {
            return this._groundJob;
        },
        set: function (x) {
            this._groundJob = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CREW.prototype, "airClass", {
        get: function () {
            return this._airClass;
        },
        set: function (x) {
            if (x == "First Class" || x == "Business Class" || x == "Economy Class") {
                this._airClass = x;
            }
            else
                this._airClass = "TBD";
        },
        enumerable: true,
        configurable: true
    });
    ///////methods//////
    CREW.prototype.printCrew = function () {
        document.write("</br>" + this.firstName + " " + this.lastName + " is your attendent for the flight from " + this.origCountry + " today. </br>");
        document.write(this.firstName + " " + this.lastName + " works in our company for " + this.vetek + " years.</br>");
        if (this.groundJob != undefined)
            document.write(this.firstName + " " + this.lastName + " works as a " + this.groundJob + " on the groud.</br>");
        else
            document.write(this.firstName + " " + this.lastName + " will be working in " + this.airClass + " on your flight.</br>");
    };
    return CREW;
}(PERSON));
//# sourceMappingURL=Crew.js.map