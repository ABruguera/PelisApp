import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatsharedModule } from "../matshared/matshared.module";
import { TranslateModule } from "@ngx-translate/core";
import { LoadingComponent } from "src/app/components/loading/loading.component";

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MatsharedModule],
  exports: [CommonModule, MatsharedModule, TranslateModule, LoadingComponent],
})
export class SharedModule {}
