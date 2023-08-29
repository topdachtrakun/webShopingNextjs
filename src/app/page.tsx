import Image from "next/image";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Hero from "./components/Hero";
import HeroLogin from "./components/HeroLogin";

export default async function Home() {
  const session = await getServerSession(options);

  // return <>{session ? <div>test1</div> : <div>test2</div>}</>;

  return (
    <div>
      <Hero />

      {session ? <div></div> : <HeroLogin />}
    </div>
  );
}
