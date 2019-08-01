import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface Session {
    name: string,
    price: number
}

export interface SessionsStateModel {

    maxPrice: number,
    sessions: Session[]

}

export class ChangeMaxPrice {
    static readonly type = '[Session] ChangeMaxPrice';
    constructor(public maxPrice: number) { }
}

@State<SessionsStateModel>({
    name: 'sessions',
    defaults: {

        sessions: [
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



        ],
        maxPrice: 300
    }

})
export class SessionsState {

    @Action(ChangeMaxPrice)
    changeMaxPrice(ctx: StateContext<SessionsStateModel>, action: ChangeMaxPrice) {
        console.log('[action] new MaxPrice: ' + action.maxPrice);
        const state = ctx.getState();
        ctx.patchState({
            maxPrice: action.maxPrice
        });
    }

    @Selector()
    static getMaxPrice(state: SessionsStateModel) {
        return state.maxPrice;
    }


    @Selector()
    static getSessions(state: SessionsStateModel) {
        return state.sessions.filter(session => session.price <= state.maxPrice);
    }
}