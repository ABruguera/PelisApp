import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogNewEditMovieComponent } from "./dialog-new-edit-movie.component";

describe("DialogNewEditMovieComponent", () => {
  let component: DialogNewEditMovieComponent;
  let fixture: ComponentFixture<DialogNewEditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogNewEditMovieComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
