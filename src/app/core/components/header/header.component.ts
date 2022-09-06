import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FaceSnapsService} from "../../services/face-snaps.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   nombrePost$!: Observable<number>;

  constructor(private router: Router,
              private  fs:FaceSnapsService) { }

  ngOnInit(): void {
    this.nombrePost$ = this.fs.nbPost();
  }

  onAddNewFaceSnap():void{
    this.router.navigateByUrl('/facesnaps/create').then(r => '');
  }



}
