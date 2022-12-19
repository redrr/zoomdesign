import {Component} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-part-table',
  templateUrl: './project-part-table.component.html',
  styleUrls: ['./project-part-table.component.css']
})
export class ProjectPartTableComponent {

  list: any[] = []
  name: any
  endpoint: string = "project-part.php"
  id: any

  constructor(private service: CrudService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id")
    service.get("project.php?id=".concat(this.id)).subscribe((data: any) => {
      console.log(data)
      this.name = data.hun_name
    })
    service.get(this.endpoint.concat("?id=").concat(this.id)).subscribe(data => {
      console.log(data)
      this.list = data as []
    })
  }

  new(): void {
    this.router.navigateByUrl("project/".concat(this.id).concat("/part/new"))
  }

  delete(data: any) : void {
    this.service.delete(this.endpoint.concat("?id=").concat(data.id).concat("&project_id=").concat(this.id).concat("&file_name=").concat(data.img))
      .subscribe(() => location.reload())
  }

}
