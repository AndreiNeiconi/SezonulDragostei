import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdService {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate():boolean {
    if(this.authService.isLoggedIn()){
      return true;
    }
    else {
      this.router.navigate(['/dashbord'])
      return false
    }
  }
}
