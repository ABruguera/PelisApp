import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MovieDetailsComponent } from "./movie-details.component";
import { HttpService } from "src/app/services/http.service";
import { LoadingComponent } from "src/app/components/loading/loading.component";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from "src/app/services/config.service";

export class ConfigServiceStub {
  get apiUrl() {
    return "http://localhost:4200";
  }
}

describe("MovieDetailsComponent", () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent, LoadingComponent],
      imports: [
        TranslateModule.forRoot(),
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: ConfigService, useClass: ConfigServiceStub },
        HttpService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
