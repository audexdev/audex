import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const cards = [
    {
        title: '💡 IdeaSpark',
        desc: 'AI-powered idea generator using Gemini API.',
        href: 'https://ideaspark.audex.dev'
    },
    {
        title: '🎵 MiniPlayer',
        desc: 'A native macOS always-on-top music mini-player for Apple Music.app.',
        href: 'https://github.com/audexdev/MiniPlayer'
    },
    {
        title: '🔊 Lossless Audio Codec',
        desc: 'My custom C++ lossless audio codec.',
        href: 'https://github.com/audexdev/Lossless-Audio-Codec',
    }/*,
    {
        title: '🧪 Playground',
        desc: 'Interactive experiments and visual tools.',
        href: '/playground'
    }*/
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
                        <a href={card.href} target="_blank">
                            <Card className="w-[300px] bg-muted border border-border shadow rounded-xl hover:scale-[1.02] transition-transform">
                                <CardContent className="p-4 space-y-2">
                                    <h2 className="text-base font-semibold">{card.title}</h2>
                                    <p className="text-muted-foreground text-sm">{card.desc}</p>
                                </CardContent>
                            </Card>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}