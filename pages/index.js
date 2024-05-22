import Image from "next/image";
import Link from "next/link";
import BG from '/public/blogbuilder-bg.jpg'
import { Logo } from "../components/Logo";

export default function Home() {

  return <div className="w-screen h-screen flex justify-center items-center relative">
    <Image className="absolute object-cover" src={BG} alt="homepage background" fill />
    <div className="realtive z-10 bg-white/50 rounded-md p-5 max-w-sm backdrop-blur-md">
      <Logo />
      <hr />
      <p className="my-2">Revolutionize your content creation with our AI-driven SAAS. Quickly produce SEO-friendly blog posts that captivate your audience and enhance your online visibility.</p>
      <Link href='/post/new' className="btn text-white">Start</Link>
    </div>
  </div>;
}
