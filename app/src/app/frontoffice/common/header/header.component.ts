import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem("lang"))
      localStorage.setItem("lang", "hun")
  }

  home(): void {
    this.router.navigateByUrl("")
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
}
