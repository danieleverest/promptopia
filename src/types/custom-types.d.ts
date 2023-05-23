import { type Session } from "next-auth";
import { type Dispatch, type SetStateAction } from "react";

export type PostType = {
  prompt: string;
  tag: string;
};

export type FormType = {
  type: string;
  post: PostType;
  setPost: Dispatch<SetStateAction<PostType>>;
  submitting: boolean;
  handleSubmit: (e: any) => void;
};

export type ProfileType = {
  name: string;
  desc: string;
  data: any;
  handleEdit: (e: any) => void;
  handleDelete: (e: any) => void;
};
