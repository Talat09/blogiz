export interface Blog {
  _id: string;
  title: string;
  description: string;
  publish_date: string; // You can change this to Date if you plan to parse it
  author_name: string;
  blog_image: string;
  total_likes: string; // You can also use `number` if the value is always numeric
}
export interface SessionInterface {
  user?: {
    name: string | null;
    email: string | null;
    image: string | null;
  };
  expires: string;
}
// types/api.ts
export interface ApiSuccess<T> {
  success: true;
  data: T;
}
export interface ApiError {
  success: false;
  message: string;
}
export type ApiResponse<T> = ApiSuccess<T> | ApiError;
export type LoginUserData = {
  email: string;
  password: string;
};
export type UserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type RegisterData = {
  username: string;
  email: string;
  password: string;
};
