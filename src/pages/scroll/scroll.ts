import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scroll',
  templateUrl: 'scroll.html',
})
export class ScrollPage {

  Lista = [];
  pocision = 0; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iniciarLista();
  }

  iniciarLista(){
    for(let i=0; i<15; i++){
      this.Lista.push(this.pocision);
      this.pocision += 1;
    }
  }
  nextLoad(){
    for(let i=this.pocision; i<this.pocision+10; i++){
      this.Lista.push(i);
    }
    this.pocision += 10;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrollPage');
  }

}
