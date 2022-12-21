import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  private _welcome: boolean = true

  get welcome(): boolean {
    return this._welcome;
  }

  set welcome(value: boolean) {
    this._welcome = value;
  }
}
