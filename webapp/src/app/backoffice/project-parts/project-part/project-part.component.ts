import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-part',
  templateUrl: './project-part.component.html',
  styleUrls: ['./project-part.component.css']
})
export class ProjectPartComponent {

  title: string = "Új Galéria Elem"
  form: FormGroup

  constructor(private service: CrudService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      id: new FormControl(this.route.snapshot.paramMap.get("id")),
      file_name: new FormControl(""),
      description: new FormControl(""),
      image: new FormControl(null, Validators.required)
    })
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
    if (this.form.valid)
      this.service.post("project-part.php", this.form.value)
        .subscribe(() => this.router.navigateByUrl("project/".concat(this.form.get("id")?.value).concat("/parts")))
  }

}
