import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-wider uppercase">
            Edu<span className="text-primary neon-glow">cation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">
          {/* ================= College ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="project-card p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/50" />

            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 border border-primary/30 rounded">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground tracking-wide">
                    B.Tech, Computer Science and Engineering
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    Vellore Institute of Technology
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground px-3 py-1 border border-border/50 rounded">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm font-display tracking-wide">
                    Oct 2022 – Jul 2026
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground px-3 py-1 border border-border/50 rounded">
                  <Award size={16} className="text-accent" />
                  <span className="text-sm font-semibold font-display tracking-wide">
                    CGPA: 8.68 / 10
                  </span>
                </div>
              </div>

              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/30 text-success rounded text-sm font-display uppercase tracking-wider"
              >
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                🎓 Graduating 2026
              </motion.span>

              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  <span className="font-display text-foreground uppercase tracking-wide">
                    Key Courses:
                  </span>{' '}
                  Data Structures, Algorithms, Database Management, Web Development, System Design
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= Class XII ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="project-card p-6 lg:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 border border-accent/30 rounded">
                <School className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground">
                  Class XII (Senior Secondary)
                </h3>
                <p className="text-muted-foreground font-medium">
                  Narayana PU College, Bangalore
                </p>

                <div className="flex flex-wrap gap-4 mt-3 text-sm">
                  <span className="px-3 py-1 border border-border/50 rounded text-muted-foreground">
                    2021 – 2022
                  </span>
                  <span className="px-3 py-1 border border-accent/40 rounded text-accent font-medium">
                    77.8%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= Class X ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="project-card p-6 lg:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 border border-primary/30 rounded">
                <School className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground">
                  Class X (Secondary School)
                </h3>
                <p className="text-muted-foreground font-medium">
                  Delhi Public School, Bangalore North
                </p>

                <div className="flex flex-wrap gap-4 mt-3 text-sm">
                  <span className="px-3 py-1 border border-border/50 rounded text-muted-foreground">
                    2019 – 2020
                  </span>
                  <span className="px-3 py-1 border border-primary/40 rounded text-primary font-medium">
                    92.8%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
