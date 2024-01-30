import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()

export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
    public storage: Storage
  ) { }

  login(AppID: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      //this.setAppID(AppID);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('AppID');
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }

  setAppID(AppID: string): Promise<any> {
    return this.storage.set('AppID', AppID);
  }

  getAppID(): Promise<string> {
    return this.storage.get('AppID').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

}