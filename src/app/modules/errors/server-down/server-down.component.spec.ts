import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslateModule } from "@ngx-translate/core";

import { ServerDownComponent } from "./server-down.component";

describe("ServerDownComponent", () => {
  let component: ServerDownComponent;
  let fixture: ComponentFixture<ServerDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerDownComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
