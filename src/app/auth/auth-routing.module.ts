import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";

const routes: Routes =[
  {path:'auth/login',component:LoginComponent},
  {path:'auth/signUp',component:SignUpComponent},
]
@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AuthRoutingModule{}
