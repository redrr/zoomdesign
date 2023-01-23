import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../globals";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  _loading: boolean
  _destroy: boolean = false

  constructor(private globalService: GlobalService, private meta: Meta) {
   this._loading = globalService.welcome
  }

  ngOnInit(): void {
    setTimeout(() => this.open(), 6000)
  }


  open(): void {
    this.globalService.welcome = false
    this._loading = false
    this.meta.updateTag({
      "name": "theme-color",
      "content": "#ffffff"
    })
    setTimeout(() => this._destroy = true, 1000)
  }
}
