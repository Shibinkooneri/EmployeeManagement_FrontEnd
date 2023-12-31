import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddtdComponent } from './addtd/addtd.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'add',component:AddtdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
