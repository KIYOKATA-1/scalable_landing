"use client";

import { useState } from "react";
import {
  BurgerMenuIcon,
  DiscordIcon,
  GithubIcon,
  RedditIcon,
  TwitterIcon,
} from "@/shared/ui/icons";

const navItems = [
  "Smart Contracts",
  "Services",
  "Solutions",
  "Roadmap",
  "Whitepaper",
];

const socialLinks = [
  { label: "GitHub", href: "#", Icon: GithubIcon },
  { label: "Discord", href: "#", Icon: DiscordIcon },
  { label: "Reddit", href: "#", Icon: RedditIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
] as const;

const desktopBrandClass =
  "justify-self-start text-[clamp(0.75rem,0.67rem+0.35vw,0.95rem)] font-semibold tracking-[0.14em] text-white sm:tracking-[0.18em] min-[769px]:text-[clamp(1rem,0.72rem+0.75vw,2rem)] min-[769px]:tracking-[0.2em]";

const desktopNavListClass =
  "flex items-center gap-[clamp(1rem,0.4rem+1.25vw,2.75rem)] text-[clamp(0.8rem,0.7rem+0.25vw,1.15rem)] font-medium text-white/85";

const socialIconClass =
  "h-[clamp(0.9rem,0.76rem+0.36vw,1.45rem)] w-[clamp(0.9rem,0.76rem+0.36vw,1.45rem)]";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[1fr_auto] items-center gap-3 px-4 pb-3 pt-6 sm:px-6 min-[769px]:grid-cols-[1fr_auto_1fr] min-[769px]:px-8 min-[769px]:pb-2 min-[769px]:pt-8 lg:max-w-[1440px] lg:px-10 xl:max-w-[1600px] xl:px-14 2xl:max-w-[1760px] 2xl:px-20">
        <a href="#" className={desktopBrandClass}>
          SITE NAME
        </a>

        <nav aria-label="Primary navigation" className="hidden min-[769px]:block">
          <ul className={desktopNavListClass}>
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-[clamp(0.5rem,0.4rem+0.35vw,0.95rem)]">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white/85 transition-colors duration-200 hover:text-white"
            >
              <Icon className={socialIconClass} />
            </a>
          ))}

          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="grid h-7 w-7 place-items-center text-white/90 transition-colors duration-200 hover:text-white min-[769px]:hidden"
          >
            <BurgerMenuIcon
              className={`h-5 w-5 transition-transform duration-200 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`overflow-hidden transition-all duration-300 min-[769px]:hidden ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/85 sm:mx-6">
          {navItems.map((item) => (
            <li key={item} className="border-b border-white/10 last:border-b-0">
              <a
                href="#"
                className="block py-3 transition-colors duration-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
