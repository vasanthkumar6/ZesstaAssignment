import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  canActivate():boolean{
      var token=localStorage.getItem('token')
      if(token==undefined)
      {
        console.log('auth guard executed')
        return false
      }
      else{
        console.log('auth guard executed false')
        return true
      }
  }
  
}
