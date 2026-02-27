"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Advantage = {
  title: string;
  description: string;
  icon: ReactNode;
};

const advantages: Advantage[] = [
  {
    title: "AI-Powered Automation",
    description:
      "Automate workflows, generate insights, and launch faster with production-ready AI tooling.",
    icon: (
      <path
        d="M12 3L14.7 8.3L20 11L14.7 13.7L12 19L9.3 13.7L4 11L9.3 8.3L12 3ZM5 4V7M19 15V18M4 18H7M17 4H20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Secure Data Layer",
    description:
      "Enterprise-grade encryption, auditable events, and role-based access for every team member.",
    icon: (
      <path
        d="M12 3L19 6V11.8C19 16.2 16.2 20.3 12 21.7C7.8 20.3 5 16.2 5 11.8V6L12 3ZM9.5 12.2L11.2 13.9L14.8 10.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Realtime Performance",
    description:
      "Low-latency architecture designed for high throughput and stable operation at scale.",
    icon: (
      <path
        d="M4 14L8 10L11 13L16 8L20 12M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Modular API Stack",
    description:
      "Composable APIs and SDKs that integrate into existing products without large rewrites.",
    icon: (
      <path
        d="M12 3L4 7V17L12 21L20 17V7L12 3ZM12 3V21M4 7L20 17M20 7L4 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Global-Ready Deployments",
    description:
      "Multi-region infrastructure to keep your product available, fast, and resilient worldwide.",
    icon: (
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM3 12H21M12 3C14.4 5.6 15.8 8.8 15.8 12C15.8 15.2 14.4 18.4 12 21M12 3C9.6 5.6 8.2 8.8 8.2 12C8.2 15.2 9.6 18.4 12 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Human-Centric UX",
    description:
      "Clear dashboards, guided actions, and thoughtful interactions that keep complexity invisible.",
    icon: (
      <path
        d="M12 12.5C14.0711 12.5 15.75 10.8211 15.75 8.75C15.75 6.67893 14.0711 5 12 5C9.92893 5 8.25 6.67893 8.25 8.75C8.25 10.8211 9.92893 12.5 12 12.5ZM5 20C5.9 16.9 8.6 15 12 15C15.4 15 18.1 16.9 19 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const revealEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.66, ease: revealEase },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.97, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: revealEase },
  },
};

function AdvantageIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        {children}
      </svg>
    </span>
  );
}

export function AdvantagesSection() {
  return (
    <motion.section
      id="advantages"
      className="relative scroll-mt-24 border-t border-white/10 bg-[radial-gradient(1200px_420px_at_50%_-8%,rgba(93,110,243,0.26),rgba(0,0,0,0))]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      variants={sectionVariants}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <motion.p
          className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/60"
          variants={itemVariants}
        >
          Advantages
        </motion.p>
        <motion.h2
          className="mt-3 max-w-[48rem] text-[clamp(1.55rem,3.4vw,2.8rem)] font-medium leading-[1.05] tracking-[0.02em] text-white"
          variants={itemVariants}
        >
          Built For Teams Shipping AI Products At Scale
        </motion.h2>
        <motion.p
          className="mt-4 max-w-[44rem] text-[clamp(0.92rem,1.2vw,1.06rem)] leading-relaxed tracking-[0.02em] text-white/75"
          variants={itemVariants}
        >
          The platform combines automation, secure infrastructure, and clean
          operator experience so engineering and product teams can deliver
          faster without compromising reliability.
        </motion.p>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          variants={cardsContainerVariants}
        >
          {advantages.map((item) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-5 backdrop-blur"
              variants={cardVariants}
            >
              <AdvantageIcon>{item.icon}</AdvantageIcon>
              <h3 className="mt-4 text-[1.02rem] font-medium tracking-[0.02em] text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed tracking-[0.01em] text-white/70">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
