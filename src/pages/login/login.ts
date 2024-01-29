import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserOptions } from './user-options';
import { NgForm } from '@angular/forms';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      
    }
  }      

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
