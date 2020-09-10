import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginUserStatus:boolean=false
loginUserName
  constructor(private hc:HttpClient) { }
  loginAdmin(value):Observable<any>
  {
    console.log(value)
    return this.hc.post("/admin/loginAdmin",value)
  }

  dologout()
  {
    localStorage.removeItem('token')
    this.loginUserStatus=false
  }

  loggedInUser():boolean
  {
    return !! localStorage.getItem('token')
    }

}