import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Introduction to Physical AI',
    icon: '🧠',
    description: (
      <>
        Explore the foundational concepts of Physical AI, understanding how intelligence emerges from physical systems through learning, control, and embodiment.
      </>
    ),
  },
  {
    title: 'ROS 2 Fundamentals',
    icon: '🤖',
    description: (
      <>
        Master the Robot Operating System 2, the backbone of modern robotics development, with hands-on tutorials and practical applications.
      </>
    ),
  },
  {
    title: 'Robot Simulation with Gazebo',
    icon: '🎮',
    description: (
      <>
        Learn to simulate complex robotic environments using Gazebo, enabling safe and efficient testing of AI-driven physical systems.
      </>
    ),
  },
  {
    title: 'NVIDIA Isaac Platform',
    icon: '⚡',
    description: (
      <>
        Dive into advanced AI robotics with NVIDIA Isaac, leveraging powerful GPU acceleration for real-time perception and control.
      </>
    ),
  },
  {
    title: 'Humanoid Robot Development',
    icon: '🚶',
    description: (
      <>
        Build and program humanoid robots, exploring the intersection of AI, mechanics, and human-like intelligence in physical form.
      </>
    ),
  },
  {
    title: 'Conversational Robotics',
    icon: '💬',
    description: (
      <>
        Develop robots that can engage in natural language interactions, combining speech recognition, NLP, and physical embodiment.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureIconWrapper}>
        <span className={styles.featureIcon}>{icon}</span>
        <div className={styles.featureGlow}></div>
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
      <div className={styles.featureConnector}></div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Explore Key Topics
          </Heading>
          <p className={styles.sectionSubtitle}>
            Master the complete stack for building intelligent physical systems
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
