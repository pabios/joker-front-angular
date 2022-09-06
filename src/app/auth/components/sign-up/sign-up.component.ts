import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  snapFormSign!: FormGroup;

  constructor(private auth:AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }


  signUp(email:string,password:string):void {
    //this.auth.login();

      const formData : FormData = new FormData();
      formData.append('email',email)
      formData.append('password',password)

      this.auth.signUp(formData).subscribe(
        (res=>{
          console.log(res)
        })
      )

     this.router.navigateByUrl('/facesnaps');
  }


}
