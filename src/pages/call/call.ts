import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallService } from './call-service';

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

}

// Call states
export enum STATE {
  STATE_ACCEPTING,
  STATE_OUTGOING,
  STATE_CONNECTED,
  STATE_ENDING,
  STATE_ENDED
}
