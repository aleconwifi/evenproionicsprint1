import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { MostrarComentariosPage } from '../mostrar-comentarios/mostrar-comentarios';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  eventos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                       public eventoService: EventProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){
 
    this.eventoService.getEventos().then((data) => {
      console.log(data);
      this.eventos = data;
    });
 
  }

  doInfinite(infiniteScroll) {
    this.eventoService.getEventos().then((data) => {
      console.log(data);
      this.eventos = this.eventos.concat(data);
      infiniteScroll.complete();
    });
    
  }



  doRefresh(refresher) {

    this.eventoService.getEventos().then((data) => {
      console.log(data);
      this.eventos = data;
      refresher.complete();
    });
 
  }

  irCo(){
    this.navCtrl.push(MostrarComentariosPage);
  }



}




  


 




