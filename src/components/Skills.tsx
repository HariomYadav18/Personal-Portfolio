import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layout, Server, Database, Sparkles, Star } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'text-foreground',
    glowColor: 'group-hover:text-primary',
    skills: ['C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend Engineering',
    icon: Layout,
    color: 'text-primary',
    glowColor: 'group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))]',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend & Real-Time Systems',
    icon: Server,
    color: 'text-success',
    glowColor: 'group-hover:drop-shadow-[0_0_10px_hsl(var(--success))]',
    skills: ['Node.js', 'Express.js', 'Socket.IO', 'REST API Design'],
  },
  {
    title: 'Databases & Dev Tooling',
    icon: Database,
    color: 'text-muted-foreground',
    glowColor: 'group-hover:text-accent',
    skills: ['PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'Vercel'],
  },
  {
    title: 'AI, Auth & Payments',
    icon: Sparkles,
    color: 'text-accent',
    glowColor: 'group-hover:drop-shadow-[0_0_10px_hsl(var(--accent))]',
    skills: ['OpenAI APIs', 'Gemini 2.0', 'Clerk Authentication', 'Razorpay Payments'],
  },
  {
    title: 'Engineering Focus Areas',
    icon: Star,
    color: 'text-primary',
    glowColor: 'group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))]',
    skills: [
      'Full-Stack Application Development',
      'AI-Powered SaaS Platforms',
      'Real-Time Communication Systems',
      'Secure Auth & RBAC',
      'Scalable API Architecture',
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
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
            Technical <span className="text-primary neon-glow">Stack & Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Technologies and capabilities applied across production-grade systems,
            AI SaaS platforms, and real-time applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group project-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    className={`w-5 h-5 ${category.color} ${category.glowColor} transition-all duration-300`}
                  />
                  <h3 className="text-lg font-display font-bold text-foreground uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
