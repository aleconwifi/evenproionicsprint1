import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the DeportivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deportivo',
  templateUrl: 'deportivo.html',
})
export class DeportivoPage {
  eventos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                  public eventoService: EventProvider,) {
  }

  

  ionViewDidLoad(){
 
    this.eventoService.getEventos().then((data) => {
      console.log(data);
      this.eventos = data;
    });
 
  }

}
