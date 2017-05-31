import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
	moduleId: module.id,
  selector: 'app-root',
  templateUrl: './template.html',

})
export class AppComponent {
	constructor() {
		console.log("sisis");   
	}
  }