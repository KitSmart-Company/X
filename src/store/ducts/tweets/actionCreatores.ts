import { Action } from "redux"
import { TweetsState } from "./contracts/state"

// 44 у нас будет action он будет связан с добовлением всех твитов, и он будет прикручиваться в items[]
export enum TweetsActionsType { // 45
    SET_TWEETS = 'tweets/SET_TWEETS'
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType>{ // 46 описываем интерфейс action
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items'] // 47 укажем TweetsState и укажем тип items
} 

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({ // 48 Указываем реальный action 
    type: TweetsActionsType.SET_TWEETS,
    payload
})

export type TweetsActions = SetTweetsActionInterface // 49 экспортируем action SetTweetsActionInterface и передаем его в reducers.ts