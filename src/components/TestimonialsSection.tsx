import { motion } from 'framer-motion';
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from '@/data/testimonials';

// Reviews can only be written on Google and Facebook themselves, so these
// links open each platform's own review form for Hartscapes.
const reviewLinks = [
  {
    label: 'Review us on Google',
    href: 'https://search.google.com/local/writereview?placeid=ChIJYf2ocjPr6gQRQfiepdAaO0M',
  },
  {
    label: 'Review us on Facebook',
    href: 'https://www.facebook.com/HartscapesLandscaping/reviews',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-3xl mx-auto mb-12" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Hear from our satisfied customers about their Hartscapes experience
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Star Rating */}
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={starIndex} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-6">
                        "{t.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-primary text-sm">
                          {t.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="font-semibold text-sm">{t.author}</p>
                            <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium">✓</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{t.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Integrated Navigation Arrows */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        {/* Leave a review */}
        <div className="text-center max-w-2xl mx-auto mt-14">
          <h3 className="text-xl font-semibold mb-2 font-display">Worked with us? We'd love your review</h3>
          <p className="text-sm text-muted-foreground mb-6">
            It takes two minutes and helps other Cape Town homeowners find us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {reviewLinks.map((link) => (
              <Button key={link.href} asChild variant="outline">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Star className="h-4 w-4" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
