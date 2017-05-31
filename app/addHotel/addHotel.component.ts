import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'AddHotelComponent',
	templateUrl: './addHotel.html',
})
export class AddHotelComponent {
	http: Http;
	router: Router;
	postResponse: String;
	addHotelForm = new FormGroup({
	ime: new FormControl(),
	grad: new FormControl(),
	drzava: new FormControl()
});
constructor(http: Http, router: Router) {
	this.http = http;
	this.router = router;

}
onAddHotel(): void {
	var data = "ime=" + this.addHotelForm.value.ime + "&& grad=" + this.addHotelForm.value.grad + "&& drzava=" +
	this.addHotelForm.value.drzava;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/baza/addHotel.php', data, {
		headers: headers })
	.subscribe(
		data => {
			if (data["_body"] == "ok") {
				this.router.navigate(['/']);
			}
		}
	);
	}
}
