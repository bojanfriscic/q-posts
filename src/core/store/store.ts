import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import usersReducer from './slices/usersSlice';
import commentsSlice from './slices/commentsSlice';
import postsArchiveSlice from './slices/postsArchiveSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        postsArchive: postsArchiveSlice,
        users: usersReducer,
        comments: commentsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;