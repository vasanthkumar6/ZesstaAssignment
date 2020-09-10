import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { UnsubscriptionError } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  opened=false;
data:any;
staticData:any;
obj:any=[];
user;
  constructor( private gs:GlobalService,private ls:LoginService,private ar:ActivatedRoute) { }

  ngOnInit() {
  //   setTimeout(()=>{
  //   this.ls.loginUserStatus=true
  // },0)
  this.ar.paramMap.subscribe((params)=>{
    this.user=params.get('username.')
    console.log("user",this.user)
  })
              
  }
// getdata(){
//   this.gs.get().subscribe((resp)=>{
//     console.log(resp.data)
//     this.data=resp.data
    
//   })

// }

edit(obj)
{
 this.obj=obj
}

delete(id)
{
  console.log(id)
  var count=0
   this.data.forEach(x => {
     count++
       if(x.id==id) 
       {
         console.log(count-1)
         this.data.splice(count-1,1)
        //  this.data.splice()
       }
   });
}

// a:any;
// delete(i){
//   console.log(i);
//   this.a=this.data.splice(i,1)
//   console.log(this.a);
// }

add(obj){
   this.data.push(obj)
}
Savechanges(obj)
{
  console.log(obj)
  var count=0
  this.data.forEach(y => {
    count++

 
      if(y.name==obj.name) 
      {
        console.log(y.name==obj.name)
        console.log("obj pass condtion",obj)
        this.data[count-1].first_name=obj.firstname
        this.data[count-1].last_name=obj.lastname
        this.data[count-1].email=obj.email
        console.log(count-1)
        console.log("changed obj",this.data[count-1].last_name)
        // this.data.slice(count-1,1)
       //  this.data.splice()
      }
  });
}

}
