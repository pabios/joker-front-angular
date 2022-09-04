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
  // logIn(formData:FormData):Observable<any>{
  //   return this.http.post<any>('http://localhost:9000/?action=connexionApi',formData)
  // }

  logIn():Observable<any> {
    return this.http.get<any>("http://localhost:9000/index.php?action=listUsersApi");
  }

    sha512(str:string) {
    return crypto.subtle.digest("SHA-512", new TextEncoder().encode(str)).then(buf => {
      return Array.prototype.map.call(new Uint8Array(buf), x=>((x.toString(16)).slice(-2))).join('');
    });
  }
}


