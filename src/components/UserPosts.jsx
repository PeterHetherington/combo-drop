import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/utilities";
import Image from "next/image";
import PostTile from "./PostTile";

export default async function UserPosts() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  const posts = (
    await db.query(
      `SELECT sp.*, su.username FROM social_posts sp JOIN social_users su ON sp.user_id = su.clerk_id WHERE clerk_id = $1 ORDER BY sp.created_on`,
      [userId]
    )
  ).rows;
  return (
    <div className="flex flex-col gap-3 min-w-100">
      {posts.map((post) => (
        <PostTile
          key={post.id}
          id={post.id}
          username={post.username}
          img={post.img}
          link={post.link}
          content={post.content}
        />
      ))}
    </div>
  );
}
