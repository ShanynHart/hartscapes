import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

interface TransformationImage {
  id: number;
  src: string;
  alt: string;
}

const shuffleArray = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);

export default function TransformationsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const beforeAfterImages = useState<TransformationImage[]>(() =>
    shuffleArray(
      Array.from({ length: 29 }, (_, index) => ({
        id: index + 1,
        src: `/gallery/BeforeAfter/${index + 1}.jpg`,
        alt: `Transformation ${index + 1}`,
      }))
    )
  )[0];

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    updateCurrent();
    api.on('select', updateCurrent);

    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4">
              <Sparkles className="h-4 w-4" />
              Before & After
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.05] mb-6">
              Real transformations,
              <span className="text-primary italic font-serif"> beautifully told</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-8">
              Browse a shuffled selection of our before and after work across Cape Town. Each slide shows a different project stage, so the gallery feels fresh every time you visit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary text-white hover:bg-primary/90"
                onClick={() => navigate('/projects')}
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
                onClick={() => navigate('/about')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/60 bg-card">
              <Carousel
                setApi={setApi}
                opts={{ loop: true, align: 'start' }}
                plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
                className="w-full"
              >
                <CarouselContent>
                  {beforeAfterImages.map((image) => (
                    <CarouselItem key={image.id} className="basis-full">
                      <div className="relative aspect-[9/16] max-h-[78vh] mx-auto">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading={image.id === 1 ? 'eager' : 'lazy'}
                          decoding="async"
                          fetchPriority={image.id === 1 ? 'high' : 'auto'}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="absolute left-4 top-4 z-10 rounded-full bg-black/60 backdrop-blur px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white">
                {current.toString().padStart(2, '0')} / {beforeAfterImages.length.toString().padStart(2, '0')}
              </div>

              <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full bg-white/90 backdrop-blur shadow-lg hover:bg-white"
                  onClick={() => api?.scrollPrev()}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full bg-white/90 backdrop-blur shadow-lg hover:bg-white"
                  onClick={() => api?.scrollNext()}
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
