import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/utilities";
import CreatePostDialog from "@/components/CreatePostDialog";
import PostTile from "@/components/PostTile";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";

export default async function Feed() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  const posts = (
    await db.query(
      `SELECT sp.*, su.username FROM social_posts sp JOIN social_users su ON sp.user_id = su.clerk_id ORDER BY sp.created_on DESC`
    )
  ).rows;
  // console.log(userId);
  const res = await db.query(`SELECT * FROM social_users WHERE clerk_id = $1`, [
    userId,
  ]);

  const userProfile = res.rows[0];

  if (!userProfile) {
    redirect(`/profile`);
  }

  return (
    <div className="p-3">
      <div className="flex justify-between py-5 px-3 text-2xl">
        <h1>Daily feed</h1>
        <div className="flex items-center gap-3">
          <Link href="/following">
            <FaUserGroup className="flex items-center rounded-md p-1 gap-1 bg-gray-600 text-3xl cursor-pointer hover:bg-pink-600" />
          </Link>
          <CreatePostDialog />
        </div>
      </div>
      <div className="flex flex-col gap-3">
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
    </div>
  );
}
