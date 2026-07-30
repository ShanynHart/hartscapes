import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceFAQ from '@/components/ServiceFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import { MapPin, PenTool, Hammer, Flame } from 'lucide-react';

export default function PizzaOvens() {
  const faqs = [
    {
      question: "What types of pizza ovens do you build?",
      answer: "We build and install wood-fired pizza ovens on custom masonry bases, from classic dome ovens to pre-cast ovens finished to match your outdoor area. Each is set on a solid plastered stand with storage space for wood underneath."
    },
    {
      question: "Where is the best place to put a pizza oven?",
      answer: "Ideally close to your entertainment area but with safe clearance from structures and overhanging branches, with the chimney able to draw freely. We'll help you choose the best spot during the site visit."
    },
    {
      question: "Can a pizza oven be combined with a braai area?",
      answer: "Absolutely — pizza ovens pair beautifully with built-in braais and firepits. We can design a complete outdoor cooking and entertainment area as one project."
    },
    {
      question: "How long does a pizza oven installation take?",
      answer: "A typical base-and-oven installation takes around a week including plastering and finishing, depending on the design. Curing the oven before first use takes a further few days of small fires."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Pizza Ovens' }
          ]} />
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Pizza Ovens
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Wood-fired pizza ovens on custom-built masonry bases — the heart of your outdoor entertainment area.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Why Choose Hartscapes for Pizza Ovens</h2>
              <p>
                Nothing brings people together like a wood-fired oven. We build <strong>solid masonry bases with built-in wood storage</strong>, install and finish the oven, and integrate it beautifully with your <strong>braai, patio, or garden</strong>.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Placement & Planning', text: 'The right position for safety, chimney draw and easy entertaining.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Custom Design', text: 'Bases and finishes designed to match your home and outdoor area.' },
                  { icon: <Hammer size={20} className="text-primary" />, title: 'Solid Construction', text: 'Reinforced masonry stands with plastered finishes and wood storage.' },
                  { icon: <Flame size={20} className="text-primary" />, title: 'Ready to Fire', text: 'Properly flued, cured and ready for your first pizza night.' },
                ]}
              />

            </div>

            <div>
              <ServicesGallery folder="Pizza Ovens" />
            </div>

            <ServiceFAQ faqs={faqs} />
          </div>

          <ServiceCTA label="Schedule a Consultation" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
