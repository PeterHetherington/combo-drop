import OtherUserProfile from "@/components/OtherUserProfile";
import { db } from "@/utils/utilities.js";

export default async function UserPage({ params }) {
  const slug = await params;
  const res = await db.query(`SELECT * FROM social_users WHERE username = $1`, [
    slug.username,
  ]);
  const userProfile = res.rows[0];
  return (
    <div>
      <OtherUserProfile profile={userProfile} />
    </div>
  );
}
