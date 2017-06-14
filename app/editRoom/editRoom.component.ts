import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'EditRoomComponent',
	templateUrl: './editRoom.html',
})
export class EditRoomComponent {
	http: Http;
	data: any;
	router: Router;
	route: ActivatedRoute;
	postResponse: String;
	id: number;
	editRoomComponent = new FormGroup({
	ime: new FormControl(),
	velicina: new FormControl(),
	cena: new FormControl()
});
constructor(http: Http, router: Router, route: ActivatedRoute) {
	this.http = http;
	this.router = router;
	this.route=route;


}

 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.id=id;
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('token',localStorage.getItem('token'));
      console.log(headers);
      this.http.get('http://localhost/baza/getRoom.php?id='+id, {headers: headers}).map(res => res.json()).share()
        .subscribe(data => {
            this.data = data.data;
            this.editRoomComponent.controls['ime'].setValue(this.data.ime);
            this.editRoomComponent.controls['velicina'].setValue(this.data.velicina);
            this.editRoomComponent.controls['cena'].setValue(this.data.cena);
          },
          err => {
            //this._router.navigate(['']);
          }
        );
    });
  
  }
onEditRoom(): void {
	this.route.params.subscribe((params: Params) => { 
	var data ="id=" + params['id'] + "&ime=" + this.editRoomComponent.value.ime + "&velicina=" + this.editRoomComponent.value.velicina + "&cena=" +
	this.editRoomComponent.value.cena;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/baza/editRoom.php', data, {
		headers: headers })
	.subscribe(
		data => {
			console.log(data);
			if (data["_body"] == " ok") {
				this.router.navigate(['/']);
			}
		});
   });
}


}
