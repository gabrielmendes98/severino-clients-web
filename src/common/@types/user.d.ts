interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

interface DecodedToken {
  user: {
    id: string;
    email: string;
    name: string;
  };
  iat: number;
  exp: number;
}
