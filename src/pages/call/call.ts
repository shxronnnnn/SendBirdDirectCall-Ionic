import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UserData, User} from '../../providers/user-data/user-data';
import { CalleeOptions } from '../../providers/user-options';
import { DialPage } from '../dial/dial';
import { DialParams, DirectCall, dial} from 'sendbird-calls';

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

  dialParams:DialParams = {
    userId: "",
    isVideoCall: true,
    callOption: {
      // localMediaView?: HTMLMediaElement;
      // remoteMediaView?: HTMLMediaElement;
      audioEnabled: true,
      videoEnabled: true
    }
  };
  
  onVoiceCall(form: NgForm){
    this.dialParams.userId = this.calleeInfo.CalleeID;
    dial(this.dialParams, (call, error) => {
      if (error) {
        alert("calling error");
      }
      else {
        alert("CAlling now");
      }
    });
    this.navCtrl.setRoot(DialPage);
  };
}

export interface SendbirdCallListener {
  /**
   * Called when received dialing.
   *
   * @since 1.0.0
   */
  onRinging: (call: DirectCallProperties) => void;
};


export interface DirectCallProperties {
  /**
   * Gets call ID.
   *
   * @since 1.0.0
   */
  callId: string;
  
  /**
   * Gets call log.
   *
   * @since 1.0.0
   */
  callLog: DirectCallLog | null;

  /**
   * Gets callee.
   *
   * @since 1.0.0
   */
  callee: DirectCallUser | null;

  /**
   * Gets caller.
   *
   * @since 1.0.0
   */
  caller: DirectCallUser | null;

  /**
   * Gets ender.
   *
   * @since 1.0.0
   */
  endedBy: DirectCallUser | null;

  /**
   * Gets custom items of this {@link DirectCall} instance.
   *
   * @since 1.0.0
   */
  customItems: Record<string, string>;

  /**
   * Gets call startedAt timestamp.
   *
   * @since 1.0.0
   */
  startedAt: number;

  /**
   * Gets call duration(ms).
   *
   * @since 1.0.0
   */
  duration: number;

  /**
   * Gets end result.
   *
   * @since 1.0.0
   */
  endResult: DirectCallEndResult;

  /**
   * Gets local user.
   *
   * @since 1.0.0
   */
  localUser: DirectCallUser | null;

  /**
   * Gets remote user.
   *
   * @since 1.0.0
   */
  remoteUser: DirectCallUser | null;

  /**
   * Gets my role.
   *
   * @since 1.0.0
   */
  myRole: DirectCallUserRole | null;

  /**
   * Is ended.
   * True if call is ended. Otherwise, false.
   *
   * @since 1.0.0
   */
  isEnded: boolean;

  /**
   * Indicates whether the call is on hold by either a callee or a caller, or by both.
   * True if the {@link DirectCall} is on hold. Otherwise, false.
   *
   * @since 1.0.0
   */
  isOnHold: boolean;

  /**
   * Is ongoing.
   * True if call is ongoing. Otherwise, false.
   *
   * @since 1.0.0
   */
  isOngoing: boolean;
  /**
   * Is video call.
   *
   * @return True if video call. Otherwise, false.
   * @since 1.0.0
   */
  isVideoCall: boolean;

  /**
   * Indicates whether the local user's screen is being shared.
   * True if the local user's screen is being shared. Otherwise, false.
   *
   * @since 1.0.0
   */
  isLocalScreenShareEnabled: boolean;

  /**
   * Is local audio enabled.
   * True if local audio is enabled. Otherwise, false.
   *
   * @since 1.0.0
   */
  isLocalAudioEnabled: boolean;

  /**
   * Is local video enabled.
   * True if local video is enabled. Otherwise, false.
   *
   * @since 1.0.0
   */
  isLocalVideoEnabled: boolean;

  /**
   * Is remote audio enabled.
   * True if remote audio is enabled. Otherwise, false.
   *
   * @since 1.0.0
   */
  isRemoteAudioEnabled: boolean;

  /**
   * Is remote video enabled.
   * True if remote video is enabled. Otherwise, false.
   *
   * @since 1.0.0
   */
  isRemoteVideoEnabled: boolean;
}

export interface DirectCallLog {
  startedAt: number;
  endedAt: number;
  duration: number;

  callId: string;
  isFromServer: boolean;
  isVideoCall: boolean;
  customItems: Record<string, string>;
  endResult: DirectCallEndResult;

  myRole: DirectCallUserRole;
  callee: DirectCallUser | null;
  caller: DirectCallUser | null;
  endedBy: DirectCallUser | null;
}

export interface DirectCallUser extends User {
  role: DirectCallUserRole;
}

export type CustomItemUpdateResult = {
  updatedItems: Record<string, string>;
  affectedKeys: string[];
};

export type CallOptions = {
  localVideoViewId?: number;
  remoteVideoViewId?: number;

  /** For SendbirdChat integration **/
  channelUrl?: string;

  /** @default true */
  audioEnabled?: boolean;
  /** @default true */
  videoEnabled?: boolean;
  /** @default true */
  frontCamera?: boolean;
};

export enum DirectCallEndResult {
  /** Default value of the EndResult. **/
  NONE = 'NONE',

  /** The call has ended by either the caller or callee after successful connection. **/
  COMPLETED = 'COMPLETED',

  /** The caller has canceled the call before the callee accepts or declines. **/
  CANCELED = 'CANCELED',

  /** The callee has declined the call. **/
  DECLINED = 'DECLINED',

  /** The call is accepted on one of the callee’s other devices. All the other devices will receive this call result. **/
  OTHER_DEVICE_ACCEPTED = 'OTHER_DEVICE_ACCEPTED',

  /** Sendbird server failed to establish a media session between the caller and callee within a specific period of time. **/
  TIMED_OUT = 'TIMED_OUT',

  /** Data streaming from either the caller or the callee has stopped due to a WebRTC connection issue while calling. **/
  CONNECTION_LOST = 'CONNECTION_LOST',

  /** The callee has not either accepted or declined the call for a specific period of time. **/
  NO_ANSWER = 'NO_ANSWER',

  /** The 'dial()' method of the call has failed. **/
  DIAL_FAILED = 'DIAL_FAILED',

  /** The 'accept()' method of the call has failed. **/
  ACCEPT_FAILED = 'ACCEPT_FAILED',

  /** Unknown **/
  UNKNOWN = 'UNKNOWN',

  NOT_CONNECTED = 'NOT_CONNECTED',
}

export enum DirectCallUserRole {
  CALLER = 'CALLER',
  CALLEE = 'CALLEE',
}
