"use client";

import { ChangeEvent, useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { PostType, PromptCardListType } from "@/types/custom-types";

const PromptCardList = ({ data, handleTagClick }: PromptCardListType) => (
  <div className="mt-16 prompt_layout">
    {data.map((post: PostType) => (
      <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
    ))}
  </div>
);
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState<PostType[]>([]);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    throw new Error("Function not implemented.");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}}></PromptCardList>
    </section>
  );
};

export default Feed;
