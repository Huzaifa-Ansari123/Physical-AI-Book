import React, { JSX } from 'react';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

const learningOutcomes = [
  {
    icon: '🎯',
    title: 'Build Real Robots',
    description: 'Go from zero to deploying AI on physical hardware with hands-on projects',
  },
  {
    icon: '🧠',
    title: 'Master AI Fundamentals',
    description: 'Understand how intelligence emerges from physical systems and embodiment',
  },
  {
    icon: '🔧',
    title: 'Industry-Ready Skills',
    description: 'Learn ROS 2, Gazebo, NVIDIA Isaac - tools used by top robotics companies',
  },
  {
    icon: '🚀',
    title: 'Launch Your Career',
    description: 'Build a portfolio of projects that demonstrate real-world capabilities',
  },
];

export default function WhatYoullLearn(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlow}></div>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Learning Outcomes</span>
          <Heading as="h2" className={styles.title}>
            What You'll <span className={styles.highlight}>Master</span>
          </Heading>
          <p className={styles.subtitle}>
            Transform from curious beginner to confident Physical AI developer
          </p>
        </div>

        <div className={styles.grid}>
          {learningOutcomes.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Hands-on Labs</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>6</span>
            <span className={styles.statLabel}>Core Modules</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Real</span>
            <span className={styles.statLabel}>World Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}