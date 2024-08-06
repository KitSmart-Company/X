import { Draft, produce } from 'immer' // 31
import { LoadingState, TweetsState } from './contracts/state'
import { TweetsActions, TweetsActionsType } from './actionCreatores'

 const initialTweetsState:  /* 39 imort из ./contracts/state TweetsState*/TweetsState = { // 32
    items: [],
    loadingState: LoadingState.NEVER // 40
}

// 33 Переходим в state.ts

export const tweetsReducer = produce((draft: Draft<TweetsState>, action:TweetsActions /*50 export TweetsActions*/) => { // 41 описываем сам reducer.
    const {type, payload} = action//51

    if(type === TweetsActionsType.SET_TWEETS) { //52
        draft.items = payload
    }

    // 53 идем in rootReducer.ts 

}, initialTweetsState) // 42 по умолчанию у нас будет initialState.

// 43 Необходимо описать action, для этого переходим в actionCreatores.ts