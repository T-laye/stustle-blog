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
  author: { _id: string; name: string; image: string; bio: string };
  views: number;
  category: "technology" | "business" | "lifestyle";
  image: string;
  post: string;
  _createdAt: string;
}
