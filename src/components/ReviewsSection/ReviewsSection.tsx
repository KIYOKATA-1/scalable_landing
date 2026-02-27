"use client";

import { motion } from "motion/react";

type Review = {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Ariana Cole",
    role: "Head of Product",
    company: "Nova Ledger",
    rating: 5,
    text: "We shipped our AI assistant in weeks instead of months. The tooling is clean, and the security model gave legal and compliance teams confidence from day one.",
  },
  {
    name: "Marcus Lin",
    role: "CTO",
    company: "FlowStack",
    rating: 5,
    text: "The performance under load is excellent. Even with high concurrent traffic, response times stay predictable and operations stay transparent.",
  },
  {
    name: "Sofia Martinez",
    role: "Growth Lead",
    company: "Neuronix",
    rating: 4.8,
    text: "Our onboarding metrics improved after moving to this stack. UX patterns and API ergonomics make adoption easier for both technical and non-technical users.",
  },
];

const averageRating = (
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Serendale AI Platform",
  description:
    "AI-powered infrastructure platform for secure, scalable product teams.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: Number(averageRating),
    reviewCount: reviews.length,
  },
  review: reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
  })),
};

function renderStars(rating: number) {
  const fullStars = Math.round(rating);
  return "★".repeat(fullStars).padEnd(5, "☆");
}

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

export function ReviewsSection() {
  return (
    <motion.section
      id="reviews"
      className="relative scroll-mt-24 border-t border-white/10 bg-[radial-gradient(1000px_380px_at_50%_-6%,rgba(252,79,246,0.2),rgba(0,0,0,0))]"
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
          Testimonials
        </motion.p>
        <motion.h2
          className="mt-3 max-w-[44rem] text-[clamp(1.55rem,3.4vw,2.7rem)] font-medium leading-[1.05] tracking-[0.02em] text-white"
          variants={itemVariants}
        >
          Teams Trust Serendale In Mission-Critical Workloads
        </motion.h2>
        <motion.p
          className="mt-4 max-w-[42rem] text-[clamp(0.92rem,1.2vw,1.06rem)] leading-relaxed tracking-[0.02em] text-white/75"
          variants={itemVariants}
        >
          Real product teams using the platform for growth, security, and
          reliability in production.
        </motion.p>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={cardsContainerVariants}
        >
          {reviews.map((review) => (
            <motion.article
              key={review.name}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055)_0%,rgba(255,255,255,0.02)_100%)] p-5"
              variants={cardVariants}
            >
              <p className="text-[0.9rem] leading-relaxed tracking-[0.015em] text-white/80">
                "{review.text}"
              </p>
              <p className="mt-5 text-[0.92rem] font-medium tracking-[0.02em] text-white">
                {review.name}
              </p>
              <p className="mt-1 text-[0.8rem] tracking-[0.02em] text-white/60">
                {review.role}, {review.company}
              </p>
              <p className="mt-3 text-[0.86rem] tracking-[0.12em] text-[#ECBFBF]">
                {renderStars(review.rating)}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </motion.section>
  );
}
