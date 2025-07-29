'use client';

import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Card, CardContent } from '@/components/ui/card';
import Projects from './projects';

type Phase = 'booting' | 'loaded' | 'projects';

const dev: boolean = false;

export default function Home() {
  const [phase, setPhase] = useState<Phase>('booting');

  useEffect(() => {
    const seen = sessionStorage.getItem('seenTypewriter');
    if (seen === 'true') {
      setPhase('projects');
    } else {
      setPhase('booting');
      sessionStorage.setItem('seenTypewriter', 'true');
    }
  }, []);

  const skip = () => {
    setPhase((prev) => {
      if (prev === 'booting') return 'loaded';
      return prev;
    });
  };

  useEffect(() => {
    if (phase !== 'booting') return;

    const timeout = setTimeout(() => skip(), 3000);
    window.addEventListener('keydown', skip);
    window.addEventListener('click', skip);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('click', skip);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== 'loaded') return;

    const timeout = setTimeout(() => {
      setPhase('projects');
    }, 1200);

    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (dev) setPhase('projects');
  }, []);

  if (phase === 'booting') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-[360px]">
          <CardContent className="p-6 font-mono text-muted-foreground text-lg">
            <Typewriter
              words={['> booting audex.dev...']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === 'loaded') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-[360px]">
          <CardContent className="p-6 text-center text-xl font-mono text-muted-foreground">
            ✅ audex.dev loaded.
          </CardContent>
        </Card>
      </div>
    );
  }

  return <Projects />;
}