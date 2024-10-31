import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string = "bt@zoomdesign.hu"
  private pwd: string = "hfViEDL36zhl"
  form: FormGroup = new FormGroup<any>({
    email: new FormControl(null),
    password: new FormControl(null)
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  activated = false;

  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      window.location.pathname = "banners"
    }
  }

  save(): void {
    if (this.form.get("email")?.value !== this.email) {
      this.errorMessage = "Nem megfelelő email cím!";
      this.isLoginFailed = true;
    } else if (this.form.get("password")?.value !== this.pwd) {
      this.errorMessage = "Nem megfelelő jelszó!";
      this.isLoginFailed = true;
    } else {
      this.tokenStorage.saveToken("$2a$12$rXc3uUbSGRFW4n9Szxaw5eL1kllr1Bgwd.LRoRcOthpGddQjrHz6O");
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.reloadPage();
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
