import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../services/crud.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  title: string = "Új Banner"
  isCreate: boolean = true
  form: FormGroup

  constructor(private service: CrudService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      _id: new FormControl(null),
      old_name: new FormControl(null),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      image: new FormControl(null),
      mobile_image: new FormControl(null)
    })
    if (this.route.snapshot.paramMap.has("id")) {
      this.service.get(`banner.php?id=${this.route.snapshot.paramMap.get("id")}`)
        .subscribe(data => {
          const arr: any[] = data as []
          if (arr.length == 1) {
            const data = arr[0]
            this.form.patchValue({
              _id: data.id,
              old_name: data.name,
              name: data.name,
              description: data.desc
            })
            this.title = "Banner Szerkesztése"
            this.isCreate = false
          }
        })
    }
  }

  handleUpload(event: any, field: string): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get(field)?.setValue(reader.result)
    };
  }

  save(): void {
    if (this.form.valid) {
      if (this.isCreate) {
        this.service.post("banner.php", this.form.value)
          .subscribe(() => this.router.navigateByUrl("banners"))
      } else {
        this.service.patch("banner.php", this.form.value)
          .subscribe(() => this.router.navigateByUrl("banners"))
      }
    }
  }
}
