import { motion } from "motion/react";
import { FadeIn } from "../components/FadeIn";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import React, { useState } from "react";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "AI Systems Architecture",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("sent");
        setFormData({ name: "", email: "", projectType: "AI Systems Architecture", message: "" });
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/sunil-kumar-374187176" },
    { name: "GitHub", icon: <Github size={24} />, url: "https://github.com/sunilblinkoninfra-cyber" },
  ];

  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative z-20" id="contact">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={40} className="mb-16 sm:mb-24 text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Let's Talk
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info & Socials */}
          <div className="flex flex-col gap-12">
            <FadeIn delay={0.1} x={-40}>
              <div className="flex flex-col gap-8">
                <h3 className="text-[#D7E2EA] font-medium uppercase tracking-widest text-lg opacity-50">Contact Details</h3>
                <div className="flex flex-col gap-6">
                  <a href="mailto:kumars92@outlook.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center group-hover:border-[#D7E2EA] transition-colors">
                      <Mail className="text-[#D7E2EA]/60 group-hover:text-[#D7E2EA]" size={20} />
                    </div>
                    <span className="text-[#D7E2EA] text-lg sm:text-xl font-light">kumars92@outlook.com</span>
                  </a>
                  <a href="tel:+919773643993" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center group-hover:border-[#D7E2EA] transition-colors">
                      <Phone className="text-[#D7E2EA]/60 group-hover:text-[#D7E2EA]" size={20} />
                    </div>
                    <span className="text-[#D7E2EA] text-lg sm:text-xl font-light">+91 97736 43993</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} x={-40}>
              <div className="flex flex-col gap-8">
                <h3 className="text-[#D7E2EA] font-medium uppercase tracking-widest text-lg opacity-50">Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA] hover:text-[#0C0C0C] text-[#D7E2EA] transition-all duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} x={-40} className="mt-auto">
              <div className="p-8 rounded-[40px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 flex flex-col gap-6">
                <h4 className="text-[#D7E2EA] font-bold uppercase tracking-wider">Ready to transform?</h4>
                <p className="text-[#D7E2EA]/60 font-light">
                  Skip the form and schedule a 30-min discovery call directly to discuss your AI transformation strategy.
                </p>
                <a 
                  href="https://calendly.com/kumars92/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-[#D7E2EA] text-[#0C0C0C] font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform"
                >
                  Schedule Call <ExternalLink size={20} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact Form */}
          <FadeIn delay={0.2} x={40}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 sm:p-12 rounded-[50px] border-2 border-[#D7E2EA]/10 bg-[#D7E2EA]/2 shadow-2xl">
              <div className="flex flex-col gap-2">
                <label className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest ml-4">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-2xl px-6 py-4 text-[#D7E2EA] outline-none focus:border-[#D7E2EA]/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest ml-4">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-2xl px-6 py-4 text-[#D7E2EA] outline-none focus:border-[#D7E2EA]/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest ml-4">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-2xl px-6 py-4 text-[#D7E2EA] outline-none focus:border-[#D7E2EA]/40 transition-colors appearance-none"
                >
                  <option className="bg-[#0C0C0C]">AI Systems Architecture</option>
                  <option className="bg-[#0C0C0C]">Blockchain Intelligence</option>
                  <option className="bg-[#0C0C0C]">Process Automation</option>
                  <option className="bg-[#0C0C0C]">Other Transformation</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest ml-4">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your business goals..."
                  className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-2xl px-6 py-4 text-[#D7E2EA] outline-none focus:border-[#D7E2EA]/40 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={formStatus === "sending" || formStatus === "sent"}
                className={`mt-4 w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  formStatus === "sent" 
                  ? "bg-green-500 text-white" 
                  : formStatus === "error"
                  ? "bg-red-500 text-white"
                  : "bg-white text-[#0C0C0C] hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {formStatus === "idle" && "Send Message"}
                {formStatus === "sending" && "Sending..."}
                {formStatus === "sent" && "Message Sent!"}
                {formStatus === "error" && "Error Sending"}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
