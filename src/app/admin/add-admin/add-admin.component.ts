import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ToastrService, ToastRef } from 'ngx-toastr';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private gs:GlobalService, private ts:ToastrService)  { }

  ngOnInit(): void {
  }


  addAdmin(data)
  {
    this.gs.Admindata(data).subscribe((resp)=>{
      if(resp['message']=='New admin added succesfully')
      {
        this.ts.success(resp['message'])
      }
      else if(resp['message']=='UserName Existed')
      {
        this.ts.error(resp['message'],"ERROR")
      }
    })
  }
}
