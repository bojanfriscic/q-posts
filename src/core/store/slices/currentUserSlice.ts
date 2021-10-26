import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORE_KEYS } from '../../enums/storeKeys';
import { ICurrentUser } from '../../interfaces/ICurrentUser';

const initialCurrentUser: ICurrentUser = {
    id: null,
    name: '',
    username: '',
    email: ''
};

const currentUserSlice = createSlice({
    name: STORE_KEYS.CURRENT_USER,
    initialState: initialCurrentUser,
    reducers: {
        setUser: (state, { payload }: PayloadAction<ICurrentUser>) => {
            const { id, name, username, email } = payload;
            state.id = id;
            state.name = name;
            state.username = username;
            state.email = email;
        }
    }
});

export const { setUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;