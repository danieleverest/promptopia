import { type Session } from "next-auth";
import { type Dispatch, type SetStateAction } from "react";
import { Types } from "mongoose";

export type FormType = {
  type: string;
  post: PostType;
  setPost: Dispatch<SetStateAction<PostType>>;
  submitting: boolean;
  handleSubmit: (e: any) => void;
};

export type ProfileType = {
  name: string | null;
  desc: string;
  data: any;
  handleEdit?: (e: any) => void;
  handleDelete?: (e: any) => void;
};

export type PostType = {
  prompt: string;
  tag: string;
  creator?: Types.Object;
  _id?: string | number;
};

export type PromptCardType = {
  post: PostType;
  handleTagClick?: (e: any) => void;
  handleEdit?: (e: any) => void;
  handleDelete?: (e: any) => void;
};

export type PromptCardListType = {
  data: PostType[];
  handleTagClick: (e: any) => void;
};

export type SessionProviderType = {
  children: React.ReactNode;
  session?: Session;
};
