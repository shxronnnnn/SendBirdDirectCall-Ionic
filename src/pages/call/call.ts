import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UserData } from '../../providers/user-data/user-data';
import { CalleeOptions } from '../../providers/user-options';
import { DialPage } from '../dial/dial';
import { DialParams, DirectCall, DirectCallOption, addListener, currentUser, dial } from 'sendbird-calls';
import { UserOptions } from '../../providers/user-options';

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
  
  calleeInfo: CalleeOptions = {CalleeID:''};
  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData) {
    
  }
  directCallOption:DirectCallOption = {
    //localMediaView?: HTMLMediaElement,
    //remoteMediaView?: HTMLMediaElement,
    audioEnabled: true,
    videoEnabled: true
  }
  

  dialParams:DialParams = {
    userId: this.calleeInfo.CalleeID,
    isVideoCall: true,
    callOption: this.directCallOption,
  };


  onVoiceCall(){
    //this.call;
    this.navCtrl.setRoot(DialPage);
  };

  // call = dial(this.dialParams, (call, error) => {
  //   if (error) {

  //   }
  //   else {
  //     return;
  //   }
  // });

  // onEstablished(call:DirectCall){

  // };

  // onConnected(call:DirectCall){

  // };

  // onEnded(call:DirectCall){

  // };

  // onRemoteVideoSettingsChanged(call:DirectCall){

  // };

  // onLocalVideoSettingsChanged(call:DirectCall){

  // };

  // onCalling(form: NgForm){
  //   this.submitted = true;
  //   this.userData.Callee(this.calleeInfo.CalleeID);
  // }
}

// Call states
export enum STATE {
  STATE_ACCEPTING,
  STATE_OUTGOING,
  STATE_CONNECTED,
  STATE_ENDING,
  STATE_ENDED
}