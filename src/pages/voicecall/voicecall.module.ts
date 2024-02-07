import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoicecallPage } from './voicecall';

@NgModule({
  declarations: [
    VoicecallPage,
  ],
  imports: [
    IonicPageModule.forChild(VoicecallPage),
  ],
})
export class VoicecallPageModule {}
