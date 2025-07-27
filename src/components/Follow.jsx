import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/utilities";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function FollowForm({ profile }) {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  const res = await db.query(
    `SELECT * FROM social_following WHERE user_id = $1 AND following =$2`,
    [userId, profile.clerk_id]
  );
  const alreadyFollowing = res.rows;
  const isFollowing = alreadyFollowing.length > 0;

  async function follow(formData) {
    "use server";
    const { user, following } = Object.fromEntries(formData);
    const isFollowing = alreadyFollowing.length > 0;
    if (!isFollowing) {
      await db.query(
        `INSERT INTO social_following (user_id, following) VALUES ($1, $2)`,
        [user, following]
      );
    } else {
      await db.query(
        `DELETE FROM social_following WHERE user_id = $1 AND following = $2`,
        [user, following]
      );
    }

    // revalidate the page to fetch new data
    revalidatePath(`/profile/${profile.username}`);

    // redirect user
    redirect(`/profile/${profile.username}`);
  }

  return (
    <form action={follow}>
      <input name="user" id="user" defaultValue={userId} type="hidden"></input>
      <input
        name="following"
        id="following"
        type="hidden"
        defaultValue={profile.clerk_id}
      ></input>
      <button type="submit" className="border px-2 rounded-2xl m-1">
        {isFollowing ? `Unfollow` : `Follow`}
      </button>
    </form>
  );
}
