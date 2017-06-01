import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';

import { AddHotelComponent } from './addHotel/addHotel.component';
import { AddSobaComponent } from './addSoba/addSoba.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './pipe/search';




@NgModule({
imports: [ BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule ],
declarations: [ AppComponent, AddHotelComponent, AddSobaComponent, LoginComponent,RegisterComponent, SearchPipe],
bootstrap: [ AppComponent ]
})
export class AppModule { }
