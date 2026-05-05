'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GithubIcon, NotebookText } from 'lucide-react';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card className="bg-muted border border-border shadow-md rounded-lg">
            <CardContent className="p-6 space-y-5 text-sm font-mono">
                <div>
                    <div className="text-lg font-bold">audex.dev</div>
                    <div className="mt-1 text-muted-foreground leading-6">Developer / Audio Enthusiast / Mac Enjoyer</div>
                </div>
                <div className="leading-6">
                    Currently logging: <span className="text-muted-foreground">local LLM tests, Apple Silicon notes, and audio experiments.</span>
                </div>
                <div className="flex items-center gap-3">
                    <a className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-accent" href="https://github.com/audexdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-accent" href="/blog" aria-label="Blog">
                        <NotebookText className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </CardContent>
        </Card>
    </motion.div>
  );
}
