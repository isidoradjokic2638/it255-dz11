import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
  selector: 'app-root',
  templateUrl: './template.html',

})
export class AppComponent {
  private data: Object[];
  private router: Router;

  constructor(private http: Http, router: Router) {
    this.router = router;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    http.get('http://localhost/baza/prikaz.php')
        .map(res => res.json()).share()
        .subscribe(data => {
        	console.log(data);
              this.data = data;
            },
            err => {
              this.router.navigate(['./']);
            }
        );

}
 public editRoom(id: number) {
    this.router.navigateByUrl('/editRoom/' + id);
  }

   public openRoom(id: number) {
    this.router.navigateByUrl('/openRoom/' + id);
  }

  public deleteRoom(event: Event, id: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this.http.get('http://localhost/baza/deleteRoom.php?id='+id)
    .subscribe( data => {
      console.log(data);
      event.srcElement.parentElement.parentElement.remove();
    });
  }
}