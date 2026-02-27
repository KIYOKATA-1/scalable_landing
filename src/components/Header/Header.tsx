"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  BurgerMenuIcon,
  DiscordIcon,
  GithubIcon,
  RedditIcon,
  TwitterIcon,
} from "@/shared/ui/icons";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Advantages", href: "#advantages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#site-footer" },
];

const socialLinks = [
  { label: "GitHub", href: "#", Icon: GithubIcon },
  { label: "Discord", href: "#", Icon: DiscordIcon },
  { label: "Reddit", href: "#", Icon: RedditIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
] as const;

const desktopBrandClass =
  "justify-self-start text-[clamp(0.75rem,0.67rem+0.35vw,0.95rem)] font-semibold tracking-[0.14em] text-white sm:tracking-[0.18em] min-[769px]:text-[clamp(1.05rem,0.92rem+0.5vw,2.05rem)] min-[769px]:tracking-[0.2em]";

const desktopNavListClass =
  "flex items-center gap-[clamp(1rem,0.65rem+0.85vw,2.25rem)] text-[clamp(0.72rem,0.65rem+0.18vw,1rem)] font-medium text-white/85";

const socialIconClass =
  "h-[clamp(0.92rem,0.84rem+0.26vw,1.1rem)] w-[clamp(0.92rem,0.84rem+0.26vw,1.1rem)]";

const revealEase = [0.22, 1, 0.36, 1] as const;
const headerRevealDelay = 1.15;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[1fr_auto] items-center gap-3 px-4 pb-2 pt-6 sm:px-6 min-[769px]:grid-cols-[1fr_auto_1fr] min-[769px]:px-8 min-[769px]:pb-0 min-[769px]:pt-[2.65rem] lg:max-w-[1420px] lg:-translate-x-4 lg:px-10 xl:max-w-[1500px] xl:-translate-x-8 xl:px-16">
        <motion.a
          href="#hero"
          className={desktopBrandClass}
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: headerRevealDelay + 0.05, ease: revealEase }}
        >
          SITE NAME
        </motion.a>

        <motion.nav
          aria-label="Primary navigation"
          className="hidden min-[769px]:block"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: headerRevealDelay + 0.18, ease: revealEase }}
        >
          <motion.ul
            className={desktopNavListClass}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: headerRevealDelay + 0.24,
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: revealEase },
                  },
                }}
              >
                <a
                  href={item.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>

        <motion.div
          className="flex items-center justify-self-end gap-[clamp(0.5rem,0.4rem+0.35vw,0.95rem)]"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: headerRevealDelay + 0.31, ease: revealEase }}
        >
          {socialLinks.map(({ label, href, Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              className="text-white/85 transition-colors duration-200 hover:text-white"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: headerRevealDelay + 0.42 + index * 0.05,
                ease: revealEase,
              }}
              whileHover={{ y: -1.5, scale: 1.04 }}
            >
              <Icon className={socialIconClass} />
            </motion.a>
          ))}

          <motion.button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="grid h-7 w-7 place-items-center text-white/90 transition-colors duration-200 hover:text-white min-[769px]:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: headerRevealDelay + 0.64, ease: revealEase }}
            whileTap={{ scale: 0.9 }}
          >
            <BurgerMenuIcon
              className={`h-5 w-5 transition-transform duration-200 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
            />
          </motion.button>
        </motion.div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="absolute left-0 right-0 top-full z-40 min-[769px]:hidden"
      >
        <div
          className={`mx-auto w-full max-w-[1240px] px-4 transition-all duration-300 sm:px-6 min-[769px]:px-8 lg:max-w-[1420px] lg:px-10 xl:max-w-[1500px] xl:px-12 ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <ul className="rounded-2xl border border-white/10 bg-black/95 px-4 py-3 text-sm font-medium text-white/85 backdrop-blur">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="border-b border-white/10 last:border-b-0"
              >
                <a
                  href={item.href}
                  className="block py-3 transition-colors duration-200 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
