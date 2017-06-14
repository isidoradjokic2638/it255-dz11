"use strict";
var router_1 = require('@angular/router');
var addSoba_component_1 = require('./addSoba/addSoba.component');
var addHotel_component_1 = require('./addHotel/addHotel.component');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var editRoom_component_1 = require('./editRoom/editRoom.component');
var openRoom_component_1 = require('./openRoom/openRoom.component');
var appRoutes = [
    { path: '', component: addHotel_component_1.AddHotelComponent },
    { path: 'addHotel', component: addHotel_component_1.AddHotelComponent },
    { path: 'addSoba', component: addSoba_component_1.AddSobaComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'editRoom/:id', component: editRoom_component_1.EditRoomComponent },
    { path: 'openRoom/:id', component: openRoom_component_1.OpenRoomComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map