import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { EventosProvider } from '../../providers/eventos/eventos';
import { AvailableEventosPage } from '../available-eventos/available-eventos';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  eventoType: any;
  guests: any;
  beds: any;
  priceRange: any;
  from: any;
  to: any;


  constructor(public nav: NavController,public navParams: NavParams, public eventosService: EventosProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
 
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.priceRange = {
        lower: 0,
        upper: 500
    };

    this.eventoType = 'deportivo';
    this.guests = 1;
    this.beds = 1;
    this.from = today.toISOString();
    this.to = tomorrow.toISOString();

}

findEventos(){

    let loading = this.loadingCtrl.create({
        content: "Buscando eventos..."
    });

    loading.present();

    let options = {
        eventoType: this.eventoType,
        guests: this.guests,
        beds: this.beds,
        priceRange: this.priceRange,
        from: this.from,
        to: this.to
    };

    this.eventosService.getEventos(options).then((data) => {

        loading.dismiss();

        if(typeof(data[0]) === "undefined"){
            let alert = this.alertCtrl.create({
                title: 'Discupa!',
                subTitle: 'Has pisado el saman, no hemos encontrado eventos segun tu criterio.',
                buttons: ['Ok']
            });

            alert.present();
        } else {
            this.nav.push(AvailableEventosPage, {
                eventos: data,
                details: options
            });
        }

    }, (err) => {
        console.log(err);
    });

}


  

}
