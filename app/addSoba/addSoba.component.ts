import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'AddSobaComponent',
	templateUrl: './addSoba.html',
})
export class AddSobaComponent {
	http: Http;
	router: Router;
	postResponse: String;
	addSobaForm = new FormGroup({
	ime: new FormControl(),
	velicina: new FormControl(),
	cena: new FormControl()
});
constructor(http: Http, router: Router) {
	this.http = http;
	this.router = router;

}
onAddSoba(): void {
	var data = "ime=" + this.addSobaForm.value.ime + "&& velicina=" + this.addSobaForm.value.velicina + "&& cena=" +
	this.addSobaForm.value.cena;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/baza/addSoba.php', data, {
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
