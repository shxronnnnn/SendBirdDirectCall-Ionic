import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceCallPage } from './voice-call';

@NgModule({
  declarations: [
    VoiceCallPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceCallPage),
  ],
})
export class VoiceCallPageModule {}
