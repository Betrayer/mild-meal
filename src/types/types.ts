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

export type UserData = {
  uid: string;
  accessToken: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
};

export type UserCollection = {
  favorites: any;
  todo: any;
  saved: any;
}