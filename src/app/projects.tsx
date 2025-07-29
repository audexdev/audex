import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const cards = [
    {
        title: '💡 IdeaSpark',
        desc: 'AI-powered idea generation using Gemini API.',
        href: 'https://ideaspark.audex.dev',
    },
    {
        title: '🧪 Playground',
        desc: 'Interactive experiments and visual tools.',
        href: '/playground',
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen p-8 grid grid-cols-1 md:grid-cols-[auto_auto] justify-center gap-6 bg-background text-foreground font-sans place-items-center">
            {cards.map((card, i) => (
                <motion.div
                    key={card.href}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: i * 0.15,
                        duration: 0.6,
                        ease: 'easeOut'
                    }}
                >
                    <a href={card.href} target='_self'>
                        <Card className="w-[400px] max-w-md h-auto bg-gradient-to-br from-background to-muted border border-border shadow-md rounded-2xl transition-transform hover:scale-[1.02]">
                            <CardContent className="p-6 space-y-2">
                                <h2 className="text-xl font-semibold">{card.title}</h2>
                                <p className="text-muted-foreground text-sm">{card.desc}</p>
                            </CardContent>
                        </Card>
                    </a>
                </motion.div>
            ))}
        </div>
    );
}