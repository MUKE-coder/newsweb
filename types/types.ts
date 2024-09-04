import exp from "constants";

export type UserProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  image: string;
  password: string;
  userName: string;
  id: string;
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
  image: string ;
  singleCat: string | any
};
export type MediaProps = {
  id: string,    
  title: string,
  image:string | null,      
  slug: string,
  createdAt: Date,
  updatedAt:Date,
}| undefined | null | any;
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