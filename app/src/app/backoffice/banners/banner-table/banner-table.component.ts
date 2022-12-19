import {Component} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-banner-table',
  templateUrl: './banner-table.component.html',
  styleUrls: ['./banner-table.component.css']
})
export class BannerTableComponent {

  list: any[] = []
  endpoint: string = "banner.php"

  constructor(private service: CrudService, private router: Router) {
    service.get(this.endpoint).subscribe(data => {
      this.list = data as []
    })
  }

  new(): void {
    this.router.navigateByUrl("banner/new")
  }

  delete(data: any) : void {
    this.service.delete(this.endpoint.concat("?id=").concat(data.id).concat("&file_name=").concat(data.name))
      .subscribe(() => location.reload())
  }
}
