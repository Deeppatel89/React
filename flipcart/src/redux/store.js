import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './features/Postslice'


export default configureStore({

    reducer: {
        post: PostReducer

    }
})