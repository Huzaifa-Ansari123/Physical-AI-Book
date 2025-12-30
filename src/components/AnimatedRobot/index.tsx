import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';

export default function AnimatedRobot(): JSX.Element {
  const [isAwake, setIsAwake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAwake(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.robotContainer}>
      {/* Robot head */}
      <div className={`${styles.robotHead} ${isAwake ? styles.awake : ''}`}>
        {/* Antenna */}
        <div className={styles.antenna}>
          <div className={styles.antennaBall}></div>
        </div>

        {/* Ears */}
        <div className={styles.ear}></div>
        <div className={styles.ear}></div>

        {/* Face */}
        <div className={styles.face}>
          {/* Eyes */}
          <div className={styles.eyes}>
            <div className={`${styles.eye} ${styles.leftEye}`}>
              <div className={styles.pupil}></div>
            </div>
            <div className={`${styles.eye} ${styles.rightEye}`}>
              <div className={styles.pupil}></div>
            </div>
          </div>

          {/* Mouth */}
          <div className={`${styles.mouth} ${isAwake ? styles.smiling : ''}`}>
            <div className={styles.mouthLine}></div>
          </div>

          {/* Cheek glow */}
          <div className={styles.cheek}></div>
          <div className={styles.cheek}></div>
        </div>

        {/* Body glow */}
        <div className={styles.bodyGlow}></div>
      </div>

      {/* Floating particles around robot */}
      <div className={styles.robotParticles}>
        <div className={`${styles.particle} ${styles.p1}`}></div>
        <div className={`${styles.particle} ${styles.p2}`}></div>
        <div className={`${styles.particle} ${styles.p3}`}></div>
        <div className={`${styles.particle} ${styles.p4}`}></div>
        <div className={`${styles.particle} ${styles.p5}`}></div>
        <div className={`${styles.particle} ${styles.p6}`}></div>
      </div>

      {/* Pulse ring */}
      <div className={styles.pulseRing}></div>
    </div>
  );
}
