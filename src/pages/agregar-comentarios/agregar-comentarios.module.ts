import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarComentariosPage } from './agregar-comentarios';

@NgModule({
  declarations: [
    AgregarComentariosPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarComentariosPage),
  ],
})
export class AgregarComentariosPageModule {}
