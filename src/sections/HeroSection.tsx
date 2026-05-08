import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/Buttons";

export function HeroSection() {
  const navLinks = ["About", "Projects", "Contact"];

  return (
    <section className="h-screen w-full flex flex-col relative overflow-x-clip bg-[#0C0C0C]" id="hero">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-6 md:py-8 glass-nav">
        <FadeIn y={-20} className="w-full flex justify-between items-center max-w-[1440px] mx-auto">
          <div className="text-2xl font-black uppercase tracking-tighter text-[#D7E2EA]">
            Sunil
          </div>
          <div className="flex gap-6 md:gap-12">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </FadeIn>
      </nav>

      {/* Hero Heading Container */}
      <div className="flex-1 flex flex-col justify-center relative z-20 pt-20">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Hi, i&apos;m Sunil
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Portrait - Magnet Component */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <div className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
              <img
                src="https://lh3.googleusercontent.com/d/1E277AcEHvrhZjpPdhjZC7KJK6aVzsqTv"
                alt="Sunil Portrait"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-30">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            an ai engineering manager driven by crafting striking and unforgettable solutions
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
