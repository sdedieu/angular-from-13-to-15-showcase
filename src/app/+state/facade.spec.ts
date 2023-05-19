import { TestBed } from "@angular/core/testing";
import { NgxsModule } from "@ngxs/store";
import { NgxsLibState } from "./lib.state";
import { NgxsLibFacade } from "./facade.state";

describe('Facade', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NgxsModule.forRoot([
                    NgxsLibState
                ])
            ],
            providers: [
                NgxsLibFacade
            ]
        }).compileComponents();
    })

    it('should select value', () => {
        const facade = TestBed.inject(NgxsLibFacade);
        expect(facade.value$).toBeTruthy();
    })
});