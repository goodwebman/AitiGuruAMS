import type { RootState } from '@/shared/store/redux-store'


export const selectSession = (s: RootState) => s.session

export const selectToken = (s: RootState) =>
  s.session.type === 'authorized'
    ? s.session.session.token
    : undefined

export const selectIsAuthorized = (s: RootState) =>
  s.session.type === 'authorized'

export const selectAuthError = (s: RootState) =>
  s.session.type === 'failed' ? s.session.error : undefined