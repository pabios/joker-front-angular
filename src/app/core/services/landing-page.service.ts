import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) {
  }

  getAllStyle(): Observable<any> {
    return this.http.get<FaceSnap[]>('http://localhost:9000/style')
  }
}
