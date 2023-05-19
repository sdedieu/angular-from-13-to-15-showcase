import { Injectable } from "@angular/core";
import { Select } from "@ngxs/store";
import { NgxsLibState } from "./lib.state";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NgxsLibFacade {
    @Select(NgxsLibState.value)
    value$!: Observable<string>;

    length$ = this.value$.pipe(
        map(value => value.length)
    );
}