import Image from "next/image";
import Link from "next/link";

export default function PostTile(props) {
  return (
    <div className="bg-gray-600 p-3 rounded-md">
      <Link
        href={`/profile/${props.username}`}
        className="flex mb-2 border-b border-gray-500"
      >
        {props.username}
      </Link>
      {/* <p className="mb-2 border-b border-gray-500">{props.username}</p> */}
      {props.img ? (
        <Image
          className="object-cover aspect-video w-full"
          src={props.img}
          width={500}
          height={500}
          alt="image description to go here"
        />
      ) : (
        <></>
      )}
      {props.link ? (
        <a href={props.link} target="blank">
          {props.link}
        </a>
      ) : (
        <></>
      )}
      <div>
        <p className="bg-black/40 py-3 pl-1">{props.content}</p>
      </div>
    </div>
  );
}
