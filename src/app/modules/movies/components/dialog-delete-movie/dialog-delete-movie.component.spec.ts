import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material/dialog";
import { TranslateModule } from "@ngx-translate/core";
import { HttpService } from "src/app/services/http.service";

import { DialogDeleteMovieComponent } from "./dialog-delete-movie.component";

describe("DialogDeleteMovieComponent", () => {
  let component: DialogDeleteMovieComponent;
  let fixture: ComponentFixture<DialogDeleteMovieComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogDeleteMovieComponent],
      imports: [TranslateModule.forRoot(), MatDialogModule],
      providers: [HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
