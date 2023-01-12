import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  @Input() loading: boolean = true
  ready: boolean = false

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.ready = true, 1000)
  }
}
