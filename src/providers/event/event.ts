import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ComentariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getEventos(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:3000/api/eventos')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createEvento(evento){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://localhost:3000/api/eventos', JSON.stringify(evento), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
  deleteEvento(id){
 
    this.http.delete('http://localhost:3000/api/evento/' + id).subscribe((res) => {
      console.log(res.json());
    });   
 
  }



}