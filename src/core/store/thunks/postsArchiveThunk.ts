import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { STORE_KEYS } from '../../enums/storeKeys';

export const getPostsArchive = createAsyncThunk(
    `${STORE_KEYS.POSTS_ARCHIVE}/getPostsArchive`,
    async () => api.postsArchive.get()
);