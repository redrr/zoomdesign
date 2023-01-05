import {Component} from '@angular/core';
import {GlobalService} from "../../globals";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  _loading: boolean

  constructor(private globalService: GlobalService) {
   this._loading = globalService.welcome
  }

  open(): void {
    this.globalService.welcome = false
    this._loading = false
  }
}
