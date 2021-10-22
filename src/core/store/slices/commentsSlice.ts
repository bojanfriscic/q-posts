import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../../interfaces/IInitialState';
import { IComment } from '../../interfaces/IComment';
import { STORE_KEYS } from '../../enums/storeKeys';
import { REQUEST_STATUS } from '../../enums/requestStatus';
import { getComments } from '../thunks/commentsThunk';

const initialComments: IInitialState<IComment> = {
    data: [],
    status: REQUEST_STATUS.INACTIVE
};

const commentsSlice = createSlice({
    name: STORE_KEYS.COMMENTS,
    initialState: initialComments,
    reducers: {},
    extraReducers: {
        [getComments.pending.type]: state => {
            state.status = REQUEST_STATUS.PENDING
        },
        [getComments.fulfilled.type]: (state, { payload }: PayloadAction<Array<IComment>>) => {
            state.data = payload;
            state.status = REQUEST_STATUS.FULFILLED;
        },
        [getComments.rejected.type]: state => {
            state.status = REQUEST_STATUS.REJECTED
        }
    }
});

export default commentsSlice.reducer;