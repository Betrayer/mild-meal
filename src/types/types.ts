export type LoginResponce = {
  accessToken: string;
};

export type AuthData = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type RegisterResponce = {
  accessToken: string;
};

export type Recipe = {
  id: number;
  image: string;
};
