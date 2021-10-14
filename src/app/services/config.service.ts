import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  private _config: any;
  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http
      .get("/assets/config.json")
      .toPromise()
      .then((data: any) => {
        this._config = data;
      });
  }

  get apiUrl() {
    if (!this._config) {
      throw new Error("Archivo de configuración no cargado.");
    } else {
      return this._config.api_url;
    }
  }
}
