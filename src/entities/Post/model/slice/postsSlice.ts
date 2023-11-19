import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostsSchema } from '../types/post';
import { StoreSchema } from '@app/providers/StoreProvider';

const initialState: PostsSchema = {
  currentPage: 1,
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { actions: postsActions, reducer: postsReducer } = postsSlice;

export const postsSelectors = {
  selectCurrentPage: (state: StoreSchema) => state.posts.currentPage,
};
