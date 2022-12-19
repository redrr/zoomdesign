import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  title: string = "Új Projekt"
  form: FormGroup

  constructor(private service: CrudService, private router: Router) {
    this.form = new FormGroup({
      hun_name: new FormControl("", Validators.required),
      en_name: new FormControl("", Validators.required),
      file_name: new FormControl("", Validators.required),
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
      this.service.post("project.php", this.form.value)
        .subscribe(() => this.router.navigateByUrl("projects"))
  }

}
