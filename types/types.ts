export type UserProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  image: string;
  password: string;
  userName: string;
  id: string;
  role: string;
};

export type SingleUserDetails = {
  singleUserData: string | any;
};

export type UserDetails = {
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  userName: string;
};

export type CatProps = {
  title: string;
  slug: string;
  image: string;
  singleCat: string | any;
};
export type MediaProps =
  | {
      id: string;
      title: string;
      image: string | null;
      slug: string;
      createdAt: Date;
      updatedAt: Date;
    }
  | undefined
  | null
  | any;
export type CatPropsUpdate = {
  title: string;
  image: string;
};

export interface IForm {
  step: number;
  formData: {
    name: string;
    slug?: string;
    productDetails?: string;
    mediaHouse?: string;
    categories?: string;
    content?: string;
  };
}

export type ArticleProps = {
  thumbnail: string;
  title: string;
  content: string;
  description: string;
  readTime: string;
  categoryId: string;
  userId: string | undefined;
  mediaHouseId: string;
  featuredOption: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export type SubscriberProps = {
  id: string;
  email: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};
