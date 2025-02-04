export interface LoginResponse {
  data: {
    token: string;
    isAdmin: boolean;
  };
  message: string;
}

export interface RegisterResponse {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
  message: string;
}