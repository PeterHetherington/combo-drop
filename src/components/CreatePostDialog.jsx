import { IoAddCircleOutline } from "react-icons/io5";
import { Dialog } from "radix-ui";
import { Cross1Icon } from "@radix-ui/react-icons";
import PostForm from "@/components/PostForm";

export default function CreatePostDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IoAddCircleOutline className="flex items-center rounded-md p-1 gap-1 bg-gray-600 text-3xl cursor-pointer hover:bg-pink-600" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed bg-gray-700 p-8 rounded-md shadow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
          <div className="flex justify-between mb-2">
            <Dialog.Title className="text-2xl">Create Post</Dialog.Title>
            <Dialog.Close>
              <div>
                <Cross1Icon />
              </div>
            </Dialog.Close>
          </div>
          <PostForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
