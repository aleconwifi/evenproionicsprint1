import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComentariosPage } from '../comentarios/comentarios';
import { SearchPage } from '../search/search';
import { AvailableEventosPage } from '../available-eventos/available-eventos';
import { MostrarComentariosPage } from '../mostrar-comentarios/mostrar-comentarios';
import { MenuPage } from '../menu/menu';
import { EventosPage } from '../eventos/eventos';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;

  tab3: any;
  tab4: any;
  tab5: any;

  constructor() {

    this.tab1 =HomePage;
    this.tab4 =MenuPage;
    this.tab5 =EventosPage;




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
