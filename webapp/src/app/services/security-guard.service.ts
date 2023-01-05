import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {SecurityService} from "./security.service";

@Injectable({
  providedIn: 'root'
})
export class SecurityGuardService implements CanActivate {

  constructor(public securityService: SecurityService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    if (this.securityService.isAuthenticated()) {
      return Promise.resolve(true)
    } else {
      this.router.navigate(['login'])
      return Promise.resolve(false)
    }
  }
}
