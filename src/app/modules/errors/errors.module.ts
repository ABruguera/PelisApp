import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ServerDownComponent } from "./server-down/server-down.component";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [NotFoundComponent, ServerDownComponent],
  imports: [SharedModule],
})
export class ErrorsModule {}
