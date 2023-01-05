import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterContentChecked {

  banners: any[] = []
  projects: any[] = []
  loading: boolean = true

  constructor(
    private router: Router,
    private service: CrudService
  ) {
    service.get("banner.php").subscribe(data => {
      this.banners = data as []
      this.generate()
    })
    service.get("project.php").subscribe(data => {
      this.projects = data as []
    })
  }

  ngAfterContentChecked(): void {
    if (this.loading) {
      let items = document.getElementsByClassName("carousel-item")
      if (items.length > 0 && items.item(0)) {
        this.loading = false
        items.item(0)?.classList.add("active")
        window.setTimeout(() => {
        }, 500)
      }
    }
  }

  generate(): void {
    const holder = document.getElementById("btns")
    let arr :string[] = []
    for (const i in this.banners) {
      let c = i === "0" ? 'active' : ''
      arr.push("<button type=\"button\" data-bs-target=\"#banners\" data-bs-slide-to=\""+i+"\" class=\""+c+"\"></button>")
    }
    if (holder)
      holder.innerHTML = arr.join('')
  }

  navTo(project: any) {
    this.loading = true
    window.setTimeout(() => this.router.navigateByUrl("/projects/"+project.id), 550)
  }

  getProjectName(project: any): string {
    return localStorage.getItem("lang") === "en" ? project.en_name : project.hun_name
  }
}
