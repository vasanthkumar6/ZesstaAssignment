import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { AuthGaurdGuard } from './auth-gaurd.guard';
import { careersComponent } from './jobs/careers.component';



const routes: Routes = [{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},{path:"careers",component:careersComponent},
{path:"applyjobs/:x",component:ApplyjobComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
