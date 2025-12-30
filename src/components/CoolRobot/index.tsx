import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';

export default function CoolRobot(): JSX.Element {
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({x: e.clientX, y: e.clientY});
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={styles.robotWrapper}>
      {/* Robot Body */}
      <div className={styles.robotBody}>
        {/* Head */}
        <div className={styles.robotHead}>
          {/* Face shield */}
          <div className={styles.faceShield}>
            {/* Eyes */}
            <div className={styles.eyes}>
              <div className={`${styles.eye} ${styles.eyeLeft}`}>
                <div className={styles.eyeGlow}></div>
                <div className={styles.pupil}></div>
              </div>
              <div className={`${styles.eye} ${styles.eyeRight}`}>
                <div className={styles.eyeGlow}></div>
                <div className={styles.pupil}></div>
              </div>
            </div>

            {/* Eye scanner line */}
            <div className={styles.eyeScanner}></div>

            {/* Mouth */}
            <div className={styles.mouth}>
              <div className={styles.mouthLine}></div>
            </div>
          </div>

          {/* Antenna */}
          <div className={styles.antenna}>
            <div className={styles.antennaRod}></div>
            <div className={styles.antennaTip}></div>
            <div className={styles.signalWaves}>
              <div className={styles.wave}></div>
              <div className={styles.wave}></div>
              <div className={styles.wave}></div>
            </div>
          </div>

          {/* Ears/Side panels */}
          <div className={styles.sidePanel}></div>
          <div className={styles.sidePanel}></div>
        </div>

        {/* Neck */}
        <div className={styles.neck}></div>

        {/* Torso */}
        <div className={styles.torso}>
          {/* Chest panel */}
          <div className={styles.chestPanel}>
            {/* Heart/Core indicator */}
            <div className={styles.coreIndicator}>
              <div className={styles.coreGlow}></div>
              <div className={styles.corePulse}></div>
            </div>

            {/* Status lights */}
            <div className={styles.statusLights}>
              <div className={`${styles.light} ${styles.green}`}></div>
              <div className={`${styles.light} ${styles.blue}`}></div>
              <div className={`${styles.light} ${styles.purple}`}></div>
            </div>

            {/* Display */}
            <div className={styles.chestDisplay}>
              <div className={styles.displayText}>AI ACTIVE</div>
              <div className={styles.displayScan}></div>
            </div>
          </div>

          {/* Arms */}
          <div className={styles.arm}></div>
          <div className={styles.arm}></div>
        </div>

        {/* Legs/Bottom */}
        <div className={styles.legs}>
          <div className={styles.leg}></div>
          <div className={styles.leg}></div>
        </div>
      </div>

      {/* Floating elements around robot */}
      <div className={styles.floatingElements}>
        <div className={`${styles.element} ${styles.element1}`}>
          <span className={styles.emoji}>⚡</span>
        </div>
        <div className={`${styles.element} ${styles.element2}`}>
          <span className={styles.emoji}>🧠</span>
        </div>
        <div className={`${styles.element} ${styles.element3}`}>
          <span className={styles.emoji}>🤖</span>
        </div>
        <div className={`${styles.element} ${styles.element4}`}>
          <span className={styles.emoji}>⚙️</span>
        </div>
        <div className={`${styles.element} ${styles.element5}`}>
          <span className={styles.emoji}>🔬</span>
        </div>
        <div className={`${styles.element} ${styles.element6}`}>
          <span className={styles.emoji}>💡</span>
        </div>
      </div>

      {/* Holographic projection */}
      <div className={styles.hologram}>
        <div className={styles.hologramRing}></div>
        <div className={styles.hologramRing}></div>
        <div className={styles.hologramRing}></div>
        <div className={styles.hologramData}>
          <span>SYSTEM</span>
          <span>ONLINE</span>
        </div>
      </div>

      {/* Particle effects */}
      <div className={styles.particles}>
        <div className={`${styles.particle} ${styles.p1}`}></div>
        <div className={`${styles.particle} ${styles.p2}`}></div>
        <div className={`${styles.particle} ${styles.p3}`}></div>
        <div className={`${styles.particle} ${styles.p4}`}></div>
        <div className={`${styles.particle} ${styles.p5}`}></div>
      </div>
    </div>
  );
}
