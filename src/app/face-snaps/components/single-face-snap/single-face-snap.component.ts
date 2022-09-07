import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {NotificationService} from "../../../core/services/notification.service";
import Pusher from "pusher-js";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  snapForm!: FormGroup;

  buttonText!: string;
  entierRegex!: RegExp;

  channel!:any;
  info!: string;
  lesLikes$!: Observable<any>;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute,
              private  formBuilder: FormBuilder,
              private pusherS:NotificationService) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    // this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
     this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
      this.lesLikes$= this.pusherS.likes(76);
     // pusher

    // Pusher.logToConsole = true;
    //
    // var pusher = new Pusher('2e4bc757da112b198aaf', {
    //   cluster: 'eu'
    // });
    //
    // this.channel = pusher.subscribe('pabiosoft');
    // this.channel.bind('my-event',  (data:string) => {
    //   // alert(JSON.stringify(data));
    //   alert(data);
    //   console.log(data);
    //   this.info = data;
    // });

    this.info = this.pusherS.info;
    //alert(this.info)
    console.log(this.info);console.log('sont les info')


  }

  voirLike(id:number):Observable<any>{
    return this.pusherS.likes(id);
  }

  // onSnap() {
  //   if (this.buttonText === 'Oh Snap!') {
  //     this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  //     this.buttonText = 'Oops, unSnap!';
  //   } else {
  //     this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  //     this.buttonText = 'Oh Snap!';
  //   }
  // }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
          this.buttonText = 'Oops, unSnap!';
        })
      ).subscribe();
    } else {
      this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
          this.buttonText = 'Oh Snap!';
        })
      ).subscribe();
    }


    //  securison ce truc
    //@todo logique a remplacer par snapFacesnapService
    this.entierRegex = /^\d+$/;
    this.snapForm = this.formBuilder.group({
        id: [null, Validators.required,Validators.pattern(this.entierRegex)],
        lId: [null, Validators.required,Validators.pattern(this.entierRegex)]
      }, {
        updateOn: 'blur' // formulaire mis a jours lorsqu'on change de champs
      }
    );
  }
  /**
   * likons ce truc
   */



  onSendReact(faceSnapId: string,like:string){
    const formData : FormData = new FormData();
    formData.append('like',like.toString())
    formData.append('lId',faceSnapId.toString())

    this.faceSnapsService.reaction(formData).subscribe(
      (res=>{
        console.log(res)
      })
    )
  }


}
