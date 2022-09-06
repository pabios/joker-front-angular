import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {LandingPageService} from "../../../core/services/landing-page.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  userEmail!: string;
  like!:number;
  id!:number;
  style$!: Observable<any>;

  constructor(private router: Router,
              private acceuilService:LandingPageService) { }

  ngOnInit(): void {
    this.style$ = this.acceuilService.getAllStyle();
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form:NgForm):void{
    console.log(form.value)
  }
}
