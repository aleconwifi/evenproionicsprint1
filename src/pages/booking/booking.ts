import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventosProvider } from '../../providers/eventos/eventos';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  evento: any;
    details: any;
    checkIn: any;
    checkOut: any;
 
    constructor(public nav: NavController, public navParams: NavParams, public eventosService: EventosProvider, public loadingCtrl: LoadingController) {
        this.evento = this.navParams.get('evento');
        this.details = this.navParams.get('details');
        this.checkIn = new Date(this.details.from).toString().substring(0,15);
        this.checkOut = new Date(this.details.to).toString().substring(0,15);
    }
 
    book(){
 
        let newReservation = {
            _id: this.evento._id,
            from: this.details.from.substring(0,10),
            to: this.details.from.substring(0,10)
        }
 
        let loading = this.loadingCtrl.create({
            content: "Buscando evento..."
        });
 
        loading.present();
 
        this.eventosService.reserveEvento(newReservation).then((res) => {
 
            loading.dismiss();
            this.nav.popToRoot();
 
        }, (err) => {
            console.log(err);
        });
 
    }

}
