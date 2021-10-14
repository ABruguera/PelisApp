import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  get(path: string): Observable<Object> {
    const url = this.config.apiUrl + path;
    return this.http.get(url);
  }

  post(path: string, body: any): Observable<Object> {
    const url = this.config.apiUrl + path;
    return this.http.post(url, body);
  }

  put(path: string, body: any): Observable<Object> {
    const url = this.config.apiUrl + path;
    return this.http.put(url, body);
  }

  delete(path: string): Observable<Object> {
    const url = this.config.apiUrl + path;
    return this.http.delete(url);
  }
}
