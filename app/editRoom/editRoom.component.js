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
var EditRoomComponent = (function () {
    function EditRoomComponent(http, router, route) {
        this.editRoomComponent = new forms_1.FormGroup({
            ime: new forms_1.FormControl(),
            velicina: new forms_1.FormControl(),
            cena: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        this.route = route;
    }
    EditRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('token', localStorage.getItem('token'));
            console.log(headers);
            _this.http.get('http://localhost/baza/getRoom.php?id=' + id, { headers: headers }).map(function (res) { return res.json(); }).share()
                .subscribe(function (data) {
                _this.data = data.data;
                _this.editRoomComponent.controls['ime'].setValue(_this.data.ime);
                _this.editRoomComponent.controls['velicina'].setValue(_this.data.velicina);
                _this.editRoomComponent.controls['cena'].setValue(_this.data.cena);
            }, function (err) {
                //this._router.navigate(['']);
            });
        });
    };
    EditRoomComponent.prototype.onEditRoom = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var data = "id=" + params['id'] + "&ime=" + _this.editRoomComponent.value.ime + "&velicina=" + _this.editRoomComponent.value.velicina + "&cena=" +
                _this.editRoomComponent.value.cena;
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            _this.http.post('http://localhost/baza/editRoom.php', data, {
                headers: headers })
                .subscribe(function (data) {
                console.log(data);
                if (data["_body"] == " ok") {
                    _this.router.navigate(['/']);
                }
            });
        });
    };
    EditRoomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'EditRoomComponent',
            templateUrl: './editRoom.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, router_1.ActivatedRoute])
    ], EditRoomComponent);
    return EditRoomComponent;
}());
exports.EditRoomComponent = EditRoomComponent;
//# sourceMappingURL=editRoom.component.js.map