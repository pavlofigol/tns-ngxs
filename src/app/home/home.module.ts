import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DetailsComponent } from '../home-details/details.component';
import { FilterModalModule } from '../filter-modal/filter-modal.module';

@NgModule({
    imports: [NativeScriptCommonModule, HomeRoutingModule, FilterModalModule],
    declarations: [HomeComponent, DetailsComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
