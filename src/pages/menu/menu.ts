import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeportivoPage } from '../deportivo/deportivo';
import { AcademicoPage } from '../academico/academico';
import { CulturalPage } from '../cultural/cultural';
import { AutoridadesPage } from '../autoridades/autoridades';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

    listadeCategorias: Object;
    deportivopage = DeportivoPage;
    academicopage = AcademicoPage;
    culturalPage = CulturalPage;
    autoridadesPage = AutoridadesPage;
 
  items = [
      'Deportivos',
      'Culturales',
      'Autoridades',
      'Academicos',
      'Eventos del dia',
      'Eventos de manana ',
      'Eventos de la Semana',
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
  


    verDeportivo(){
        this.navCtrl.push(this.deportivopage);
    }

    verAcademicos(){
      this.navCtrl.push(this.academicopage);

    }

    verCulturales(){
      this.navCtrl.push(this.culturalPage);

    }

    verAutoridades(){
      this.navCtrl.push(this.autoridadesPage);

    }



}
