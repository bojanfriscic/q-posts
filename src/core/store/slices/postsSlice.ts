import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../../interfaces/IInitialState';
import { IPost } from '../../interfaces/IPost';
import { STORE_KEYS } from '../../enums/storeKeys';
import { REQUEST_STATUS } from '../../enums/requestStatus';
import { getPosts } from '../thunks/postsThunk';

const initialPosts: IInitialState<IPost> = {
    data: [],
    status: REQUEST_STATUS.INACTIVE,
    error: null
};

const postsSlice = createSlice({
    name: STORE_KEYS.POSTS,
    initialState: initialPosts,
    reducers: {},
    extraReducers: {
        [getPosts.pending.type]: state => {
            state.status = REQUEST_STATUS.PENDING;
        },
        [getPosts.fulfilled.type]: (state, { payload }: PayloadAction<Array<IPost>>) => {
            state.data = payload;
            state.status = REQUEST_STATUS.FULFILLED;
        },
        [getPosts.rejected.type]: state => {
            state.status = REQUEST_STATUS.REJECTED;
            state.error = 'There was an error - posts could not be fetched';
        }
    }
});

export default postsSlice.reducer;
