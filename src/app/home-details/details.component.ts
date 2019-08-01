import { Component, OnInit, ViewContainerRef } from '@angular/core';

import {
    ModalDialogService,
    ModalDialogOptions
} from 'nativescript-angular/modal-dialog';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { Select } from '@ngxs/store';
import { SessionsState, Session } from '../states/sessions.state';
import { Observable } from 'rxjs';



@Component({
    moduleId: module.id,
    selector: 'app-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

    @Select(SessionsState.getSessions) sessions$: Observable<Session>;


    constructor(private _modalService: ModalDialogService,
        private _vcRef: ViewContainerRef) { }

    ngOnInit() { }


    openFilter() {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: true,
            animated: true
        };

        this._modalService
            .showModal(FilterModalComponent, options)
            .then((result: string) => {
                console.log(result);

            });
    }
}
