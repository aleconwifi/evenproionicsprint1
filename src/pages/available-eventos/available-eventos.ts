import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';

/**
 * Generated class for the AvailableEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-available-eventos',
  templateUrl: 'available-eventos.html',
})
export class AvailableEventosPage {
  eventos: any;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.eventos = this.navParams.get('eventos');
  }

  bookEvento(evento){
    this.nav.push(BookingPage, {
        evento: evento,
        details: this.navParams.get('details')
    });
}

 


}
