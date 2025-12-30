import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar for "Physical AI Learning" book with week-based chapters.
 * Each week contains multiple chapters focused on specific topics.
 */
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '📖 Introduction',
    },

    {
      type: 'category',
      label: '📘 Week 1 — Foundations',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Chapter 1: Physical AI Overview',
          collapsible: true,
          collapsed: true,
          items: [
            'week1/chapter1/introduction-to-physical-ai',
            'week1/chapter1/what-is-intelligence',
            'week1/chapter1/embodiment-in-ai',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 2: Learning & Control',
          collapsible: true,
          collapsed: true,
          items: [
            'week1/chapter2/reinforcement-learning-basics',
            'week1/chapter2/control-theory-fundamentals',
            'week1/chapter2/learning-in-physical-systems',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: '📗 Week 2 — ROS 2 Fundamentals',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Chapter 3: Getting Started',
          collapsible: true,
          collapsed: true,
          items: [
            'week2/chapter3/installing-ros2',
            'week2/chapter3/understanding-nodes-and-topics',
            'week2/chapter3/services-and-actions',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 4: Building Systems',
          collapsible: true,
          collapsed: true,
          items: [
            'week2/chapter4/creating-packages',
            'week2/chapter4/launch-files-and-parameters',
            'week2/chapter4/debugging-ros2-applications',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: '📕 Week 3 — Robot Simulation',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Chapter 5: Gazebo Basics',
          collapsible: true,
          collapsed: true,
          items: [
            'week3/chapter5/introduction-to-gazebo',
            'week3/chapter5/creating-robot-models',
            'week3/chapter5/sensors-and-actuators',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 6: Advanced Simulation',
          collapsible: true,
          collapsed: true,
          items: [
            'week3/chapter6/multi-robot-simulation',
            'week3/chapter6/physics-engines',
            'week3/chapter6/plugin-development',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: '📙 Week 4 — NVIDIA Isaac',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Chapter 7: Isaac Sim',
          collapsible: true,
          collapsed: true,
          items: [
            'week4/chapter7/isaac-sim-overview',
            'week4/chapter7/setting-up-workspace',
            'week4/chapter7/creating-robot-in-isaac',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 8: AI Acceleration',
          collapsible: true,
          collapsed: true,
          items: [
            'week4/chapter8/gpu-accelerated-perception',
            'week4/chapter8/real-time-control',
            'week4/chapter8/optimizing-performance',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: '📓 Week 5 — Humanoid Robots',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Chapter 9: Humanoid Kinematics',
          collapsible: true,
          collapsed: true,
          items: [
            'week5/chapter9/forward-inverse-kinematics',
            'week5/chapter9/dynamics-modeling',
            'week5/chapter9/balance-and-stability',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 10: Control Systems',
          collapsible: true,
          collapsed: true,
          items: [
            'week5/chapter10/walking-gait-generation',
            'week5/chapter10/trajectory-planning',
            'week5/chapter10/humanoid-simulation',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: '📒 Week 6 — Conversational AI',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Chapter 11: Speech Recognition',
          collapsible: true,
          collapsed: true,
          items: [
            'week6/chapter11/introduction-to-asr',
            'week6/chapter11/voice-activity-detection',
            'week6/chapter11/noise-robust-recognition',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 12: NLP Integration',
          collapsible: true,
          collapsed: true,
          items: [
            'week6/chapter12/natural-language-understanding',
            'week6/chapter12/dialogue-management',
            'week6/chapter12/integrating-with-robotics',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: '📚 Appendices',
      collapsible: true,
      collapsed: true,
      items: [
        'appendices/glossary',
        'appendices/references',
        'appendices/further-reading',
      ],
    },
  ],
};

export default sidebars;
