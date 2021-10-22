import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { STORE_KEYS } from '../../enums/storeKeys';

export const getPosts = createAsyncThunk(
    `${STORE_KEYS.POSTS}/getPosts`,
    async () => api.posts.get()
);