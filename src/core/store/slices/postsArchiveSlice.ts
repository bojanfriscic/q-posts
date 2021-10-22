import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../../interfaces/IInitialState';
import { IPostArchiveItem } from '../../interfaces/IPostArchiveItem';
import { STORE_KEYS } from '../../enums/storeKeys';
import { REQUEST_STATUS } from '../../enums/requestStatus';
import { getPostsArchive } from '../thunks/postsArchiveThunk';

const initialPostsArchive: IInitialState<IPostArchiveItem> = {
    data: [],
    status: REQUEST_STATUS.INACTIVE,
    error: null
}

const postsArchiveSlice = createSlice({
    name: STORE_KEYS.POSTS_ARCHIVE,
    initialState: initialPostsArchive,
    reducers: {},
    extraReducers: {
        [getPostsArchive.pending.type]: state => {
            state.status = REQUEST_STATUS.PENDING;
        },
        [getPostsArchive.fulfilled.type]: (state, { payload }: PayloadAction<Array<IPostArchiveItem>>) => {
            state.data = payload;
            state.status = REQUEST_STATUS.FULFILLED;
        },
        [getPostsArchive.rejected.type]: state => {
            state.status = REQUEST_STATUS.REJECTED;
            state.error = state.error = 'There was an error - the post archive could not be fetched';
        }
    }
});

export default postsArchiveSlice.reducer;
