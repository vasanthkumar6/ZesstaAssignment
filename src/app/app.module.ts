import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JobsComponent } from './jobs/jobs.component';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { NgxLoadingModule } from 'ngx-loading';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { MaterialModule } from './material/material.module';
import { ApplicationsComponent } from './applications/applications.component';
import { JobsearchPipe } from './jobsearch.pipe';
import { AuthorizationService } from './authorization.service';
import { HelperGuard } from './helper.guard';
// import { CareerJobSearchPipe } from './career-job-search.pipe';
// import { ShortlistedComponent } from './shortlisted/shortlisted.component';
// import { AddAdminComponent } from './add-admin/add-admin.component';

// import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    JobsComponent,
    ApplyjobComponent,
    ApplicationsComponent,
    JobsearchPipe,
    // CareerJobSearchPipe,
    // ShortlistedComponent,
    // AddAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MaterialModule
    

    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationService,
    multi:true},
    HelperGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
