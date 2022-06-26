interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

interface AuthResponse {
  token: string;
}

interface User {
  id: string;
  email: string;
  name: string;
}

interface DecodedToken {
  user: User;
  iat: number;
  exp: number;
}
