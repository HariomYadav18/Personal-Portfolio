import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const GithubChart = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Custom theme to match the monochrome futuristic theme
    const theme = {
        light: ['#161b22', '#39d353', '#26a641', '#006d21', '#0e4429'], // Not used but required
        dark: ['#1a1a1a', '#4a4a4a', '#8a8a8a', '#c0c0c0', '#ffffff'], // Monochrome shades from dark to bright
    };

    return (
        <section id="github" className="py-24 lg:py-32 relative">
            <div className="absolute inset-0 geo-grid opacity-10" />

            <div className="section-container relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-wider uppercase">
                        GitHub <span className="text-primary neon-glow">Contributions</span>
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                        Open source activity and code frequency on GitHub.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass p-8 rounded-lg border border-border/50 flex flex-col items-center justify-center overflow-hidden"
                >
                    <GitHubCalendar
                        username="HariomYadav18"
                        theme={theme}
                        fontSize={12}
                        blockSize={12}
                        blockMargin={4}
                        colorScheme="dark"
                    />

                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-[#1a1a1a] border border-border" />
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Less</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-[#ffffff] shadow-[0_0_10px_white]" />
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">More</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GithubChart;
