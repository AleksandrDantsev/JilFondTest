import { userReducers } from "./reducers/userReducers"
import { createStore } from "vuex/dist/vuex.cjs.js"


export const store = createStore({
    modules: {
        userReducers,
    }
  })