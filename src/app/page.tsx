import { Header } from "@/components/Header/Header";
import { BackgroundSpheres } from "@/components/BackgroundSpheres/BackgroundSpheres";

const heroTitleClass =
  "w-full max-w-[67rem] bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] bg-clip-text text-[clamp(1.85rem,4.45vw,4.35rem)] font-medium leading-[100%] tracking-[0.02em] text-transparent text-balance min-[1280px]:whitespace-nowrap";

const heroSubtitleClass =
  "mt-[clamp(0.15rem,0.6vw,0.45rem)] w-full max-w-[23.2rem] text-[clamp(1.48rem,3.75vw,3.72rem)] font-medium leading-[100%] tracking-[0.02em] text-white";

const heroDescriptionClass =
  "mt-[clamp(0.75rem,1.55vw,1.25rem)] w-full max-w-[48.5rem] text-center text-[clamp(0.82rem,1.05vw,1.22rem)] font-normal leading-[clamp(1.32rem,1.92vw,1.82rem)] tracking-[0.036em] text-white/92 text-balance";

const heroButtonClass =
  "hero-gradient-border-button inline-flex h-[clamp(3rem,4.4vw,4rem)] w-[clamp(8.5rem,11.2vw,10.25rem)] items-center justify-center rounded-[100px] border-2 border-transparent bg-black px-[clamp(1.25rem,2.2vw,1.75rem)] text-[clamp(0.82rem,1vw,0.95rem)] font-medium leading-none tracking-[0.02em] text-white transition-colors duration-200 hover:text-white";


export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <Header />
      <main className="relative flex flex-1 items-start justify-center px-4">
        <section className="relative z-10 flex w-full max-w-[1280px] flex-col items-center px-[clamp(0.75rem,2.2vw,2rem)] pt-[clamp(5.8rem,15.5vh,11rem)] text-center">
          <h1 className={heroTitleClass}>
            THE BEST WEBSITE EVER
          </h1>
          <h3 className={heroSubtitleClass}>
            Scalable.
          </h3>
          <p className={heroDescriptionClass}>
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </p>
          <div className="mt-[clamp(1.3rem,3vw,2.2rem)] flex flex-col items-center gap-[clamp(0.5rem,1vw,0.7rem)] min-[480px]:flex-row">
            <button
              type="button"
              className={`${heroButtonClass} hero-gradient-border-button--active`}
            >
              Get Started
            </button>
            <button type="button" className={heroButtonClass}>
              Read more
            </button>
          </div>
        </section>


        <BackgroundSpheres />
      </main>
    </div>
  );
}
