import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserOptions } from './user-options';
import { NgForm } from '@angular/forms';
import { UserData } from '../../providers/user-data/user-data';
import { authenticate, init } from 'sendbird-calls';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData,) {
  }

  onLogin(form: NgForm) {
    // Save Credentials
    this.submitted = true;
    if (form.valid) {
      this.userData.login(this.login.AppID);
      this.userData.login(this.login.UserID);
      this.userData.login(this.login.AccessToken);
    }

    // SendBirdCall Init
    this.initSendBirdCall(this.login.AppID);
    this.authentication();
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
        alert("authentication success");
        //go to calling page
      }
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
