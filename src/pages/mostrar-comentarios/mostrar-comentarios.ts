import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ComentariosProvider } from '../../providers/comentarios/comentarios';
import { AgregarComentariosPage } from '../agregar-comentarios/agregar-comentarios';

/**
 * Generated class for the MostrarComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-comentarios',
  templateUrl: 'mostrar-comentarios.html',
})
export class MostrarComentariosPage {

  reviews: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public reviewService: ComentariosProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){
 
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });
 
  }
 
  addReview(){
 
    let modal = this.modalCtrl.create(AgregarComentariosPage);
 
    modal.onDidDismiss(review => {
      if(review){
        this.reviews.push(review);
        this.reviewService.createReview(review);       
      }
    });
 
    modal.present();
 
  }
 
  deleteReview(review){
 
    //Remove locally
      let index = this.reviews.indexOf(review);
 
      if(index > -1){
        this.reviews.splice(index, 1);
      }  
 
    //Remove from database
    this.reviewService.deleteReview(review._id);
  }


}
