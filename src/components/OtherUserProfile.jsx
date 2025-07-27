import { auth, currentUser, clerkClient } from "@clerk/nextjs/server";
import { db } from "@/utils/utilities";
import Image from "next/image";
import OtherUserPosts from "./OtherUserPosts";
import Follow from "./Follow";

export default async function OtherUserProfile({ profile }) {
  const client = await clerkClient();
  const user = await client.users.getUser(profile.clerk_id);

  return (
    <>
      <div className="flex w-screen h-50">
        {profile.profile_pic ? (
          <Image
            className="object-cover aspect-video w-full"
            src={profile.profile_pic}
            width={1000}
            height={1000}
            alt="profile banner"
          />
        ) : (
          <Image
            className="object-cover aspect-video w-full"
            src="/bannerFallback.jpg"
            width={1000}
            height={1000}
            alt="profile banner"
          />
        )}
      </div>
      <div className="flex gap-3 p-2">
        <div>
          <Image
            src={`${user.imageUrl}`}
            width={100}
            height={100}
            alt="profile picture"
          />
        </div>
        <div>
          <p className="text-2xl">{profile.username}</p>
          <p className="text-gray-500">
            {profile.first_name} {profile.last_name}
          </p>
        </div>
        <div>
          <Follow profile={profile} />
        </div>
      </div>
      <p className="p-2 min-h-15">{profile.bio}</p>
      <div className="flex w-screen justify-center items-center p-2">
        <OtherUserPosts username={profile.username} />
      </div>
    </>
  );
}
