import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ComentariosPage } from '../comentarios/comentarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //comentarios: any = ComentariosPage;

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



  constructor(public nav: NavController) {

  }

  irCo(){
    this.nav.push(ComentariosPage);
  }




  openSearch(){
    this.nav.push(SearchPage);
  }

  


}
