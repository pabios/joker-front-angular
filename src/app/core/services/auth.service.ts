import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private token!: string;

  constructor(private http: HttpClient) {
  }
  login():void{
    this.token='ismatoken'

  }
  getToken(): string{
    return this.token;
  }

  logIn(emailAddress=null,password=null){
    return this.http.post<any>(`${environment.urlApi}/login`, { emailAddress, password })
      .pipe(map(response=> {
        localStorage.setItem('loggedInUser', JSON.stringify(response));
        this.token='ismatoken';
        console.log(response);

        return response;
      }));
  }
}


