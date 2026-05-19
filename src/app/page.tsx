'use client';

import Projects from './projects';
import Profile from './profile';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-screen-2xl flex flex-col md:flex-row gap-12 items-start justify-center">
        <div className="w-full md:w-[320px]">
          <Profile />
        </div>
        <div className="flex-1 flex justify-center">
          <Projects />
        </div>
      </div>
    </main>
  );
}
