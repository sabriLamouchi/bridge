export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  username?: string;
  avatar: string;
  email?: string;
  bio?: string;
  followers?: number;
  following?: number;
  joinedDate?: string;
}

export interface Comment {
  id: number;
  user: User;
  content: string;
  timestamp: string;
  likes?: number;
  replies?: Comment[];
}

export interface PostStats {
  likes: number;
  comments: number;
  reposts: number;
  saved?: boolean;
}

export interface Post {
  id: number;
  user: User;
  content: string;
  image?: string;
  timestamp: string;
  stats: PostStats;
  comments: Comment[];
  liked?: boolean;
  reposted?: boolean;
}

export interface CreatePostRequest {
  content: string;
  image?: string;
}

export interface UpdatePostRequest {
  id: number;
  content?: string;
  image?: string;
}
