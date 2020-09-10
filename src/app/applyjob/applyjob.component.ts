import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { JobtitleService } from '../jobtitle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css']
})
export class ApplyjobComponent implements OnInit {
  jobname;
  constructor(private gs:GlobalService,private jt:JobtitleService,private ar:ActivatedRoute) { }

  ngOnInit() {
    
     this.ar.paramMap.subscribe((params)=>{
       this.jobname=params.get('x')
       console.log(this.jobname)
     })
  }
  
 
  applyjob(v){

    v.jobTitle=this.jobname
    console.log(v)
    console.log("v")
    this.gs.saveApplication(v).subscribe((resp)=>{
      console.log("saveapplication",resp['message'])

    })
   
   
  }
  file:File;
  fileUpload(filedata){
    console.log(filedata.target.files[0])
    this.file=filedata.target.files[0];
    }
    
    //upload excel
     uploadExcel(data){
       console.log(data)
       
     let formdata = new FormData();
    //  formdata.append("branch",data.branch);
    //  formdata.append("year",data.year);
     formdata.append("uploadfile",this.file);
     this.gs.SubmitApplication(formdata).subscribe((res)=>{
     if(res["message"]=="log sheet uploaded sucessfully")
     {
     alert(res["message"]);
     this.ngOnInit();
     }
     else if(res["err_desc"]=="Corupted excel file"){
     alert(res["err_desc"]);
     }
    })
     }
    

}
