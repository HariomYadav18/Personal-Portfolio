import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from '@/components/CountUp';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 3, label: 'Production Apps', suffix: '' },
    { value: 8.68, label: 'CGPA', suffix: '', decimals: 2 },
    { value: 260, label: 'DSA Problems', suffix: '+' },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 geo-grid opacity-30" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-wider uppercase">
            About <span className="text-primary neon-glow">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-8" />

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I am a <span className="text-primary">full-stack engineer</span> focused on building
            production-grade web applications, AI-powered SaaS platforms, and real-time systems.
            My work spans the entire stack — from designing scalable backend APIs and database
            schemas to crafting performant, user-centric frontend experiences.
            <br />
            <br />
            I regularly work with <span className="text-accent">MERN and PERN stacks</span>,
            integrate modern AI services such as OpenAI and Gemini, and implement secure
            authentication, payments, and role-based access control. I enjoy solving complex
            problems at both the system and algorithmic level, with a strong emphasis on clean
            architecture and performance.
            <br />
            <br />
            I am currently pursuing a B.Tech in Computer Science at
            <span className="text-primary"> Vellore Institute of Technology</span> (CGPA: 8.68),
            graduating in July 2026, while actively building and shipping real-world products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 gap-6 lg:gap-12 max-w-2xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center lg:text-left stat-card p-6"
            >
              <div className="text-3xl lg:text-4xl font-display font-bold text-primary mb-1">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                )}
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground font-display uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
