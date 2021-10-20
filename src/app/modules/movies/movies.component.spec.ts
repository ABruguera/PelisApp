import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpService } from "src/app/services/http.service";
import { LoadingComponent } from "src/app/components/loading/loading.component";
import { MoviesComponent } from "./movies.component";
import { TranslateModule } from "@ngx-translate/core";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfigService } from "src/app/services/config.service";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

export class ConfigServiceStub {
  get apiUrl() {
    return "http://localhost:4200";
  }
}

describe("MoviesComponent", () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent, LoadingComponent, MovieCardComponent],
      providers: [HttpService, { provide: ConfigService, useClass: ConfigServiceStub }],
      imports: [
        TranslateModule.forRoot(),
        MatProgressSpinnerModule,
        RouterModule,
        MatDialogModule,
        HttpClientModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
