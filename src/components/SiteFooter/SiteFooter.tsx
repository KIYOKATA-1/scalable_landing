"use client";

import { motion } from "motion/react";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Advantages", href: "#advantages" },
  { label: "Reviews", href: "#reviews" },
];

const revealEase = [0.22, 1, 0.36, 1] as const;

const footerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
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
    transition: { duration: 0.65, ease: revealEase },
  },
};

export function SiteFooter() {
  return (
    <motion.footer
      id="site-footer"
      className="scroll-mt-24 border-t border-white/10 bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(0,0,0,1)_100%)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <motion.div
        className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] md:py-14 lg:px-10"
        variants={footerVariants}
      >
        <motion.div variants={itemVariants}>
          <a
            href="#hero"
            className="text-[0.9rem] font-semibold tracking-[0.18em] text-white"
          >
            SITE NAME
          </a>
          <p className="mt-4 max-w-[20rem] text-[0.88rem] leading-relaxed tracking-[0.02em] text-white/65">
            AI-powered product infrastructure for secure and scalable digital
            experiences.
          </p>
        </motion.div>

        <motion.nav aria-label="Footer navigation" variants={itemVariants}>
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white/55">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[0.9rem] tracking-[0.02em] text-white/78 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.section aria-label="Contacts" variants={itemVariants}>
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white/55">
            Contacts
          </h2>
          <address className="mt-4 space-y-2.5 not-italic">
            <p className="text-[0.9rem] tracking-[0.02em] text-white/78">
              hello@serendale.ai
            </p>
            <p className="text-[0.9rem] tracking-[0.02em] text-white/78">
              +1 (415) 555-0128
            </p>
            <p className="text-[0.9rem] tracking-[0.02em] text-white/78">
              San Francisco, CA
            </p>
          </address>
        </motion.section>
      </motion.div>

      <div className="border-t border-white/10">
        <motion.div
          className="mx-auto flex w-full max-w-[1240px] flex-col gap-2 px-4 py-4 text-[0.76rem] tracking-[0.03em] text-white/45 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10"
          variants={itemVariants}
        >
          <p>© {new Date().getFullYear()} Serendale. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
