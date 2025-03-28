import react from "@heroicons/react";
import Hero from "@/components/hero";
import Forum from "@/components/forum";
import KeyFeatures from "@/components/keyfeatures";
import Forums from "../components/forum";
import FloatingNavDemo from "@/components/floating-nav";

export default function Home() {
  return (
    <>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full ">
          <FloatingNavDemo />
          <Hero />
          <KeyFeatures />
          <Forums />
        </div>
      </main>
    </>
  );
}
