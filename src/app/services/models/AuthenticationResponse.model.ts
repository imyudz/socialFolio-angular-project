export interface AuthenticationResponse {
  token: string | null;
  errorMessage: string | null;
  userId: number | null;
}
