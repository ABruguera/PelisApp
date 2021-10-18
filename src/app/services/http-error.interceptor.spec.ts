import { Overlay } from "@angular/cdk/overlay";
import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { MatSnackBar } from "@angular/material/snack-bar";

import { HttpErrorInterceptor } from "./http-error.interceptor";
import { RouterTestingModule } from "@angular/router/testing";

describe("HttpErrorInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [HttpErrorInterceptor, MatSnackBar, HttpClient, Overlay],
    })
  );

  it("should be created", () => {
    const interceptor: HttpErrorInterceptor = TestBed.inject(HttpErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
