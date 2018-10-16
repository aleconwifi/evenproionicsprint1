import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventosProvider {

  constructor(public http: Http) {

  }

  getEventos(options){
 
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('http://localhost:8080/api/eventos', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
 
  }
 
  reserveEvento(data){
 
    return new Promise(resolve => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('http://localhost:8080/api/eventos/reserve', JSON.stringify(data), {headers: headers})
        .subscribe((data) => {
          resolve(data);
        });
 
    });
 
  }

}
