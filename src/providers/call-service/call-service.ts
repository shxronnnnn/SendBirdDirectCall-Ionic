import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersCallServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallService {
  private static NOTIFICATION_ID = 1;
  public static EXTRA_IS_HEADS_UP_NOTIFICATION   = "is_heads_up_notification";
  public static EXTRA_REMOTE_NICKNAME_OR_USER_ID = "remote_nickname_or_user_id";
  public static EXTRA_CALL_STATE                 = "call_state";
  public static EXTRA_CALL_ID                    = "call_id";
  public static EXTRA_IS_VIDEO_CALL              = "is_video_call";
  public static EXTRA_CALLEE_ID_TO_DIAL          = "callee_id_to_dial";
  public static EXTRA_DO_DIAL                    = "do_dial";
  public static EXTRA_DO_ACCEPT                  = "do_accept";
  public static EXTRA_DO_LOCAL_VIDEO_START       = "do_local_video_start";

  public static EXTRA_DO_END                     = "do_end";

  constructor(public http: HttpClient) {
    console.log('Hello CallService Provider');
  }

  
}
