import { About, Landing, NewsLetter } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <Landing />
      <About />
      <NewsLetter />
    </main>
  );
}
