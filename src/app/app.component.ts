import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { AgregarComentariosPage } from '../pages/agregar-comentarios/agregar-comentarios';
import { MostrarComentariosPage } from '../pages/mostrar-comentarios/mostrar-comentarios';
import { EventosPage } from '../pages/eventos/eventos';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  eventosPage = EventosPage;
  homePage = TabsPage;
  menuPage = MenuPage;
  agregarComentariosPage = MostrarComentariosPage;
  @ViewChild('nav') menu : NavController;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

      irAPagina(pagina){
          this.menu.setRoot(pagina);
          this.menuCtrl.close();

      }

}

