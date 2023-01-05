import {Injectable} from '@angular/core';
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(public tokenStorageService : TokenStorageService) {}

  isAuthenticated(): boolean {
    const token = this.tokenStorageService.getToken();
    if (token) {
      if (token !== "$2a$12$rXc3uUbSGRFW4n9Szxaw5eL1kllr1Bgwd.LRoRcOthpGddQjrHz6O") {
        window.sessionStorage.clear()
        return false
      } else {
        return true
      }
    }
    return false
  }
}
