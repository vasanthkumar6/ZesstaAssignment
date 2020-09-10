import { Component, OnInit } from '@angular/core';
import { JobtitleService } from 'src/app/jobtitle.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

  import { from } from 'rxjs';
@Component({
  selector: 'app-career-jobs',
  templateUrl: './career-jobs.component.html',
  styleUrls: ['./career-jobs.component.css']
})

export class CareerJObsComponent implements OnInit {
  jobs;
  constructor(private gs:GlobalService, private jt:JobtitleService,private router:Router,private toastr:ToastrService) { }
  jobtitle;
  searchterm;
  obj:any=[]
    
  ngOnInit() {

    this.gs.jobsData().subscribe((resp)=>{
      if(resp['message']=='please login to continue')
      {
        alert(resp['message'])
      }
      else if(resp['message']=='session expired please login to continue')
      {
        alert(resp['message'])
      }
      else{
        this.jobs=(resp['message'])
        console.log("recived jobs object",resp['message'])
      }
        
        
    })

  }
  applyjob(jobName)
  {
     
    this.router.navigate(['/applyjobs/'+jobName])
    
  }


  search(value)
  {
    this.searchterm=value
  }
    
 
  deleteJob(jobId){
    console.log(jobId)
    this.gs.deleteCareerJob(jobId).subscribe((resp)=>{
      if(resp['message']=="job Deleted sucessfully")
      {
        alert()
        this.toastr.success("job Deleted sucessfully")
      }
      else if(resp['message']=="job not Existed"){
        this.toastr.error("job not Existed")
        this.ngOnInit()
        
      }
      
    })
  }

  update(obj){
    console.log(obj)
    this.gs.editCareerJob(obj).subscribe((resp)=>{
      if(resp['message']=="Updated Sucessfully")
      {
        alert()
        this.toastr.success("Updated Sucessfully")
      }
      else if(resp['message']=="job not Existed"){
        this.toastr.error("resp['message]")
        this.ngOnInit()
   
      }
    })
  }



  editJob(obj)
  {
    console.log(obj)
    this.obj=obj
  }

}
