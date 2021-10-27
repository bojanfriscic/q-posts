import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { STORE_KEYS } from '../../enums/storeKeys';
import { IUser } from '../../interfaces/IUser';
import { ICurrentUser } from '../../interfaces/ICurrentUser';

export const getUsers = createAsyncThunk(
    `${STORE_KEYS.USERS}/getUsers`,
    async () => await api.users.get()
);

export const updateUser = createAsyncThunk(
    `${STORE_KEYS.USERS}/updateUser`,
    async (data: IUser | ICurrentUser) => await api.users.put(data)
);