import { Component, OnInit  } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ComentariosPage } from '../comentarios/comentarios';
import { EventoProvider } from '../../providers/evento/evento.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  //reviews: any;
  listaEventos: Object;

  comentarios: any = ComentariosPage;

  slides =[{
    titulo: "Comienza a ser un Hackerman",
    descripcion: "Auditorio Polar 1:00 PM",
    imagen: "../assets/imgs/mendilloo.png",

  },

  {
    titulo: "Baja unos kilitos",
    descripcion: "Jardines frente a gradas 12:00 pm",
    imagen: "../assets/imgs/defensa.png",

  },

  {
    titulo: "Aun no consigues tu media naranja?",
    descripcion: "Auditorio Manoa 2:00 PM",
    imagen: "../assets/imgs/simon.png",

  },

 
  ];



constructor(public navCtrl: NavController, public navParams: NavParams,
               public modalCtrl: ModalController,public eventosServicio: EventoProvider,) {

                this.listaEventos = eventosServicio.lista;

  }



  irCo(){
    this.navCtrl.push(ComentariosPage);
  }

  openSearch(){
    this.navCtrl.push(SearchPage);
  }


}
