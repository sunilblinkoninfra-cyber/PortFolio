import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FadeIn } from "../components/FadeIn";

const projects = [
  {
    num: "01",
    name: "Blockchain Forensic Intelligence Platform",
    role: "AI Transformation Consultant / System Architect",
    stack: "React, Node.js, Graph Databases, Blockchain APIs, D3.js, Cytoscape.js, Vercel, Render",
    description: "Designed and architected a blockchain forensic investigation platform focused on transaction tracing, wallet intelligence, and visual relationship mapping. The system combined graph-centric visualization with case management workflows to help investigators analyze suspicious crypto flows across wallets and entities.",
    highlights: [
      "Designed graph-based forensic investigation workflows.",
      "Built trace visualization architecture using React + D3.js/Cytoscape.js.",
      "Integrated temporal timelines, Sankey diagrams, and transaction relationship mapping.",
      "Optimized frontend rendering and layout alignment for dense blockchain datasets."
    ],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "02",
    name: "Multi-Agent AI Lead Generation System",
    role: "AI Systems Architect",
    stack: "Python, LLM Agents, VPS Infrastructure, Web Scraping, Verification APIs, Automation Pipelines",
    description: "Developed a multi-agent AI sales system composed of autonomous CEO, SDR, and Closer agents designed to identify, verify, qualify, and personalize outreach for high-quality B2B leads.",
    highlights: [
      "Architected autonomous multi-agent collaboration workflows.",
      "Designed lead scraping and enrichment pipelines optimized for low token consumption.",
      "Implemented verification-first logic for emails and LinkedIn profiles.",
      "Engineered prompt systems for role-specialized AI agents."
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "03",
    name: "AI Strategy Consulting Framework",
    role: "AI Strategy Consultant",
    stack: "Process Mapping, AI Workflow Design, Automation Architecture, Business Operations Analysis",
    description: "Built consulting frameworks focused on identifying operational bottlenecks and designing AI-enabled transformation systems for agencies and businesses.",
    highlights: [
      "Conducted workflow mapping across sales, operations, and lifecycle marketing.",
      "Designed scalable AI-assisted operating models.",
      "Created transformation blueprints for client acquisition and operational efficiency.",
      "Developed strategic AI implementation plans aligned with business KPIs."
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "04",
    name: "Marketing Automation Optimization",
    role: "Automation & Growth Systems Consultant",
    stack: "CRM Automation, Segmentation Workflows, Reporting Pipelines, AI Operations",
    description: "Created automation strategies for lifecycle marketing agencies to reduce manual reporting, segmentation, and operational bottlenecks.",
    highlights: [
      "Identified operational inefficiencies in lifecycle marketing workflows.",
      "Automated segmentation and reporting operations.",
      "Designed scalable client operations systems.",
      "Structured AI-enhanced campaign management workflows."
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "05",
    name: "3D Interactive Portfolio Website",
    role: "Creative Developer / AI-Assisted Frontend Designer",
    stack: "Three.js, React, Tailwind CSS, Framer Motion, AI-Assisted UI Generation",
    description: "Designed a highly interactive 3D portfolio website focused on immersive storytelling, animated user experiences, and professional branding.",
    highlights: [
      "Planned immersive 3D web experiences using modern frontend technologies.",
      "Integrated animated transitions and interactive visual storytelling.",
      "Structured AI-assisted frontend generation workflows.",
      "Optimized UI/UX for high-end professional presentation."
    ],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "06",
    name: "Frontend Optimization & Deployment",
    role: "Frontend Systems Engineer",
    stack: "React, Vercel, Render, Deployment Pipelines, Prompt Engineering",
    description: "Worked on deployment optimization, frontend debugging, and AI-assisted code refinement pipelines for production-grade applications.",
    highlights: [
      "Diagnosed and resolved frontend deployment issues across hosting platforms.",
      "Built optimized prompts for AI coding systems including VS Code integrations.",
      "Structured scalable frontend debugging methodologies.",
      "Enhanced UI consistency and layout alignment systems."
    ],
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "07",
    name: "Graph-Centric Intelligence Dashboard",
    role: "Data Visualization Architect",
    stack: "React, D3.js, Cytoscape.js, Timeline Systems, Dark UI Frameworks",
    description: "Designed advanced dashboard systems centered around graph intelligence, relationship visualization, and progressive disclosure patterns.",
    highlights: [
      "Created graph-centric visualization architecture.",
      "Integrated temporal timelines and flow analysis diagrams.",
      "Designed scalable dark-theme analytical interfaces.",
      "Improved information hierarchy and visual readability for large datasets."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "08",
    name: "Autonomous AI Research Engine",
    role: "AI Infrastructure Architect",
    stack: "Multi-Agent LLM Systems, RAG Pipelines, Vector Databases, Python, Task Orchestration",
    description: "Designed an autonomous AI research engine capable of collecting, synthesizing, validating, and structuring intelligence from large-scale datasets.",
    highlights: [
      "Built multi-agent reasoning pipelines for autonomous research workflows.",
      "Designed retrieval-augmented generation (RAG) architectures.",
      "Engineered token-efficient prompt orchestration strategies.",
      "Optimized agent collaboration for parallelized research execution."
    ],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "09",
    name: "Enterprise AI Operations Center",
    role: "AI Operations Architect",
    stack: "React, Real-Time Analytics, Workflow Automation, API Integrations, Event-Driven Systems",
    description: "Architected a centralized AI operations platform for monitoring, controlling, and optimizing enterprise AI workflows across automation layers.",
    highlights: [
      "Designed centralized orchestration interfaces for AI business operations.",
      "Integrated workflow monitoring and operational analytics dashboards.",
      "Built modular event-driven automation systems.",
      "Created progressive disclosure UI systems for enterprise usability."
    ],
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=1280"
  },
  {
    num: "10",
    name: "Advanced OSINT Investigation Platform",
    role: "Digital Intelligence Systems Architect",
    stack: "OSINT Frameworks, Graph Analysis, Entity Resolution, Automation Pipelines",
    description: "Developed an advanced digital investigation platform focused on open-source intelligence collection, entity correlation, and relationship mapping.",
    highlights: [
      "Built entity resolution and identity correlation workflows.",
      "Designed relationship intelligence and graph investigation systems.",
      "Automated OSINT data aggregation and enrichment pipelines.",
      "Integrated multi-source investigative intelligence processing."
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1280"
  }
];

export function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      ref={container}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 pb-20 sm:pb-24 md:pb-32"
      id="projects"
    >
      <div className="pt-20 sm:pt-24 md:pt-32 mb-16 sm:mb-20 md:mb-28 text-center">
        <FadeIn y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Project
          </h2>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.num}
            project={project}
            index={index}
            totalCards={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, totalCards, progress }: any) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div className="h-[90vh] sticky top-24 md:top-32 flex items-center justify-center">
      <motion.div 
        style={{ scale, top: `${index * 28}px` }}
        className="w-full h-full max-w-7xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/20 bg-[#0C0C0C] relative overflow-hidden shadow-2xl group"
      >
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt="" 
            className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <div className="max-w-4xl flex flex-col gap-8">
            <div className="flex items-center gap-6 sm:gap-8">
              <span className="font-black text-[#D7E2EA] leading-none opacity-20" style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}>
                {project.num}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[#BBCCD7] uppercase text-xs sm:text-sm tracking-[0.3em] font-semibold">{project.role}</span>
                <h3 className="text-[#D7E2EA] font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
                  {project.name}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-7 flex flex-col gap-6">
                <p className="text-[#D7E2EA]/90 text-lg sm:text-xl font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                   <p className="text-[#BBCCD7] text-xs uppercase tracking-widest font-bold mb-2">Core Stack</p>
                   <p className="text-[#D7E2EA] text-sm font-medium">{project.stack}</p>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-6">
                <h4 className="text-[#BBCCD7] font-bold uppercase tracking-widest text-xs">Principal Focus</h4>
                <ul className="flex flex-col gap-4">
                  {project.highlights.map((highlight: string, i: number) => (
                    <li key={i} className="flex gap-4 items-start text-[#D7E2EA]/80 group/item">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#BBCCD7] group-hover/item:scale-150 transition-transform duration-300" />
                      <span className="text-sm sm:text-base leading-tight font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

