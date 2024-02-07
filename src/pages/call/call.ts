import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VoicecallPage } from '../voicecall/voicecall';
import { CalleeOptions } from '../../providers/user-options';

/**
 * Generated class for the CallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})

export class CallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  calleeInfo: CalleeOptions = {CalleeID:''};

  gotoCall(){
    this.navCtrl.setRoot(VoicecallPage);
  }
}
