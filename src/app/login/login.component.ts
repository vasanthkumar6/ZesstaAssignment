import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errmsg:string=""
  constructor(private router:Router,private ls:LoginService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.ls.dologout()
    },0)
    

  }


  login(value)
  {
    console.log("vasanth",value)
    if(value.username!=="" && value.password!=="")
    {
       this.ls.loginAdmin(value).subscribe((resp)=>{

        console.log("response",resp)
       if( resp['message']=="success")
       {
         localStorage.setItem('token',resp['token'])
        //  localStorage.setItem('username',resp['username'])
         this.ls.loginUserName=resp['username']
        //  this.ls.loginUserStatus=true
         this.router.navigate([`/adminDashboard/${resp['username']}/postjob`])
       }
       else{
         this.errmsg=resp['message']
         console.log("wrong credentials",this.errmsg)
       }
       })
    }
    else
    {
      this.errmsg='please check your credentials'
      console.log("null credentials",this.errmsg)
    }

  }

  // refresh()
  // {
  //   this.ngOnInit();
  //   console.log("refresh")
   
  // }


}
