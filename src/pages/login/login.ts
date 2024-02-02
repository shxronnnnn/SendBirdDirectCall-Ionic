import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserOptions } from '../../providers/user-options';
import { NgForm } from '@angular/forms';
import { UserData } from '../../providers/user-data/user-data';
import { authenticate, init, connectWebSocket } from 'sendbird-calls';
import { CallPage } from '../call/call';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


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

  firebaseConfig = {
    apiKey: "AIzaSyD0jY76YxxSv4PhEY9bTS9jzEzo1OGoL_k",
    authDomain: "sendbirddirectcall-f57a4.firebaseapp.com",
    projectId: "sendbirddirectcall-f57a4",
    storageBucket: "sendbirddirectcall-f57a4.appspot.com",
    messagingSenderId: "233841587764",
    appId: "1:233841587764:web:b9f25b3c88937c08a4bc61",
    measurementId: "G-RVELVYE26B"
  };
  
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData,) {
  }

  onLogin(form: NgForm) {
    //this.submitted = true;
    //this.userData.login(this.login.AppID, this.login.UserID, this.login.AccessToken);

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
