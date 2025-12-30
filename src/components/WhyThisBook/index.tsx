import React from 'react';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

const features = [
  {
    icon: '🔬',
    title: 'Research-Backed Content',
    description: 'Built on cutting-edge research from leading AI labs and robotics institutions worldwide.',
  },
  {
    icon: '💻',
    title: 'Code-First Approach',
    description: 'Every concept includes working code examples you can run, modify, and learn from.',
  },
  {
    icon: '🎓',
    title: 'Beginner Friendly',
    description: 'No prior robotics experience needed. Start from basics and progress to advanced topics.',
  },
  {
    icon: '🏭',
    title: 'Industry Relevant',
    description: 'Learn the exact tools and frameworks used by Tesla, Boston Dynamics, and NVIDIA.',
  },
  {
    icon: '🔄',
    title: 'Always Updated',
    description: 'Content is continuously updated to reflect the latest in Physical AI development.',
  },
  {
    icon: '🌐',
    title: 'Free & Open',
    description: 'Completely free to access online. Learn at your own pace, anywhere, anytime.',
  },
];

const testimonials = [
  {
    quote: "Finally, a resource that bridges the gap between AI theory and physical implementation.",
    author: "Robotics Engineer",
    role: "FAANG Company",
  },
  {
    quote: "The hands-on labs transformed how I approach robot development. Absolutely essential.",
    author: "Graduate Student",
    role: "MIT Robotics",
  },
];

export default function WhyThisBook(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.orbBackground}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Why Choose This Book</span>
          <Heading as="h2" className={styles.title}>
            Built Different, <span className={styles.highlight}>Learn Better</span>
          </Heading>
          <p className={styles.subtitle}>
            Not just another textbook — a complete learning experience designed for the modern developer
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.testimonialSection}>
          <h3 className={styles.testimonialHeader}>What Readers Say</h3>
          <div className={styles.testimonials}>
            {testimonials.map((item, idx) => (
              <div key={idx} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quote}>{item.quote}</p>
                <div className={styles.author}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorRole}>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
