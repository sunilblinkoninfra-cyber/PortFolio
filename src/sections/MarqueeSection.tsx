import { useState, useEffect, useRef } from "react";

const row1Images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row2Images = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top + window.pageYOffset;
      const offset = (window.scrollY - top + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderImages = (images: string[]) => {
    // Triple the images for seamless look
    return [...images, ...images, ...images].map((src, i) => (
      <div
        key={`${src}-${i}`}
        className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-white/5"
      >
        <img
          src={src}
          alt="Portfolio Item"
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      id="marquee"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves Right */}
        <div
          className="flex gap-3 select-none pointer-events-none"
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        >
          {renderImages(row1Images)}
        </div>

        {/* Row 2 - Moves Left */}
        <div
          className="flex gap-3 select-none pointer-events-none"
          style={{
            transform: `translateX(${- (scrollOffset - 200)}px)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        >
          {renderImages(row2Images)}
        </div>
      </div>
    </section>
  );
}
