import { createSlice } from '@reduxjs/toolkit';
import { loginSession } from './thunks';
import type { SessionState } from './types';

const initialState: SessionState = { type: 'idle' };

export const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState as SessionState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginSession.pending, () => ({ type: 'pending' }))

      .addCase(loginSession.fulfilled, (_, action) => ({
        type: 'authorized',
        session: action.payload,
      }))

      .addCase(loginSession.rejected, (_, action) => ({
        type: 'failed',
        error: action.payload || 'Login failed',
      }));
  },
});

export default sessionSlice.reducer;
