export interface Data {
  id: number;
  tag: string;
  body: string;
  title: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface ApiResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
