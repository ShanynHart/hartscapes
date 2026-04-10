import { Award, Shield, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SocialProof() {
  const badges = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "25+ Years",
      description: "Industry Experience"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Owner-Run",
      description: "Led by Dee Hart"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cape Town Based",
      description: "Southern Suburbs & Deep South"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Free Consultation",
      description: "No Obligation Quote"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border/70 bg-white/70 backdrop-blur-sm">
              <div className="flex justify-center text-primary mb-3">
                {badge.icon}
              </div>
              <div className="font-bold mb-1">{badge.title}</div>
              <div className="text-sm text-muted-foreground">{badge.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
