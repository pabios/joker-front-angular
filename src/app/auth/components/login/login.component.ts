import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

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

  // onLogin(email:string,password:string):void {
  //   //this.auth.login();
  //
  //     const formData : FormData = new FormData();
  //     formData.append('email',email)
  //     formData.append('password',password)
  //
  //     this.auth.logIn(formData).subscribe(
  //       (res=>{
  //         console.log(res)
  //       })
  //     )
  //
  //    this.router.navigateByUrl('/facesnaps');
  // }

  onLogin(email:string,password:string):void {
    //this.auth.login();

    console.log(this.auth.sha512("my string for hashing").then(x => console.log(x)))


    const obs$ = this.auth.logIn().subscribe(res=>{
      console.log(res)
      const user = res.find((u:any)=>{
        return u.email === email && u.password === password
      });
      if(user){
        alert('Login Succesful');
        console.log('login succes')
        this.snapForm.reset()
        this.router.navigate(["home"])
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
