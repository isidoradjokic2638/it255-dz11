import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'RegisterComponent',
	templateUrl: './register.html',
})
export class RegisterComponent {
	http: Http;
	router: Router;
	postResponse: String;
	registerForm = new FormGroup({
	username: new FormControl(),
	password: new FormControl(),
	name: new FormControl(),
	last: new FormControl(),
	email: new FormControl()
});
constructor(http: Http, router: Router) {
	this.http = http;
	this.router = router;

}
register(): void {

	var data = "username=" + this.registerForm.value.username + "&password=" + this.registerForm.value.password +
	 "&name=" + this.registerForm.value.name + "&last=" + this.registerForm.value.last + "&email=" + this.registerForm.value.email;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/baza/register.php', data, {
		headers: headers })
	.subscribe(
		data => {
			if (data["_body"] == "ok") {
				alert("asdas");
				this.router.navigate(['']);
			}
		}
	);
	}
}
