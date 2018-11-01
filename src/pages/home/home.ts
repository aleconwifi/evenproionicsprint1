import { Component, OnInit  } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ComentariosPage } from '../comentarios/comentarios';
import { EventoProvider } from '../../providers/evento/evento.service';
import { MostrarComentariosPage } from '../mostrar-comentarios/mostrar-comentarios';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  //reviews: any;
  

  comentarios: any = ComentariosPage;

  slides =[{
    titulo: "Stand Hot: Stand up Comedy",
    ubicacion: "Auditorio Polar",
    organizador: "FCE UNIMET",
    hora: "2:00 PM",

    imagen: "../assets/imgs/mendilloo.png",

  },

  {
    titulo: "El uso de Drones en la Ingeniería",
    ubicacion: "Auditorio Manoa",
    organizador: "CEIC",
    hora: "9:00 AM",

    imagen: "../assets/imgs/defensa.png",

  },

  {
    titulo: "Torneo Interescuelas",
    descripcion: "Ciudad Deportiva 2:00 PM",
    imagen: "../assets/imgs/simon.png",

  },

 
  ];



constructor(public navCtrl: NavController, public navParams: NavParams,
               public modalCtrl: ModalController,public eventosServicio: EventoProvider,) {

      

  }



  irCo(){
    this.navCtrl.push(MostrarComentariosPage);
  }

  openSearch(){
    this.navCtrl.push(MostrarComentariosPage);
  }


}
