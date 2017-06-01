import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'LoginComponent',
	templateUrl: './login.html',
})
export class LoginComponent {
	http: Http;
	router: Router;
	postResponse: String;
	loginForm = new FormGroup({
	username: new FormControl(),
	password: new FormControl()
});
constructor(http: Http, router: Router) {
	this.http = http;
	this.router = router;

}
login(): void {
	var data = "username=" + this.loginForm.value.username + "&password=" + this.loginForm.value.password;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/baza/login.php', data, {
		headers: headers })
	.subscribe(
		data => {
			console.log(data);
			if (data["_body"] == " ok") {
				alert("asdasa");
				// this.router.navigate(['']);
			}
		}
	);
	}
}
