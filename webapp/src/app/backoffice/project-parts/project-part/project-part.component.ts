import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from '../../../services/crud.service';

@Component({
  selector: 'app-project-part',
  templateUrl: './project-part.component.html',
  styleUrls: ['./project-part.component.css']
})
export class ProjectPartComponent {

  title: string = "Új Galéria Elem"
  form: FormGroup
  isCreate = true

  constructor(private service: CrudService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      project_id: new FormControl(this.route.snapshot.paramMap.get("project_id")),
      _id: new FormControl(null),
      old_name: new FormControl(null),
      file_name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      image: new FormControl(null)
    })
    if (this.route.snapshot.paramMap.has("id")) {
      this.service.get(`project-part.php?id=${this.route.snapshot.paramMap.get("id")}`)
        .subscribe(data => {
          const arr: any[] = data as []
          if (arr.length == 1) {
            const data = arr[0]
            this.form.patchValue({
              _id: data.id,
              old_name: data.img,
              file_name: data.img,
              description: data.desc
            })
            this.isCreate = false
            this.title = "Galéria Elem Szerkesztése"
          }
        })
    }
  }

  handleUpload(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get("image")?.setValue(reader.result)
    };
  }

  save(): void {
    if (this.form.valid) {
      if (this.isCreate) {
        this.service.post("project-part.php", this.form.value)
          .subscribe(() => this.router.navigateByUrl("project/".concat(this.form.get("project_id")?.value).concat("/parts")))
      } else {
        this.service.patch("project-part.php", this.form.value)
          .subscribe(() => this.router.navigateByUrl("project/".concat(this.form.get("project_id")?.value).concat("/parts")))
      }
    }
  }

}
