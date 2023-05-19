import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";

@State<any>({
    name: 'lib',
    defaults: {
        value: [1,2,3]
    }
})
@Injectable()
export class NgxsLibState {
    @Selector()
    static value(state: any) {
        return state.value;
    }
}