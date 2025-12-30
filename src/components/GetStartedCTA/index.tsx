import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

export default function GetStartedCTA(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.glowEffect}></div>

      <div className="container">
        <div className={styles.content}>
          <Heading as="h2" className={styles.title}>
            Ready to Build the <span className={styles.highlight}>Future</span>?
          </Heading>

          <p className={styles.subtitle}>
            Start your journey into Physical AI today. No signup required — just dive in and start learning.
          </p>

          <div className={styles.buttons}>
            <Link to="/docs/intro" className={styles.primaryButton}>
              <span className={styles.buttonIcon}>🚀</span>
              <span>Start Reading Now</span>
            </Link>

            <Link to="/docs/intro" className={styles.secondaryButton}>
              <span className={styles.buttonIcon}>📖</span>
              <span>View Table of Contents</span>
            </Link>
          </div>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>100% Free</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>No Signup</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Hands-on Labs</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Updated Regularly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className={styles.particles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
    </section>
  );
}
