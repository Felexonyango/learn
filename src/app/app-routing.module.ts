import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './learning/modules/auth/components/register/register.component';
import { LoginComponent } from './learning/modules/auth/components/login/login.component';
import { HomeComponent } from './learning/modules/Home/components/home.component';
const routes: Routes = [
  
  {
  path:'',
  component:HomeComponent
  },
  { 
    path: 'register',
   component: RegisterComponent
  
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
