import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/utilities";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostForm() {
  const { userId, redirectToSignIn } = await auth();

  // console.log(userId);
  if (!userId) return redirectToSignIn();

  async function createPost(formData) {
    "use server";
    const { content, img, link } = Object.fromEntries(formData);

    console.log(content);
    console.log(img);
    console.log(link);

    await db.query(
      `INSERT INTO social_posts(content, user_id, img, link) VALUES ($1, $2, $3, $4)`,
      [content, userId, img, link]
    );

    // revalidate the page to fetch new data
    revalidatePath(`/feed`);

    // redirect user
    redirect(`/feed`);
  }

  return (
    <form action={createPost} className="flex flex-col p-5 bg-gray-500 h-100">
      <label htmlFor="bio" className="p-1">
        Body
      </label>
      <textarea
        name="content"
        id="content"
        type="text"
        className="bg-black/50 p-2 h-30 rounded-2xl"
      ></textarea>
      <label htmlFor="banner" className="p-1 mt-2">
        Image (image address)
      </label>
      <input
        name="img"
        id="img"
        type="text"
        className="bg-black/50 p-2 rounded-2xl"
      ></input>
      <label htmlFor="banner" className="p-1 mt-2">
        Link
      </label>
      <input
        name="link"
        id="link"
        type="text"
        className="bg-black/50 p-2 rounded-2xl"
      ></input>
      <button
        type="submit"
        className="border mt-5 p-3 px-5 justify-center self-center rounded-2xl"
      >
        Post
      </button>
    </form>
  );
}
