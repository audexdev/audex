import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const cards = [
    {
        title: 'Local Claude Code Agents on M5 Max',
        desc: 'A controlled TypeScript benchmark for an MLX/Qwen Anthropic-compatible proxy.',
        href: '/blog',
        label: 'Writing'
    },
    {
        title: 'Lossless Audio Codec',
        desc: 'A small C++ lossless audio codec experiment.',
        href: 'https://github.com/audexdev/Lossless-Audio-Codec',
        label: 'Project'
    }
];

export default function Projects() {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
                {cards.map((card, i) => (
                    <motion.div
                        key={card.href}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: i * 0.15,
                            duration: 0.5,
                            ease: 'easeOut'
                        }}
                    >
                        <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            <Card className="w-[320px] min-h-[158px] bg-muted border border-border shadow rounded-lg hover:scale-[1.02] transition-transform">
                                <CardContent className="p-5 space-y-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <h2 className="text-base font-semibold leading-snug">{card.title}</h2>
                                        <Badge variant="outline">{card.label}</Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-6">{card.desc}</p>
                                </CardContent>
                            </Card>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
