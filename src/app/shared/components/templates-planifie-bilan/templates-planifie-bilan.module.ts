import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WithLoadingPipeModule } from '@core/pipes/with-loading.pipe.module';
import { NgZorroAntdModule } from 'src/app/ngZorroAntdmodule';
import { TemplatesPlanifieBilanComponent } from './templates-planifie-bilan.component';
import { MoleculesSelectModule } from '../molecules/molecules-select/molecules-select.module';
import { MoleculesInputNumberModule } from '../molecules/molecules-input-number/molecules-input-number.module';
import { MoleculesDatePickerModule } from '../molecules/molecules-datePicker/molecules-datePicker.module';

@NgModule({
  declarations: [TemplatesPlanifieBilanComponent],
  exports: [TemplatesPlanifieBilanComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule,
    WithLoadingPipeModule,
    RouterModule,
    MoleculesInputNumberModule,
    MoleculesDatePickerModule,
  ],
  providers: [DatePipe],
})
export class TemplatesPlanifieBilanModule {}
