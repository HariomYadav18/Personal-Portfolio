import quickAiImg from '@/assets/projects/quickai.png';
import smileyImg from '@/assets/projects/smiley.png';
import quizImg from '@/assets/projects/quickquiz.png';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Zap, MessageCircle, HelpCircle } from 'lucide-react';

const projects = [
  {
    title: 'QuickAi',
    subtitle: 'AI SaaS Platform for Content & Image Generation',
    image : quickAiImg,
    status: 'FLAGSHIP',
    statusColor: 'bg-primary',
    description:
      'Production-grade AI SaaS platform designed to deliver text, image, and resume intelligence features using multiple LLM providers. Built with a scalable PERN architecture, secure authentication, and a subscription-based monetization model.',
    achievements: [
      'Designed and implemented 6+ REST API endpoints with OpenAI and Gemini integration',
      'Achieved sub-100ms PostgreSQL queries through indexing and query optimization',
      'Implemented RBAC-based freemium access model with Clerk authentication',
      'Integrated Razorpay for secure subscription payments',
      'Built real-time dashboards and analytics using React 19 and Vite',
      'Enabled AI-powered image workflows using Cloudinary transformations',
    ],
    tech: [
      'PERN Stack',
      'PostgreSQL',
      'OpenAI API',
      'Gemini 2.0',
      'Clerk Auth',
      'Razorpay',
      'Cloudinary',
    ],
    demo: 'https://quick-ai-one-zeta.vercel.app/',
    github: 'https://github.com/HariomYadav18/QuickAi',
    
  },
  {
    title: 'Smiley',
    subtitle: 'Real-Time Chat Application',
    image: smileyImg,
    status: 'LIVE',
    statusColor: 'bg-success',
    description:
      'Real-time messaging platform supporting private and group chats, engineered with event-driven communication using Socket.IO and a secure backend authentication flow.',
    achievements: [
      'Implemented low-latency, event-based messaging using Socket.IO rooms',
      'Secured authentication using JWT, bcrypt hashing, and authorization middleware',
      'Optimized MongoDB schemas with indexing for fast message retrieval',
      'Deployed scalable infrastructure using Vercel and MongoDB Atlas',
    ],
    tech: ['MERN Stack', 'Socket.IO', 'JWT', 'Bcrypt', 'MongoDB Atlas'],
    demo: 'https://chat-app-sooty-rho.vercel.app/',
    github: 'https://github.com/HariomYadav18',
    
  },
  {
    title: 'Quick-Quiz',
    subtitle: 'Interactive Quiz Application',
    image : quizImg,
    status: 'LIVE',
    statusColor: 'bg-accent',
    description:
      'A lightweight, interactive quiz platform focused on performance, accessibility, and responsive UI using core web technologies.',
    achievements: [
      'Implemented dynamic question rendering and scoring logic using vanilla JavaScript',
      'Persisted user progress and scores using localStorage',
      'Designed fully responsive layouts with smooth transitions',
      'Built real-time timers and feedback loops for improved UX',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM APIs', 'localStorage'],
    demo: 'https://quick-quiz-pink-ten.vercel.app/',
    github: 'https://github.com/HariomYadav18',
  
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
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
            Selected <span className="text-primary neon-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A focused selection of production-ready systems showcasing full-stack,
            backend, and real-time engineering.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 ${project.statusColor} text-primary-foreground text-xs font-display uppercase tracking-wider rounded`}
                    >
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.demo} className="btn-futuristic text-xs">
                      <ExternalLink size={14} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-border text-muted-foreground text-xs font-display uppercase tracking-wider transition-all duration-300 hover:border-accent hover:text-accent"
                      style={{
                        clipPath:
                          'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                      }}
                    >
                      <Github size={14} className="inline mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>

                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="relative project-card p-8 lg:p-12">
                    <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/50" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent/50" />
                    <div className="aspect-video bg-gradient-to-br from-card to-muted rounded-lg border border-border/50 overflow-hidden shadow-xl">
  <img 
    src={project.image} 
    alt={`${project.title} preview`}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
