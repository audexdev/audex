'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GithubIcon } from 'lucide-react';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card className="bg-muted border border-border shadow-md rounded-2xl">
            <CardContent className="p-6 space-y-3 text-sm font-mono">
                <div>
                    <div className="text-lg font-bold">audex.dev</div>
                    <div>Developer / Audio Enthusiast / Mac Enjoyer</div>
                </div>
                <div>
                    Currently building: <span className="text-muted-foreground">MiniPlayer, LAC, and more.</span>
                </div>
                <div>
                    <a href="https://github.com/audexdev" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-4 w-4" />
                    </a>
                </div>
            </CardContent>
        </Card>
    </motion.div>
  );
}