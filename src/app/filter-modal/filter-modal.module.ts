import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { FilterModalComponent } from './filter-modal.component';

@NgModule({
  imports: [NativeScriptFormsModule, NativeScriptCommonModule],
  declarations: [FilterModalComponent],
  entryComponents: [FilterModalComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FilterModalModule { }
