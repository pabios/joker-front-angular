import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {sha512} from "js-sha512";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  snapForm!: FormGroup;


  constructor(private auth:AuthService,
              private router: Router) { }

  ngOnInit(): void {
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
        //alert('Login Succesful');
        console.log('login succes')
       // this.snapForm.reset()
        this.router.navigateByUrl('/facesnaps').then(r => true);
      }else{
        alert("user not found")
        console.log('user not found')

      }
    },err=>{
      alert("Something went wrong")
    })
   // this.router.navigateByUrl('/facesnaps');

  }



}
