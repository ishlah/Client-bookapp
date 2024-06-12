export interface IBook {
  _id?: string;
  title: string;
  description: string;
  author: string;
  isbn: string;
  available : number
  file: null | FileList;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
