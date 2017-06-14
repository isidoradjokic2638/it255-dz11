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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var OpenRoomComponent = (function () {
    function OpenRoomComponent(router, route, http) {
        this.roomData = new forms_1.FormGroup({
            openRoomComponent: new forms_1.FormControl(),
            beds: new forms_1.FormControl(),
            area: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        this.route = route;
        console.log(this.route);
    }
    OpenRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('token', localStorage.getItem('token'));
            console.log(headers);
            _this.http.get('http://localhost/baza/getRoom.php?id=' + id, { headers: headers }).map(function (res) { return res.json(); }).share()
                .subscribe(function (data) {
                _this._data = data.data;
            }, function (err) {
                //this._router.navigate(['']);
            });
        });
    };
    OpenRoomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'room-component',
            templateUrl: './openRoom.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, http_1.Http])
    ], OpenRoomComponent);
    return OpenRoomComponent;
}());
exports.OpenRoomComponent = OpenRoomComponent;
//# sourceMappingURL=openRoom.component.js.map