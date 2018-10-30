import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventosProvider } from '../providers/eventos/eventos';
import { AvailableEventosPage } from '../pages/available-eventos/available-eventos';
import { BookingPage } from '../pages/booking/booking';
import { SearchPage } from '../pages/search/search';
import {HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComentariosPage } from '../pages/comentarios/comentarios';
import { TabsPage } from '../pages/tabs/tabs';
import { ComentariosProvider } from '../providers/comentarios/comentarios';
import { AgregarComentariosPage } from '../pages/agregar-comentarios/agregar-comentarios';
import { MostrarComentariosPage } from '../pages/mostrar-comentarios/mostrar-comentarios';
import { MenuPage } from '../pages/menu/menu';
import { EventoProvider } from '../providers/evento/evento.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomePage,
    AvailableEventosPage,
    BookingPage,
    SearchPage,
    ComentariosPage,
    AgregarComentariosPage,
    MostrarComentariosPage,
    MenuPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
   // CommonModule,
   // HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePage,
    AvailableEventosPage,
    BookingPage,
    SearchPage,
    ComentariosPage,
    AgregarComentariosPage,
    MostrarComentariosPage,
    MenuPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventosProvider,
    EventoProvider,
    ComentariosProvider
  ]
})
export class AppModule {}
