import { Component } from '@angular/core';
import { LoginService } from './login.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'collegeAdmission';
  token;
  username;
  constructor(public ls:LoginService){

    $('.navbar-collapse ').click(function():void{
      $(".navbar-collapse").collapse('hide');
  });

   this.token=localStorage.getItem('token')
   this.username=localStorage.getItem('username')
   console.log(this.token)
  if(this.token)
  {
    console.log(this.token)
     ls.loginUserStatus=true
  }
  
  }


}
