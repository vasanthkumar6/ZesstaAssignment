import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HelperGuard implements CanActivate {
  constructor(private ls:LoginService,private router:Router){}
  canActivate(): boolean{
    if(this.ls.loggedInUser())
    {
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
