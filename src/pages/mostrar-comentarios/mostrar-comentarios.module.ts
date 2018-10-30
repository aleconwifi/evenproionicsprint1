import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarComentariosPage } from './mostrar-comentarios';

@NgModule({
  declarations: [
    MostrarComentariosPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarComentariosPage),
  ],
})
export class MostrarComentariosPageModule {}
