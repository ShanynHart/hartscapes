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
import { MapPin, PenTool, Hammer, Shield } from 'lucide-react';

export default function Fencing() {
  const faqs = [
    {
      question: "What types of fencing do you offer?",
      answer: "We build a wide range of timber fencing including solid privacy screens, picket fences, latte (lath) fencing, horizontal slatted screens, and matching garden gates. We'll recommend the best style for your property, whether the priority is privacy, security, or aesthetics."
    },
    {
      question: "What timber do you use for fencing?",
      answer: "We use treated, locally sourced timber suited to Cape Town's coastal conditions, including CCA-treated pine and natural latte poles. All our fencing is built to withstand wind, rain, and sun with minimal maintenance."
    },
    {
      question: "Can you build custom gates to match my fence?",
      answer: "Yes! We build matching pedestrian gates and driveway gates, including framed and braced timber gates with quality hinges and latches, and can clad automated sliding gates in timber to match your fence."
    },
    {
      question: "How long does a fence installation take?",
      answer: "Most residential fencing projects are completed within a few days to a week, depending on the length and terrain. We'll give you a clear timeline with your quote and keep you updated throughout."
    },
    {
      question: "Can you install fencing on slopes or uneven ground?",
      answer: "Absolutely. We regularly build fencing on sloped and uneven terrain, stepping or raking the panels to follow the ground line while keeping the top line neat and secure."
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
            { label: 'Timber Fencing & Gates' }
          ]} />
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Timber Fencing & Gates
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Beautiful, durable timber fencing and custom gates for privacy, security, and style — built to last in Cape Town conditions.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Why Choose Hartscapes for Fencing</h2>
              <p>
                From solid privacy fencing and picket fences to natural latte screens, we build fencing using <strong>treated, locally appropriate timber</strong> and quality fixings. Every fence is set out properly, built plumb and level, and finished with <strong>matching custom gates</strong> where needed.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Site Assessment', text: 'We assess boundaries, levels and wind exposure to plan the right fence for your property.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Style & Design', text: 'Privacy screens, picket, latte or slatted styles — matched to your home and garden.' },
                  { icon: <Hammer size={20} className="text-primary" />, title: 'Built to Last', text: 'Treated timber, solid posts and quality fixings for fences that stand up to the weather.' },
                  { icon: <Shield size={20} className="text-primary" />, title: 'Gates & Security', text: 'Custom pedestrian and driveway gates with quality hinges, latches and locks.' },
                ]}
              />

            </div>

            <div>
              <ServicesGallery folder="Fencing" />
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
