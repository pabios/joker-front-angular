import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import Pusher from "pusher-js";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  channel!:any;
  info!: string;

  constructor(private toastr: ToastrService,
              private http:HttpClient) {
    Pusher.logToConsole = true;

    var pusher = new Pusher('2e4bc757da112b198aaf', {
      cluster: 'eu'
    });

    this.channel = pusher.subscribe('pabiosoft');
    this.channel.bind('my-event',  (data:string) => {
      // alert(JSON.stringify(data));
      //alert(data);
      //console.log(data);
      this.info = data;
    });

  }

  voirNotifPusher(){
    this.channel.bind('pusher:subscription_succeeded', function(data:any) {
      alert(JSON.stringify(data));
    });
  }

  showSuccess(message:string, title:string){
    this.toastr.success(message, title)
  }

  showError(message:string, title:string){
    this.toastr.error(message, title)
  }

  showInfo(message:string, title:string){
    this.toastr.info(message, title)
  }

  showWarning(message:string, title:string){
    this.toastr.warning(message, title)
  }

  likes(id:number):Observable<any> {
    // return this.http.get<any>("http://localhost:9000/index.php?action=nbPostApi");
    return this.http.get<any>(`http://localhost:9000/like/${id}`);
  }

}
