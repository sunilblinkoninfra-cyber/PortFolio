import { FadeIn } from "../components/FadeIn";

const services = [
  {
    num: "01",
    name: "GenAI & AI Systems",
    desc: "Implementing advanced LLMs, RAG pipelines, and agentic workflows for multi-step reasoning, planning, and high-performance task execution.",
  },
  {
    num: "02",
    name: "AI Engineering",
    desc: "Architecting distributed systems and robust API designs with scalable AI pipelines to handle complex enterprise-grade data operations.",
  },
  {
    num: "03",
    name: "MLOps & LLMOps",
    desc: "Streamlining model deployment, real-time monitoring, and evaluation pipelines using industry-standard CI/CD practices for machine learning.",
  },
  {
    num: "04",
    name: "Cloud & Data",
    desc: "Expertise in AWS, Azure, and GCP, alongside Kafka, Redis, and SQL to build high-availability platforms for AI-driven transformation.",
  },
  {
    num: "05",
    name: "Digital Strategy",
    desc: "Consulting on AI adoption roadmaps, stakeholder management, and bridging business requirements with technical AI excellence.",
  },
];

export function ServicesSection() {
  return (
    <section 
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col">
          {services.map((service, i) => (
            <FadeIn 
              key={service.num} 
              delay={i * 0.1} 
              y={20}
              className={`flex flex-col md:flex-row items-center md:items-start py-8 sm:py-10 md:py-12 gap-6 md:gap-10 ${
                i !== 0 ? "border-t border-[#0C0C0C]/15" : ""
              }`}
            >
              <div 
                className="font-black text-[#0C0C0C] leading-none md:w-1/3"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </div>
              <div className="flex flex-col gap-3 md:w-2/3 text-center md:text-left">
                <h3 
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p 
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 mx-auto md:mx-0"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
