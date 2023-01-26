import { configureStore } from "@reduxjs/toolkit"
import { videoReducer } from './Video.jsx'
const Store = configureStore({
    reducer: {
        videoReducer,
    }
})

export default Store