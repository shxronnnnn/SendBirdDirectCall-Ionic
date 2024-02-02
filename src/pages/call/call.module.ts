import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallPage } from './call';

@NgModule({
  declarations: [
    CallPage,
  ],
  imports: [
    IonicPageModule.forChild(CallPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CallPageModule {}
