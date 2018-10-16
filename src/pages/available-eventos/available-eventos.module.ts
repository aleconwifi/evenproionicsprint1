import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailableEventosPage } from './available-eventos';

@NgModule({
  declarations: [
    AvailableEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailableEventosPage),
  ],
})
export class AvailableEventosPageModule {}
