import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComentariosPage } from '../comentarios/comentarios';
import { SearchPage } from '../search/search';


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
  tab2: any;
  tab3: any;

  constructor() {

    this.tab1 =HomePage;
    this.tab2 =ComentariosPage;
    this.tab3 =SearchPage;



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
