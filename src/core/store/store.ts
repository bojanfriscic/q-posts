import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import usersReducer from './slices/usersSlice';
import commentsReducer from './slices/commentsSlice';
import postsArchiveReducer from './slices/postsArchiveSlice';
import currentUserReducer from './slices/currentUserSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        postsArchive: postsArchiveReducer,
        users: usersReducer,
        currentUser: currentUserReducer,
        comments: commentsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;