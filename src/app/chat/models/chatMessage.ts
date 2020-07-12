import { User } from "./user";

export interface ChatMessage {
  user: User;
  text: string;
  created: Date;
  id:number;
}
