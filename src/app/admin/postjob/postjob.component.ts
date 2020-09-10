import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  constructor(private gs:GlobalService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  postjob(data)
  {
    console.log(data)
      this.gs.postjobData(data).subscribe((data)=>{
        if(data['message']=="posted sucessfully")
        {
          this.toastr.success("Posted Succesfully")
        }
        else{
          this.toastr.error("Error","Posting Failed")
        }
      })

  }
}
