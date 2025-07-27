import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col p-3 justify-center text-center gap-3 mt-5">
      <div>
        <h1 className="text-2xl"> Welcome to </h1>
        <h1 className="text-4xl"> ComboDrop</h1>
      </div>
      <Image
        src="/dropped-combo.png"
        width={250}
        height={250}
        alt="Ryu dropping his combo meal"
        className="self-center"
      />
      <p> a social space for fighting-game players</p>
    </div>
  );
}
