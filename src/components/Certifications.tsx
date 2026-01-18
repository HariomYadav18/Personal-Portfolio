import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Oracle University',
    issued: 'October 2025',
    score: '95 / 100',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=6B11E1619B8BF1AC72B79A96DDD600BE638622C4DC59E512525174C6B6623EE7',
    icon: Cloud,
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl lg:text-5xl font-bold text-center mb-14"
        >
          Certifications
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-card border border-border rounded-2xl p-8 lg:p-10 relative"
              >
                <div className="flex gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="text-primary w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <p className="text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm mb-6">
                  <span>
                    <strong>Issued:</strong> {cert.issued}
                  </span>
                  <span>
                    <strong>Score:</strong> {cert.score}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm font-semibold">
                    <CheckCircle size={16} />
                    Verified
                  </span>

                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <ExternalLink size={14} />
                    View Credential
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
