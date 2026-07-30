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
import { MapPin, PenTool, Layers, Droplets } from 'lucide-react';

export default function ArtificialLawns() {
  const faqs = [
    {
      question: "How realistic does artificial lawn look?",
      answer: "Modern artificial turf is remarkably realistic, with varied blade lengths, natural colour blends and a soft feel underfoot. We use quality turf that keeps its looks year-round, even in Cape Town's summer heat and winter rain."
    },
    {
      question: "How much maintenance does artificial lawn need?",
      answer: "Very little — no mowing, watering, or fertilising. An occasional brush to lift the pile and a rinse to clear dust or pet mess is all it takes to keep it looking freshly laid."
    },
    {
      question: "Is artificial lawn suitable for pets and children?",
      answer: "Yes. Quality artificial turf is non-toxic, hard-wearing and drains freely, making it ideal for pets and play areas. It also eliminates muddy paws and worn patches."
    },
    {
      question: "How is artificial lawn installed?",
      answer: "We excavate and prepare a compacted, free-draining base, then lay, join and pin the turf professionally before dressing it with silica sand for stability. Proper base preparation is what separates a lawn that lasts from one that wrinkles and puddles."
    },
    {
      question: "How long does artificial lawn last?",
      answer: "A professionally installed quality turf typically lasts 10-15 years or more. We'll advise on the right product for your traffic levels and sun exposure."
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
            { label: 'Artificial Lawns' }
          ]} />
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Artificial Lawns
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Lush, green, water-wise lawns all year round — professionally installed artificial turf with no mowing and no watering.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Why Choose Hartscapes for Artificial Lawns</h2>
              <p>
                In water-conscious Cape Town, artificial lawn gives you a <strong>perfect green lawn without the water bill</strong>. We prepare a proper free-draining base and install <strong>quality, realistic turf</strong> that stands up to kids, pets and entertaining.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Site Preparation', text: 'Excavation and a compacted, free-draining base — the foundation of a lawn that lasts.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Design & Shaping', text: 'Turf cut and shaped around beds, pavers and features for a seamless finish.' },
                  { icon: <Layers size={20} className="text-primary" />, title: 'Quality Turf', text: 'Realistic, UV-stable turf professionally joined, pinned and sand-dressed.' },
                  { icon: <Droplets size={20} className="text-primary" />, title: 'Water-Wise', text: 'No watering, no mowing — green all year with almost no maintenance.' },
                ]}
              />

            </div>

            <div>
              <ServicesGallery folder="Artificial Lawns" />
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
