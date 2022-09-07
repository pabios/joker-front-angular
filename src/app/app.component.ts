import { Component, OnInit } from '@angular/core';
import {interval, Observable} from "rxjs";
import {map, filter, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit() {

  }

  logger(text:string){
      console.log('je suis un tap icis'+text)
  }



}

