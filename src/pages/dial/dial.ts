import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DirectCallProperties } from '../call/call';

/**
 * Generated class for the DialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dial',
  templateUrl: 'dial.html',
})
export class DialPage {
  public calleeName: string;
  directCallProperties: DirectCallProperties;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad(){
    //this.calleeName = this.directCallProperties.callId;
  }

}
