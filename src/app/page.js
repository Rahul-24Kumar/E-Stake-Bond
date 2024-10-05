import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-10">
      <Image src="/images/estakeHome.png" alt="logo" width={400} height={300} className="w-full"/>
    </div>
  );
}
