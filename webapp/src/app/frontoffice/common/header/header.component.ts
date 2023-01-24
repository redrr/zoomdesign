import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GlobalService} from "../../../globals";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() projectId: any

  constructor(private router: Router, private globalService: GlobalService, private meta: Meta) {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      document.getElementsByName('body').forEach(e => {
        e.classList.add("spec-mobile")
      })
    }
  }

  ngOnInit(): void {
    if (!localStorage.getItem("lang")) {
      const userLang = navigator.language;
      console.log("Automatic selected language:", userLang)
      localStorage.setItem("lang", (userLang && userLang === "hu-HU") ? "hun" : "en")
    }
    if (!this.globalService.welcome)
      this.meta.updateTag({
        "name": "theme-color",
        "content": "#ffffff"
      })
  }

  home(): void {
    this.router.navigateByUrl(this.projectId ? `#${this.projectId}` : "")
  }

  open(): void {
    const menu = document.getElementById("contact-menu")
    const activeClass = "active"
    if (menu) {
      if (menu.classList.contains(activeClass))
        menu.classList.remove(activeClass)
      else
        menu.classList.add(activeClass)
    }
  }

  setLang(lang: string): void {
    localStorage.setItem("lang", lang)
    location.reload();
  }

  isLang(lang: string): string {
    return localStorage.getItem("lang") === lang ? "text-active" : ""
  }

  music(): void {
    let player = document.getElementById("audio_player")
    if (player) {
      // @ts-ignore
      player.paused ? player.play() : player.pause()
    }
  }
}
