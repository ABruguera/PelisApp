import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatsharedModule } from "../matshared/matshared.module";
import { TranslateModule } from "@ngx-translate/core";
import { LoadingComponent } from "src/app/components/loading/loading.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MatsharedModule],
  exports: [CommonModule, MatsharedModule, TranslateModule, LoadingComponent, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
