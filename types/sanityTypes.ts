export interface Author {
  _id: string;
  name: string;
  username: string;
  email: string;
  image: string;
  bio: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  views: number;
  description: string;
  image: string;
  post: string;
  _createdAt: string;
}
