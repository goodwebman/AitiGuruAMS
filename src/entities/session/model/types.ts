export type Session = {
  token: string

}

export type SessionState =
  | { type: 'idle' }
  | { type: 'pending' }
  | { type: 'authorized'; session: Session }
  | { type: 'failed'; error: string }

export type LoginData = {
  username: string
  password: string
  remember: boolean
}

export type AuthResponse = {
  accessToken: string
}