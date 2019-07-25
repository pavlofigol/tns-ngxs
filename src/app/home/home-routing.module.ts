import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home.component';
import { DetailsComponent } from '../home-details/details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details', component: DetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}
