import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserOptions } from './user-options';
import { NgForm } from '@angular/forms';
import { UserData } from '../../providers/user-data/user-data';
import { authenticate, init, connectWebSocket } from 'sendbird-calls';
import { CallPage } from '../call/call';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: UserOptions = {AppID: '', UserID: '', AccessToken: ''}
  submitted = false;
  callPage: CallPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData,) {
  }

  onLogin(form: NgForm) {
    // Save Credentials
    this.submitted = true;
    this.userData.login(this.login.AppID, this.login.UserID, this.login.AccessToken);

    // SendBirdCall Init
    this.initSendBirdCall(this.login.AppID);
    this.authentication();
    this.navCtrl.setRoot(CallPage);
  }      

  public initSendBirdCall(appId:string) {
    if (!appId){
      appId = this.login.AppID;
    }
    init(appId);
  }

  public authentication(){
    const authOption = { userId: this.login.UserID, accessToken: this.login.AccessToken };
    authenticate(authOption, (result, error) => {
      if (error) {
        alert("authentication error");
      }
      else {
        connectWebSocket()
        .then(/* Succeeded to connect */)
        .catch(/* Failed to connect */);
        //alert("authentication success");
      }
      return result;
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
