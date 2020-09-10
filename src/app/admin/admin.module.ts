import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { PostjobComponent } from './postjob/postjob.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ShortlistedComponent } from './shortlisted/shortlisted.component';
import { CareerJObsComponent } from './career-jobs/career-jobs.component';
import { CareerJobSearchPipe } from '../career-job-search.pipe';






@NgModule({
  declarations: [AdminDashboardComponent, PostjobComponent, AddAdminComponent, ShortlistedComponent, CareerJObsComponent,CareerJobSearchPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule

  ]
})
export class AdminModule { }
