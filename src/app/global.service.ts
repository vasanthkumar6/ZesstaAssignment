import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private hc:HttpClient) { }

  insert(x)
  {
    this.hc.post("/admin/insert",x)
  }

  update(x)
  {
    this.hc.put("/admin/update",x)
  }
  delete()
  {
    this.hc.delete("/admin/delete")
  }

  Admindata(data):Observable<any>
  {
    console.log(data)
    return this.hc.post("/admin/addAdmin",data)
  }



  postjobData(x):Observable<any>
  {
    console.log(x)
    return this.hc.post("/admin/insert",x)
  }

  jobsData():Observable<any>
  {
    return  this.hc.get("/admin/jobs")
  }

  SubmitApplication(x):Observable<any>
  {
    return  this.hc.post("/admin/Applyjob",x)
  }
  saveApplication(x):Observable<any>
  {
    console.log(x)
    return  this.hc.post("/admin/saveApplication",x)
  }
  getApplications():Observable<any>
  {
    return  this.hc.get("/admin/applications")
  }
  // getTitleJobs(v):Observable<any>
  // {
  //   console.log("jobtitle service",v)
  //   return this.hc.get("/admin/JobTitleData",v)
  // }
  acceptMail(email):Observable<any>
  {
    console.log(email)
    return this.hc.post(`/admin/SendMail/${email}`,email)
  }
  rejectMail(email):Observable<any>
  {
    console.log(email)

    return this.hc.post(`/admin/rejectmail/${email}`,email)
  }
  shortlist():Observable<any>
  {
    return this.hc.get('/admin/shortlist')
  }

  //Applications
  deleteApplication(email):Observable<any>{
    console.log("glo servc",email)
    return this.hc.delete("admin/deleteApplication/"+email)
  }

  deleteCareerJob(jobid):Observable<any>{
    console.log("glo servc",jobid)
    return this.hc.delete("admin/deleteCareerJob/"+jobid)
  }

  editCareerJob(jobid):Observable<any>{
    console.log("glo servc",jobid)
    return this.hc.put("admin/updateCareerJob",jobid)
  }
}