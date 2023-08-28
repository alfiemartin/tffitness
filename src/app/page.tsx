import Intro from "./components/intro/intro";
import Hero from "./hero/hero";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-scroll overflow-x-hidden h-screen">
      <Intro />
      <Hero />
    </main>
  );
}
