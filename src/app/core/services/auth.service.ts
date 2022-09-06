import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

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

  /**
   * connexion
   * @param formData
   */
  signUp(formData:FormData):Observable<any>{
    return this.http.post<any>('http://localhost:9000/signUp',formData,{headers: {
      'X_API_KEY':this.token
      }})
  }

  logIn():Observable<any> {
    // return this.http.get<any>("http://localhost:9000/index.php?action=listUsersApi");
    return this.http.get<any>("http://localhost:9000/login",
      {headers: {
          'X_API_KEY':this.token
        }});
  }


}


