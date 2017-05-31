import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomePageComponent } from './home/home.component';
//import { AboutUsComponent } from './aboutus/aboutus.component';
import { AddSobaComponent } from './addSoba/addSoba.component';
import { AddHotelComponent } from './addHotel/addHotel.component';


const appRoutes: Routes = [

{ path: '', component: AddHotelComponent},
{ path: 'addHotel', component: AddHotelComponent},
{ path: 'addSoba', component: AddSobaComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
