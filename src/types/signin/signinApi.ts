export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  expiresIn: number;
}