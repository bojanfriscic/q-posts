import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { STORE_KEYS } from '../../enums/storeKeys';

export const getComments = createAsyncThunk(
    `${STORE_KEYS.COMMENTS}/getComments`,
    async () => api.comments.get()
);