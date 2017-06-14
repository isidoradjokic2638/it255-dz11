import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  moduleId:module.id,
  selector: 'room-component',
  templateUrl: './openRoom.html'
})

export class OpenRoomComponent implements OnInit {
	
  private _data: any;
  private http:any;
  private route:any;
  private router:any;

  roomData = new FormGroup({
    openRoomComponent: new FormControl(),
    beds: new FormControl(),
    area: new FormControl()
  });


  constructor(router: Router, route: ActivatedRoute, http: Http) {
  this.http = http;
  this.router = router;
  this.route = route;
  console.log(this.route);

}


  
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('token',localStorage.getItem('token'));
      console.log(headers);
      this.http.get('http://localhost/baza/getRoom.php?id='+id, {headers: headers}).map(res => res.json()).share()
        .subscribe(data => {
            this._data = data.data;
          },
          err => {
            //this._router.navigate(['']);
          }
        );
    });
  }

}