import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.name.trim().length < 2)
      newErrors.name = 'Name must be at least 2 characters';

    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = 'Enter a valid email address';

    if (formData.subject.trim().length < 5)
      newErrors.subject = 'Subject must be at least 5 characters';

    if (formData.message.trim().length < 20)
      newErrors.message = 'Message must be at least 20 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setStatus('loading');

      // 🔗 Replace here with EmailJS / API / Resend later
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hariomydv1844@gmail.com',
      href: 'mailto:hariomydv1844@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9353887316',
      href: 'tel:+919353887316',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'HariomYadav18',
      href: 'https://github.com/HariomYadav18',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'hariomyadav18',
      href: 'https://linkedin.com/in/hariomyadav18',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Open to internships, collaborations, and meaningful discussions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {['name', 'email', 'subject'].map((field) => (
              <div key={field}>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={field.toUpperCase()}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
                {errors[field] && (
                  <p className="text-xs text-destructive mt-1">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              disabled={status === 'loading'}
              className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-success/10 border border-success/30 rounded-lg">
                <CheckCircle className="text-success" />
                <p className="text-success text-sm">
                  Message sent successfully.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                <AlertCircle className="text-destructive" />
                <p className="text-destructive text-sm">
                  Something went wrong.
                </p>
              </div>
            )}
          </motion.form>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-10"
          >
            <h3 className="text-xl font-bold mb-8">Contact Details</h3>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 items-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-10 inline-flex w-full justify-center items-center gap-2 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
