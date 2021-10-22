import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { STORE_KEYS } from '../../enums/storeKeys';

export const getUsers = createAsyncThunk(
    `${STORE_KEYS.USERS}/getUsers`,
    async () => await api.users.get()
);