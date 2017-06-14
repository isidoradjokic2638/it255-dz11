import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSobaComponent } from './addSoba/addSoba.component';
import { AddHotelComponent } from './addHotel/addHotel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditRoomComponent } from './editRoom/editRoom.component';
import { OpenRoomComponent } from './openRoom/openRoom.component';

const appRoutes: Routes = [

{ path: '', component: AddHotelComponent},
{ path: 'addHotel', component: AddHotelComponent},
{ path: 'addSoba', component: AddSobaComponent},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'editRoom/:id', component: EditRoomComponent},
{ path: 'openRoom/:id', component: OpenRoomComponent }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
