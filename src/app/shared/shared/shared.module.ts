import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatsharedModule } from "../matshared/matshared.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [],
  exports: [CommonModule, MatsharedModule, TranslateModule],
})
export class SharedModule {}
