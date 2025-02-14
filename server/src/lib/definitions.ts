export type ArticleType = {
  id: number;
  title: string;
  content: string;
  picture: string;
  date: string;
  user_id: number;
  category_id: number;
  is_published: boolean;
  views: number;
};

export type PublicationType = {
  title: string;
  picture: string;
  content: string;
  category: string;
};
export type userType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role_id: number;
};
