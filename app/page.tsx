import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Tools from "@/components/Tools";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
        <ScrollReveal>
          <Intro />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Certifications />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Tools />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Languages />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>
      <ScrollReveal delay={0.1}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

