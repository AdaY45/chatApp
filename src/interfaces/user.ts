import {IFile} from "../interfaces/chat";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

export interface IMessage {
  room: string;
  text: string;
  date: any;
  file?: IFile;
}
