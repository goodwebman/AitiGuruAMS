import { selectSession } from '@/entities/session/model/selectors';
import { loginSession } from '@/entities/session/model/thunks';
import type { LoginData } from '@/entities/session/model/types';
import { useAppDispatch, useAppSelector } from '@/shared/store/redux-store';

import { rememberStorage } from '@/shared/lib/storage';
import { persistor } from '@/shared/store/redux-store';

import { useCallback } from 'react';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const session = useAppSelector(selectSession);

  const login = useCallback(
    async (data: LoginData) => {
      try {
        rememberStorage.set(data.remember);
        await persistor.purge();
        const result = await dispatch(loginSession(data)).unwrap();
        await persistor.flush();

        return { data: result };
      } catch (error: any) {
        throw error?.message ? new Error(error.message) : error;
      }
    },
    [dispatch],
  );

  return {
    login,
    isLoading: session.type === 'pending',
    error: session.type === 'failed' ? session.error : null,
    isAuthorized: session.type === 'authorized',
  };
};

