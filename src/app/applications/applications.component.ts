import { Component, OnInit, HostListener, Input } from '@angular/core';
import { GlobalService } from '../global.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
applications=[]
title
content:boolean=false
array=[]
data=[]
selectedData=[]

technology=[]
totalAPPCount=0
technologynames:boolean=false;
finalArray=[]
brackets:boolean=false
application=[]
jobName=[]
countJob
nodata:boolean=false

  constructor(private gs:GlobalService,private toastr:ToastrService) { }

  // @Input() href: string;

  // @HostListener('click', ['$event'])
  // noop(event: MouseEvent) {
  //   if(this.href.length === 0 || this.href === '#') {
  //     event.preventDefault();
  //   }
  // }

  ngOnInit()
  {
    console.log(this.array)
    this.gs.getApplications().subscribe((resp)=>{
         this.applications=resp["message"]
         if(this.applications.length==0)
         {
               this.nodata=true
         }else{
          for(let v of this.applications)
          {
              if(this.jobName.length==0)
               {
                 this.jobName.push(this.applications[0].jobTitle)
               }
               else
               {
                    let count=0
                    for(let titles of this.jobName)
                    {
                      if(v.jobTitle==titles)
                      {
                        count++
                      }
                    }
                   if( count==0)
                    {
                        this.jobName.push(v.jobTitle)  
                    }     
              }
           }
          
          
          for(let j of this.jobName)
          {
           
            let countJobs=0
             for(let a of this.applications){ 
              
               if(a.jobTitle==j)
               {
                 countJobs++;
                 this.countJob=countJobs
               }
             
             }
           
               this.array.push(this.countJob)
            
          }
 

         }
         
        })
        
    

  } 


  sendTitle(title){
    // console.log(title)
    this.title=title.split("(")
    // console.log(this.title)
    this.technologynames=true
    this.data=[]

    for(let v of this.applications)
    { 
       if(v.jobTitle==this.title[0])
       {
        //  console.log(title) 

        this.data.push(v)

        this.selectedData=this.data
          this.content=true

       }
    }

    }
  

    accept(email)
    {
      console.log(email)
      this.gs.acceptMail(email).subscribe((resp)=>{
        console.log(resp['message'])
      })
    }
    reject(email)
    {
      console.log(email)
      this.gs.rejectMail(email).subscribe((resp)=>{
        if(resp['message']=="Candidate was Rejected")
        {
          this.toastr.success("Candidate was Rejected")
        }
        else if(resp['message']=="Application not Existed"){
          this.toastr.success("Application not Existed")
        }
         
      })
      this.ngOnInit()
    }

  

}
