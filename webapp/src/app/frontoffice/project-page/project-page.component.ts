import {AfterContentChecked, AfterViewChecked, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {

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
    }
  }
}
