import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()

export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
    public storage: Storage
  ) { }

  login(AppID: string, UserID: string, AccessToken: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setAppID(AppID);
      this.setUserID(UserID);
      this.setAccessToken(AccessToken);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  setAppID(AppID: string): Promise<any> {
    return this.storage.set('AppID', AppID);
  }

  setUserID(UserID: string): Promise<any> {
    return this.storage.set('UserID', UserID);
  }

  setAccessToken(AccessToken: string): Promise<any> {
    return this.storage.set('AccessToken', AccessToken);
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