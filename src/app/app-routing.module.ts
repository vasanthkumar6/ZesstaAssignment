import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { AuthGaurdGuard } from './auth-gaurd.guard';


const routes: Routes = [{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},{path:"jobs",component:JobsComponent},
{path:"applyjobs/:x",component:ApplyjobComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
