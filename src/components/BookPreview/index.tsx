import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

const chapters = [
  {
    number: '01',
    title: 'Introduction to Physical AI',
    description: 'Foundations of embodied intelligence and how physical systems learn',
    topics: ['Embodied Cognition', 'Sensorimotor Learning', 'AI Fundamentals'],
    color: '#6366f1',
  },
  {
    number: '02',
    title: 'ROS 2 Fundamentals',
    description: 'Master the Robot Operating System powering modern robotics',
    topics: ['Nodes & Topics', 'Services & Actions', 'Launch Files'],
    color: '#8b5cf6',
  },
  {
    number: '03',
    title: 'Gazebo Simulation',
    description: 'Build and test robots in realistic virtual environments',
    topics: ['World Building', 'Physics Simulation', 'Sensor Modeling'],
    color: '#a855f7',
  },
  {
    number: '04',
    title: 'NVIDIA Isaac Platform',
    description: 'Leverage GPU-accelerated AI for real-time robotics',
    topics: ['Isaac Sim', 'Isaac ROS', 'Perception AI'],
    color: '#d946ef',
  },
  {
    number: '05',
    title: 'Humanoid Development',
    description: 'Design and program human-like robotic systems',
    topics: ['Bipedal Motion', 'Balance Control', 'Manipulation'],
    color: '#ec4899',
  },
  {
    number: '06',
    title: 'Conversational Robotics',
    description: 'Create robots that understand and respond naturally',
    topics: ['Speech Recognition', 'NLP Integration', 'Multimodal AI'],
    color: '#f43f5e',
  },
];

export default function BookPreview(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.gridBackground}></div>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Inside The Book</span>
          <Heading as="h2" className={styles.title}>
            Your Learning <span className={styles.highlight}>Journey</span>
          </Heading>
          <p className={styles.subtitle}>
            A structured path from fundamentals to advanced Physical AI development
          </p>
        </div>

        <div className={styles.timeline}>
          {chapters.map((chapter, idx) => (
            <div key={idx} className={styles.chapterCard}>
              <div className={styles.chapterNumber} style={{ color: chapter.color }}>
                {chapter.number}
              </div>
              <div className={styles.chapterContent}>
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                <p className={styles.chapterDescription}>{chapter.description}</p>
                <div className={styles.topics}>
                  {chapter.topics.map((topic, i) => (
                    <span key={i} className={styles.topic} style={{ borderColor: chapter.color }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.chapterLine} style={{ background: chapter.color }}></div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/docs/intro" className={styles.ctaButton}>
            <span>Start Chapter 1</span>
            <span className={styles.ctaArrow}>→</span>
          </Link>
          <p className={styles.ctaSubtext}>Free to read online</p>
        </div>
      </div>
    </section>
  );
}
