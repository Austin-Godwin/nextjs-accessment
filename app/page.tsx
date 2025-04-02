import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/public/background3.jpg";
import Background from "@/app/ui/background"
// import AuthForm from "./test2";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Background Image */}
      <Background backgroundImage={backgroundImage} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative z-10">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6">
          <h1 className="text-6xl font-bold">Welcome to Space Villa</h1>
          <p className="text-3xl">Discover a world of elegance and comfort in our exquisite homes, where every detail is crafted with care.</p>

          {/* Button */}
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-green-300 dark:hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            key={'Signup'}
            href="/auth/sign-up"
          >
            Get Started
            <Image
              className="light:invert"
              src="/arrow_forward.svg"
              alt="Arrow Forward"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </main>
    </div>

  );
}
