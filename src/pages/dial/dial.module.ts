import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DialPage } from './dial';

@NgModule({
  declarations: [
    DialPage,
  ],
  imports: [
    IonicPageModule.forChild(DialPage),
  ],
})
export class DialPageModule {}
