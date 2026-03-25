import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@/shared/api';
import type { AuthResponse, LoginData, Session } from './types';

export const loginSession = createAsyncThunk<
  Session,
  LoginData,
  { rejectValue: string }
>('session/login', async (data, { rejectWithValue }) => {
  try {
    const res = await api.post<AuthResponse>('/auth/login', {
      username: data.username,
      password: data.password,
    });

    return {
      token: res.accessToken,
    };
  } catch (e: any) {
    return rejectWithValue(e?.response?.data?.message || 'Login failed');
  }
});
