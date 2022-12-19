import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "../../../crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  title: string = "Új Banner"
  form: FormGroup

  constructor(private service: CrudService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
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
      this.service.post("banner.php", this.form.value)
        .subscribe(() => this.router.navigateByUrl("banners"))
  }
}
