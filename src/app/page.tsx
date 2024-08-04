import { HydrateClient } from "@/trpc/server";

import CreateProfileCard from "@/components/CreateProfileCard";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <CreateProfileCard />
        </div>
      </main>
    </HydrateClient>
  );
}
