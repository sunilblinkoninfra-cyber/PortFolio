/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";

export default function App() {
  return (
    <main className="w-full bg-[#0C0C0C] font-sans selection:bg-[#BBCCD7] selection:text-[#0C0C0C] overflow-x-clip">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Simple Footer */}
      <footer className="w-full py-20 px-8 text-center bg-[#0C0C0C] border-t border-[#D7E2EA]/10">
        <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs">
          Built with &hearts; by Sunil &bull; &copy; 2026
        </p>
      </footer>
    </main>
  );
}

