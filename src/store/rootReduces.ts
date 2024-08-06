import { combineReducers } from 'redux' // 28 
import { tweetsReducer } from './ducts/tweets/reducer'

export const rootReducer = combineReducers({ // 29
    tweets: tweetsReducer //54

}) 

// 27 устонавлиеваем npm i redux redux-saga reselect immer
// 30 идем описывать логику tweets/reducer.ts
//55 идем в store.ts