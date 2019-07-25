import { Component, OnInit, ViewContainerRef } from '@angular/core';

import {
    ModalDialogService,
    ModalDialogOptions
} from 'nativescript-angular/modal-dialog';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';


export interface Session {
    name: string,
    price: number

}

@Component({
    moduleId: module.id,
    selector: 'app-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {



    sessions: Session[] = [
        {
            name: 'Session for 10 euros',
            price: 10
        },
        {
            name: 'Session for 15 euros',
            price: 15
        },
        {
            name: 'Session for 20 euros',
            price: 20
        },
        {
            name: 'Session for 25 euros',
            price: 25
        },
        {
            name: 'Session for 50 euros',
            price: 50
        },
        {
            name: 'Session for 10 euros',
            price: 10
        },
    ];






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
