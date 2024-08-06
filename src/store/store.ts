import { createStore, compose } from "redux";
import { rootReducer } from "./rootReduces";

declare global { // 57
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
      }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(rootReducer, {}, composeEnhancers())   

export default store

// 58 нам необходимо подключить npm i react-redux 