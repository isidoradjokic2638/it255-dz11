"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var router_1 = require('@angular/router');
var AddHotelComponent = (function () {
    function AddHotelComponent(http, router) {
        this.addHotelForm = new forms_1.FormGroup({
            ime: new forms_1.FormControl(),
            grad: new forms_1.FormControl(),
            drzava: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
    }
    AddHotelComponent.prototype.onAddHotel = function () {
        var _this = this;
        var data = "ime=" + this.addHotelForm.value.ime + "&& grad=" + this.addHotelForm.value.grad + "&& drzava=" +
            this.addHotelForm.value.drzava;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/baza/addHotel.php', data, {
            headers: headers })
            .subscribe(function (data) {
            if (data["_body"] == "ok") {
                _this.router.navigate(['/']);
            }
        });
    };
    AddHotelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'AddHotelComponent',
            templateUrl: './addHotel.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AddHotelComponent);
    return AddHotelComponent;
}());
exports.AddHotelComponent = AddHotelComponent;
//# sourceMappingURL=addHotel.component.js.map