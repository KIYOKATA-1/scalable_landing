"use client";

import { motion } from "motion/react";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { Header } from "@/components/Header/Header";
import { BackgroundSpheres } from "@/components/BackgroundSpheres/BackgroundSpheres";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";

const heroTitleClass =
  "w-full max-w-[67rem] bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] bg-clip-text text-[clamp(1.85rem,4.45vw,4.35rem)] font-medium leading-[100%] tracking-[0.02em] text-transparent text-balance min-[1280px]:whitespace-nowrap";

const heroSubtitleClass =
  "mt-[clamp(0.15rem,0.6vw,0.45rem)] w-full max-w-[23.2rem] text-[clamp(1.48rem,3.75vw,3.72rem)] font-medium leading-[100%] tracking-[0.02em] text-white";

const heroDescriptionClass =
  "mt-[clamp(0.75rem,1.55vw,1.25rem)] w-full max-w-[48.5rem] text-center text-[clamp(0.82rem,1.05vw,1.22rem)] font-normal leading-[clamp(1.32rem,1.92vw,1.82rem)] tracking-[0.036em] text-white/92 text-balance";

const heroButtonClass =
  "hero-gradient-border-button inline-flex h-[clamp(3rem,4.4vw,4rem)] w-[clamp(8.5rem,11.2vw,10.25rem)] items-center justify-center rounded-[100px] border-2 border-transparent bg-black px-[clamp(1.25rem,2.2vw,1.75rem)] text-[clamp(0.82rem,1vw,0.95rem)] font-medium leading-none tracking-[0.02em] text-white transition-colors duration-200 hover:text-white";

const revealEase = [0.22, 1, 0.36, 1] as const;

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.12,
    },
  },
};

const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(9px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: revealEase,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="relative mx-auto flex min-h-[clamp(42rem,96vh,58rem)] max-[640px]:min-h-[72vh] max-[480px]:min-h-[68vh] w-full max-w-[1320px] items-start justify-center px-4 sm:px-6 lg:px-10">
            <motion.section
              className="relative z-10 flex w-full max-w-[1280px] flex-col items-center pt-[clamp(5.8rem,15.5vh,11rem)] text-center"
              initial="hidden"
              animate="visible"
              variants={heroContainerVariants}
            >
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[23%] -z-10 h-[clamp(12rem,22vw,19rem)] w-[clamp(20rem,58vw,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(141,127,255,0.24)_0%,rgba(141,127,255,0)_72%)] blur-2xl"
                initial={{ opacity: 0, scale: 0.84 }}
                animate={{ opacity: 1, scale: [1, 1.04, 1] }}
                transition={{
                  opacity: { duration: 0.85, delay: 0.28, ease: revealEase },
                  scale: {
                    duration: 8.5,
                    delay: 0.86,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.h1 className={heroTitleClass} variants={heroItemVariants}>
                THE BEST WEBSITE EVER
              </motion.h1>
              <motion.h3 className={heroSubtitleClass} variants={heroItemVariants}>
                Scalable.
              </motion.h3>
              <motion.p className={heroDescriptionClass} variants={heroItemVariants}>
                Our technology performing fast blockchain (120K TPS) and it has
                guaranteed AI-based data security. Proof of Stake, its consensus
                algorithm enables unlimited speeds.
              </motion.p>
              <motion.div
                className="mt-[clamp(1.3rem,3vw,2.2rem)] flex flex-col items-center gap-[clamp(0.5rem,1vw,0.7rem)] min-[480px]:flex-row"
                variants={heroItemVariants}
              >
                <motion.button
                  type="button"
                  className={`${heroButtonClass} hero-gradient-border-button--active`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  type="button"
                  className={heroButtonClass}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read more
                </motion.button>
              </motion.div>
            </motion.section>

            <BackgroundSpheres />
          </div>
        </section>

        <AdvantagesSection />
        <ReviewsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
