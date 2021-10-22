import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import usersReducer from './slices/usersSlice';
import commentsSlice from './slices/commentsSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        comments: commentsSlice
    }
});