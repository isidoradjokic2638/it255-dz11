"use strict";
var router_1 = require('@angular/router');
//import { HomePageComponent } from './home/home.component';
//import { AboutUsComponent } from './aboutus/aboutus.component';
var addSoba_component_1 = require('./addSoba/addSoba.component');
var addHotel_component_1 = require('./addHotel/addHotel.component');
var appRoutes = [
    { path: '', component: addHotel_component_1.AddHotelComponent },
    { path: 'addHotel', component: addHotel_component_1.AddHotelComponent },
    { path: 'addSoba', component: addSoba_component_1.AddSobaComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map