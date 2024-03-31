import { IUsers } from "./users.interface";
export interface Post {
  post: [];
}
export interface IUserProfile extends IUsers {
  posts: Post[];
}
