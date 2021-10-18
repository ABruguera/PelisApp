import { Injectable, Injector } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class HttpErrorInterceptor implements HttpInterceptor {
  translate!: TranslateService;
  constructor(private snackBar: MatSnackBar, private injector: Injector, private route: Router) {
    setTimeout(() => (this.translate = this.injector.get(TranslateService)));
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = "";
        if (error.error instanceof ErrorEvent) {
          message = `Error: ${error.error.message}`;
        } else {
          message = `Error Status: ${error.status}\nMessage: ${error.message}`;
          switch (error.status) {
            case 0: {
              this.route.navigate(["/internal-error"], { skipLocationChange: true });
              break;
            }
            case 500: {
              this.snackBar.open(
                this.translate.instant("errores.error500"),
                this.translate.instant("controles.descartar"),
                { duration: 5000 }
              );
              break;
            }
          }
        }
        console.log(message);
        return throwError(message);
      })
    );
  }
}
