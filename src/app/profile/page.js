import ProfileForm from "@/components/ProfileForm";
import UserProfile from "@/components/UserProfile";
import { db } from "@/utils/utilities";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { userId, redirectToSignIn } = await auth();

  // console.log(userId);
  if (!userId) return redirectToSignIn();

  const res = await db.query(`SELECT * FROM social_users WHERE clerk_id = $1`, [
    userId,
  ]);

  const userProfile = res.rows[0];

  if (!userProfile) {
    return (
      <div>
        <div>
          <p className="p-5 text-center">
            Before you can continue using our site you must finish setting up
            your profile
          </p>
        </div>
        <ProfileForm />
      </div>
    );
  }

  return (
    <div>
      <UserProfile profile={userProfile} />
    </div>
  );
}
