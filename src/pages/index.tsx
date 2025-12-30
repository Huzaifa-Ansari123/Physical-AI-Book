import React, { JSX } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ChatIcon from '@site/src/components/ChatIcon';
import WhatYoullLearn from '@site/src/components/WhatYoullLearn';
import BookPreview from '@site/src/components/BookPreview';
import WhyThisBook from '@site/src/components/WhyThisBook';
import GetStartedCTA from '@site/src/components/GetStartedCTA';
import CoolRobot from '@site/src/components/CoolRobot';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* Animated background gradient */}
      <div className={styles.heroGradient}></div>

      {/* Neural network animated background */}
      <div className={styles.neuralNetwork}>
        <div className={clsx(styles.neuron, styles.neuron1)}></div>
        <div className={clsx(styles.neuron, styles.neuron2)}></div>
        <div className={clsx(styles.neuron, styles.neuron3)}></div>
        <div className={clsx(styles.neuron, styles.neuron4)}></div>
        <div className={clsx(styles.neuron, styles.neuron5)}></div>
      </div>

      {/* Floating particles */}
      <div className={styles.particles}>
        <div className={clsx(styles.particle, styles.particle1)}></div>
        <div className={clsx(styles.particle, styles.particle2)}></div>
        <div className={clsx(styles.particle, styles.particle3)}></div>
        <div className={clsx(styles.particle, styles.particle4)}></div>
        <div className={clsx(styles.particle, styles.particle5)}></div>
      </div>

      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div className={styles.heroContent}>
          {/* Left side - Text content */}
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot}></span>
              <span>New Book Release</span>
            </div>

            <Heading as="h1" className={styles.title}>
              <span className={styles.titleGradient}>Physical AI</span>
              <br />
              <span className={styles.titleAccent}>Learning</span>
            </Heading>

            <p className={styles.subtitle}>
              Understanding intelligence as an emergent property of physical
              systems through learning, control, and embodiment.
            </p>

            <div className={styles.buttons}>
              <Link
                className={clsx('button button--lg', styles.primaryButton)}
                to="/docs/intro"
              >
                <span className={styles.buttonText}>Begin Reading</span>
                <span className={styles.buttonIcon}>→</span>
              </Link>

              <Link
                className={clsx('button button--outline button--secondary button--lg', styles.secondaryButton)}
                to="/docs/intro"
              >
                <span className={styles.buttonText}>Book Overview</span>
                <span className={styles.buttonIcon}>→</span>
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>6</div>
                <div className={styles.statLabel}>Core Topics</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Practical Labs</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>Full</div>
                <div className={styles.statLabel}>Stack Coverage</div>
              </div>
            </div>
          </div>

          {/* Right side - Animated Robot */}
          <div className={styles.heroRight}>
            <CoolRobot />
          </div>
        </div>
      </div>

      {/* Chat Icon Widget */}
      <ChatIcon />

      {/* Wave animation at bottom */}
      {/* <div className={styles.waveContainer}>
        <svg className={styles.wave} viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Physical AI Learning"
      description="A comprehensive book on intelligence emerging from physical systems, learning, control, and embodiment."
    >
      <HomepageHeader />
      <main>
        <WhatYoullLearn />
        <BookPreview />
        <WhyThisBook />
        <GetStartedCTA />
      </main>
    </Layout>
  );
}
