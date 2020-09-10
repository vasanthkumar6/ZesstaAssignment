import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
    var token=localStorage.getItem('token')
    console.log("authservice",token)
    if(token==undefined)
    {
     return  next.handle(req)
    }
    else{
     var clonedReq=req.clone({headers:req.headers.set("Authorization","Bearer "+token )}) 
     console.log(clonedReq)
     return next.handle(clonedReq)
    }
  }
}
