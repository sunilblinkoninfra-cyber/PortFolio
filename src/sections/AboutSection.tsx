import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/Buttons";

export function AboutSection() {
  const bio = "AI Transformation Consultant specializing in AI systems architecture, blockchain intelligence platforms, graph-based visualization systems, automation workflows, and high-performance frontend experiences. Focused on building scalable operational systems that combine strategic AI implementation with modern product engineering.";

  return (
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden" id="about">
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-20 text-center w-full max-w-4xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About me
          </h2>
        </FadeIn>

        <AnimatedText
           text={bio}
           className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px]"
           style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        <FadeIn delay={0.1} y={20} className="mt-8 sm:mt-12 md:mt-16">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
