import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Trophy, Cloud, GraduationCap, Activity } from 'lucide-react';
import CountUp from '@/components/CountUp';

const achievements = [
  {
    icon: Lightbulb,
    number: 260,
    suffix: '+',
    label: 'DSA Problems Solved',
    subtitle: 'LeetCode & GeeksforGeeks',
  },
  {
    icon: Trophy,
    number: 1860,
    suffix: '',
    label: 'Amazon HackOn Ranking',
    subtitle: 'Top 13.3% among 14,000+ teams',
    customDisplay: 'Top 1,860 / 14,000',
  },
  {
    icon: Cloud,
    number: 95,
    suffix: '/100',
    label: 'Oracle OCI Certification',
    subtitle: 'Cloud Infrastructure Foundations',
  },
  {
    icon: GraduationCap,
    number: 8.71,
    suffix: '',
    label: 'CGPA',
    subtitle: 'Vellore Institute of Technology',
    decimals: 2,
  },
  {
    icon: Activity,
    number: 1,
    suffix: '',
    label: 'Karnataka U-14 Zonal Cricket',
    subtitle: 'Represented at zonal-level tournaments',
    customDisplay: 'U-14 Zonal',
  },
];

const highlights = [
  'Solved 260+ DSA problems across arrays, linked lists, hashing, sorting, and trees',
  'Ranked in the top 13.3% of 14,000+ teams in Amazon HackOn (52,000+ participants)',
  'Oracle Cloud Infrastructure Foundations certified with a score of 95/100',
  'Maintained a CGPA of 8.71 while building and deploying production-grade applications',
  'Delivered 3+ live full-stack projects with real users and end-to-end ownership',
  'Represented Karnataka at U-14 zonal-level cricket tournaments, demonstrating teamwork, discipline, and competitive mindset',
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-24 lg:py-32 relative">
      {/* Background grid */}
      <div className="absolute inset-0 geo-grid opacity-20" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-wider uppercase">
            Key <span className="text-primary neon-glow">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card text-center p-6"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />

                <div className="text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
                  {achievement.customDisplay ? (
                    achievement.customDisplay
                  ) : (
                    isInView && (
                      <CountUp
                        end={achievement.number}
                        suffix={achievement.suffix}
                        decimals={achievement.decimals}
                      />
                    )
                  )}
                </div>

                <div className="font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center uppercase tracking-wider">
            Highlights
          </h3>

          <ul className="space-y-4">
            {highlights.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="text-success mt-1">▹</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
