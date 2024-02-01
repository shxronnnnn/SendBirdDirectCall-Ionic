import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { STATE } from './call';
import { CalleeOptions } from '../../providers/user-options';
import { UserData } from '../../providers/user-data/user-data';
import { DirectCall, addListener } from 'sendbird-calls';
/*
  Generated class for the ProvidersCallServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class CallService {

  constructor(public http: HttpClient, public userData: UserData) {
    console.log('Hello CallService Provider');
  }

  calleeInfo: CalleeOptions = {CalleeID:''}
  submitted = false;

  
  onCalling(form: NgForm){
    this.submitted = true;
    this.userData.Callee(this.calleeInfo.CalleeID);
  }

  static ServiceData = class {
    isHeadsUpNotification:boolean;
    remoteNicknameOrUserId:String;
    callState:STATE;
    callId:String;
    isVideoCall:boolean;
    calleeIdToDial:String;
    doDial:boolean;
    doAccept:boolean;
    doLocalVideoStart:boolean;

    ServiceData() {

    }
  }
}