import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../../interfaces/IInitialState';
import { IUser } from '../../interfaces/IUser';
import { STORE_KEYS } from '../../enums/storeKeys';
import { REQUEST_STATUS } from '../../enums/requestStatus';
import { getUsers } from '../thunks/usersThunk';

const initialUsers: IInitialState<IUser> = {
    data: [] as Array<IUser>,
    status: REQUEST_STATUS.INACTIVE,
    error: null
};

const usersSlice = createSlice({
    name: STORE_KEYS.USERS,
    initialState: initialUsers,
    reducers: {},
    extraReducers: {
        [getUsers.pending.type]: state => {
            state.status = REQUEST_STATUS.PENDING;
        },
        [getUsers.fulfilled.type]: (state, { payload }: PayloadAction<Array<IUser>>) => {
            state.data = payload;
            state.status = REQUEST_STATUS.FULFILLED;
        },
        [getUsers.rejected.type]: state => {
            state.status = REQUEST_STATUS.REJECTED;
            state.error = 'There was an error - users could not be fetched';
        }
    }
});

export default usersSlice.reducer;