"use client";

import Image from "next/image";
import { motion } from "motion/react";
import styles from "./BackgroundSpheres.module.scss";

type SphereProps = {
  className?: string;
};

const revealEase = [0.22, 1, 0.36, 1] as const;
const sceneRevealDelay = 1.15;
const mistRiseDuration = 1.05;
const driftStartDelay = sceneRevealDelay + mistRiseDuration + 0.2;

function SphereCenter({ className }: SphereProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 967 967"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2" filter="url(#sphere-center-filter)">
        <circle cx="483.5" cy="483.5" r="233.5" fill="#5D6EF3" />
      </g>
      <defs>
        <filter
          id="sphere-center-filter"
          x="0"
          y="0"
          width="967"
          height="967"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

function SphereLeft({ className }: SphereProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 832 862"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2" filter="url(#sphere-left-filter)">
        <ellipse cx="400" cy="431" rx="232" ry="231" fill="#8593E8" />
      </g>
      <defs>
        <filter
          id="sphere-left-filter"
          x="-32"
          y="0"
          width="864"
          height="862"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

function SphereRight({ className }: SphereProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 846 846"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2" filter="url(#sphere-right-filter)">
        <circle cx="423" cy="423" r="223" fill="#FC4FF6" />
      </g>
      <defs>
        <filter
          id="sphere-right-filter"
          x="0"
          y="0"
          width="846"
          height="846"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

export function BackgroundSpheres() {
  return (
    <motion.div
      aria-hidden="true"
      className={styles.visualBlock}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: sceneRevealDelay, ease: revealEase }}
    >
      <div className={styles.backgroundSpheres}>
        <motion.div
          className={`${styles.sphere} ${styles.left}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{
            opacity: { duration: 0.7, delay: sceneRevealDelay, ease: revealEase },
          }}
        >
          <motion.div
            className={styles.sphereLift}
            initial={{ y: 150, filter: "blur(28px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{
              duration: mistRiseDuration,
              delay: sceneRevealDelay,
              ease: revealEase,
            }}
          >
            <motion.div
              className={styles.sphereDrift}
              animate={{
                x: [0, -16, 8, 0],
                y: [0, -14, 9, 0],
                scale: [1, 1.05, 0.98, 1],
              }}
              transition={{
                x: {
                  duration: 15,
                  delay: driftStartDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 17,
                  delay: driftStartDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 13,
                  delay: driftStartDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <SphereLeft className={styles.sphereGraphic} />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className={`${styles.sphere} ${styles.center}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{
            opacity: { duration: 0.7, delay: sceneRevealDelay + 0.08, ease: revealEase },
          }}
        >
          <motion.div
            className={styles.sphereLift}
            initial={{ y: 140, filter: "blur(26px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{
              duration: mistRiseDuration,
              delay: sceneRevealDelay + 0.08,
              ease: revealEase,
            }}
          >
            <motion.div
              className={styles.sphereDrift}
              animate={{
                x: [0, 12, -10, 0],
                y: [0, -12, 7, 0],
                scale: [1, 1.03, 0.99, 1],
              }}
              transition={{
                x: {
                  duration: 14,
                  delay: driftStartDelay + 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 16,
                  delay: driftStartDelay + 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 12,
                  delay: driftStartDelay + 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <SphereCenter className={styles.sphereGraphic} />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className={`${styles.sphere} ${styles.right}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{
            opacity: { duration: 0.7, delay: sceneRevealDelay + 0.16, ease: revealEase },
          }}
        >
          <motion.div
            className={styles.sphereLift}
            initial={{ y: 150, filter: "blur(28px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{
              duration: mistRiseDuration,
              delay: sceneRevealDelay + 0.16,
              ease: revealEase,
            }}
          >
            <motion.div
              className={styles.sphereDrift}
              animate={{
                x: [0, 14, -9, 0],
                y: [0, -15, 8, 0],
                scale: [1, 1.04, 0.98, 1],
              }}
              transition={{
                x: {
                  duration: 16,
                  delay: driftStartDelay + 0.16,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 18,
                  delay: driftStartDelay + 0.16,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 14,
                  delay: driftStartDelay + 0.16,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <SphereRight className={styles.sphereGraphic} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className={styles.mainImageLayer}
        initial={{ opacity: 0, y: 180, filter: "blur(34px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: mistRiseDuration + 0.15,
          delay: sceneRevealDelay + 0.26,
          ease: revealEase,
        }}
      >
        <motion.div
          className={styles.mainImageFloat}
          animate={{
            y: [0, -12, 0, 7, 0],
            rotate: [0, 0.35, 0, -0.35, 0],
            scale: [1, 1.01, 1, 0.995, 1],
          }}
          transition={{
            duration: 13,
            delay: driftStartDelay + 0.38,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            className={styles.mainImage}
            src="/images/main.webp"
            alt=""
            width={1605}
            height={505}
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
