import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {sha512} from "js-sha512";
import {NotificationService} from "../../../core/services/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  snapForm!: FormGroup;


  constructor(private auth:AuthService,
              private router: Router,
              private  notif: NotificationService) { }

  ngOnInit(): void {
    this.snapForm = new FormGroup({
      email: new FormControl()
    });
  }



  onLogin(email:string,password:string):void {
    //this.auth.login();
   // console.log(sha512(password));

    const obs$ = this.auth.logIn().subscribe(res=>{
      console.log(res)
      const user = res.find((u:any)=>{
        return u.email === email && u.password === sha512(password)
      });
      if(user){
        this.snapForm.reset();
        this.router.navigateByUrl('/facesnaps');
        this.notif.showSuccess("bienvenue","nous somme ravis de vous revoir");


      }else{
       // alert("user not found")
        this.notif.showError("ooups","aucun utilisateur trouver pour ce compte")

      }
    },err=>{
      alert("Something went wrong")
    })
   // this.router.navigateByUrl('/facesnaps');

  }



}
