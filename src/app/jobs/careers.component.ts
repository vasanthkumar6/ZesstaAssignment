import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { JobtitleService } from '../jobtitle.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class careersComponent implements OnInit {
  jobs;
  constructor(private gs:GlobalService, private jt:JobtitleService,private router:Router) { }
  jobtitle;
  searchterm;
  
    
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
        console.log("jobs",resp['message'])
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
    
 
}
