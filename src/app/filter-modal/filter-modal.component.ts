import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page, EventData } from 'tns-core-modules/ui/page/page';

import { screen } from 'tns-core-modules/platform/platform';
import { ActivatedRoute } from '@angular/router';

import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Store } from '@ngxs/store';
import { ChangeMaxPrice } from '../states/sessions.state';


@Component({
  moduleId: module.id,
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {

  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page,
    private route: ActivatedRoute,
    private params: ModalDialogParams,
    private store: Store
  ) {

  }

  ngOnInit() { }

  close(maxPrice: number): void {
    this.store.dispatch(new ChangeMaxPrice(maxPrice));
    this.params.closeCallback(maxPrice);
  }


  filter() {
    console.log('lets go back to the maps but with filters');
  }

  navigateBack() {
    this.routerExtensions.back();
  }

}
