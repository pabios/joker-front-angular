import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private token!: string;

  login():void{
    this.token='ismafaketoken'
  }
  getToken(): string{
    return this.token;
  }
}
