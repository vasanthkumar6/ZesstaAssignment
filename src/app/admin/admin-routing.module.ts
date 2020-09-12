import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ApplicationsComponent } from '../applications/applications.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { HelperGuard } from '../helper.guard';
import { ShortlistedComponent } from './shortlisted/shortlisted.component';
import { CareerJObsComponent } from './career-jobs/career-jobs.component';


const routes: Routes = [{path:'adminDashboard/:username',component:AdminDashboardComponent, 
children:[{path:"postjob",component:PostjobComponent},{path:"applications",component:ApplicationsComponent},
{path:"addAdmin",component:AddAdminComponent},{path:"shortlist",component:ShortlistedComponent},
{path:"careerJobs",component:CareerJObsComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
