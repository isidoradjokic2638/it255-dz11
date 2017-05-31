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
var AddSobaComponent = (function () {
    function AddSobaComponent(http, router) {
        this.addSobaForm = new forms_1.FormGroup({
            ime: new forms_1.FormControl(),
            velicina: new forms_1.FormControl(),
            cena: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
    }
    AddSobaComponent.prototype.onAddSoba = function () {
        var _this = this;
        var data = "ime=" + this.addSobaForm.value.ime + "&& velicina=" + this.addSobaForm.value.velicina + "&& cena=" +
            this.addSobaForm.value.cena;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/baza/addSoba.php', data, {
            headers: headers })
            .subscribe(function (data) {
            if (data["_body"] == "ok") {
                _this.router.navigate(['/']);
            }
        });
    };
    AddSobaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'AddSobaComponent',
            templateUrl: './addSoba.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AddSobaComponent);
    return AddSobaComponent;
}());
exports.AddSobaComponent = AddSobaComponent;
//# sourceMappingURL=addSoba.component.js.map