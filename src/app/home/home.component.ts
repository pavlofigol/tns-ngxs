import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { SessionsState } from "../states/sessions.state";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {


    @Select(SessionsState.getMaxPrice) maxPrice$: Observable<number>;

    constructor(private store: Store) {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
