"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";
import { useEffect, useState } from "react";
import { PostType } from "@/types/custom-types";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<PostType[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user?.id) fetchPosts();
  }, [session?.user?.id]);

  const handleEdit = (post: PostType) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post: PostType) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id?.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p: any) => p._id !== post._id);

        setPosts(filteredPosts);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
