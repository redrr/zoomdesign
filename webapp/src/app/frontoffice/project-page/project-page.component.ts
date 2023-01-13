import {AfterContentChecked, AfterViewChecked, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements AfterViewChecked {

  id: string = ""
  title: string = ""
  images: any[] = []
  loading: boolean = true

  constructor(
    private route: ActivatedRoute,
    private service: CrudService
  ) {
    this.id = route.snapshot.paramMap.get("id") || "0"
    service.get("project.php?id="+this.id).subscribe((data: any) => {
      this.title = localStorage.getItem("lang") === "en" ? data.en_name as string : data.hun_name as string
      this.updateLoading()
    })
    service.get("project-part.php?project_id="+this.id).subscribe(data => {
      console.log(data)
      this.images = data as []
      this.updateLoading()
    })
    this.updateLoading()
  }

  updateLoading(): void {
    if (this.id !== "" && this.title !== "" && this.images.length > 0) {
      this.loading = false
      this.recalc()
    }
  }

  ngAfterViewChecked(): void {
    this.recalc()
  }

  recalc(): void {
    //$('.project-title-holder')[0].style.marginTop = ($('.grid .img-fluid')[0].height - $('.project-title-holder')[0].getBoundingClientRect().height) +"px"
    const _titles = document.getElementsByClassName("project-title-holder")
    const _images = document.querySelectorAll(".grid .img-fluid")
    const title = _titles.length === 1 ? _titles.item(0) : undefined
    const image = _images.length > 0 ? _images.item(0) : undefined
    if (title && image) {
     title.setAttribute("style", "margin-top: "+(image.getBoundingClientRect().height - title.getBoundingClientRect().height) + "px")
    }
  }
}
