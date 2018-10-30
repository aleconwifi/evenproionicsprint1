import { ScrollPage } from './../pages/scroll/scroll';
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
import { ComentariosPage } from '../pages/comentarios/comentarios';
import{ InfinitiveScrollDirective } from '../directives/infinitive-scroll.directive';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomePage,
    AvailableEventosPage,
    BookingPage,
    SearchPage,
    ComentariosPage,
    ScrollPage,
    InfinitiveScrollDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    ScrollPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventosProvider
  ]
})
export class AppModule {}
