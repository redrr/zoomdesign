import {Component} from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent {

  list: any[] = []
  endpoint: string = "project.php"

  constructor(private service: CrudService, private router: Router) {
    service.get(this.endpoint).subscribe(data => {
      this.list = data as []
      for (const i in this.list) {
        service.get("project-part.php?project_id=".concat(this.list[i].id)).subscribe(data => {
          this.list[i].db = ((data as []) || []).length
        })
      }
    })
  }

  new(): void {
    this.router.navigateByUrl("project/new")
  }

  update(id: any): void {
    this.router.navigateByUrl("project/edit/".concat(id))
  }

  delete(data: any) : void {
    this.service.delete(this.endpoint.concat("?id=").concat(data.id).concat("&file_name=").concat(data.img))
      .subscribe(() => location.reload())
  }

  open(id: any) : void {
    this.router.navigateByUrl("project/".concat(id).concat("/parts"))
  }
}
