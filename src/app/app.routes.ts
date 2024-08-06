import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RedeemComponent } from './redeem/redeem.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: '',   redirectTo: '', pathMatch: 'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'redeem',component:RedeemComponent},

];

export const appRoutingProviders = [
    provideRouter(routes)
  ];
