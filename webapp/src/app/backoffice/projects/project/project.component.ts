import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../services/crud.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  title: string = "Új Projekt"
  form: FormGroup = new FormGroup({
    _id: new FormControl(null),
    old_name: new FormControl(null),
    hun_name: new FormControl(null, Validators.required),
    en_name: new FormControl(null, Validators.required),
    file_name: new FormControl(null, Validators.required),
    description: new FormControl(null),
    image: new FormControl(null)
  })
  isCreate = true

  constructor(private service: CrudService, private router: Router, private route: ActivatedRoute) {
    if (this.route.snapshot.paramMap.has("id")) {
      this.service.get(`project.php?id=${this.route.snapshot.paramMap.get("id")}`)
        .subscribe(d => {
          const data = d as any
          this.form.patchValue({
            _id: data.id,
            old_name: data.img,
            hun_name: data.hun_name,
            en_name: data.en_name,
            file_name: data.img,
            description: data.desc
          })
          this.title = "Projekt Szerkesztése"
          this.isCreate = false
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
        this.service.post("project.php", this.form.value)
          .subscribe(() => this.router.navigateByUrl("projects"))
      } else {
        this.service.patch("project.php", this.form.value)
          .subscribe(() => this.router.navigateByUrl("projects"))
      }
    }
  }

}
