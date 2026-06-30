import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, Baby, Heart, Droplets, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Conditions() {
  const conditions = [
    { 
      title: "Hernias in Children", 
      desc: "A small bulge caused by tissue pushing through a weak spot, usually in the groin or belly button. Easily treatable with a short, highly safe procedure.",
      icon: Activity 
    },
    { 
      title: "Appendicitis", 
      desc: "Sudden stomach pain that often starts near the belly button and moves lower right. We provide prompt surgical care to prevent complications and ensure a swift recovery.",
      icon: AlertTriangle 
    },
    { 
      title: "Undescended Testicles", 
      desc: "A common condition in baby boys where one or both testicles haven't moved into the scrotum. Corrected with a straightforward procedure to protect future health and development.",
      icon: Baby 
    },
    { 
      title: "Congenital Birth Conditions", 
      desc: "Structural differences present from birth, such as bowel obstructions or abdominal wall defects, requiring specialist surgical expertise and comprehensive long-term support.",
      icon: Heart 
    },
    { 
      title: "Paediatric Urology", 
      desc: "Surgical management of issues affecting the kidneys, bladder, or urinary tract in children, handled with the utmost sensitivity and minimally invasive techniques when possible.",
      icon: Droplets 
    },
    { 
      title: "Emergency Surgical Conditions", 
      desc: "Urgent surgical care for sudden, severe abdominal issues, blockages, or trauma, prioritizing rapid response, stabilization, and patient safety above all.",
      icon: AlertCircle 
    },
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      <SEO 
        title="Conditions Treated | Dr. Joel Lessan"
        description="Learn about the paediatric conditions treated by Dr. Joel Lessan, including hernias, appendicitis, congenital birth conditions, and more."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">Conditions Treated</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We provide expert, compassionate surgical care for a wide range of pediatric conditions, using advanced techniques to ensure the best outcomes and quickest recovery for your child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {conditions.map((condition, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-white border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] overflow-hidden group border-l-4 border-l-transparent hover:border-l-primary relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8 md:p-10 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <condition.icon size={28} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{condition.title}</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">{condition.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Care CTA */}
      <section className="py-20 bg-[#0d3d3d] text-center border-t-8 border-[#25D366]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="w-20 h-20 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-8">
            <AlertCircle size={40} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">When to Seek Urgent Care</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-10">
            If your child has sudden, severe abdominal pain, persistent vomiting, or distress — seek medical care immediately.
          </p>
          <a href="https://wa.me/254XXXXXXXXX" target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full text-lg h-16 px-10 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-green-900/20">
              <FaWhatsapp size={24} className="mr-3" /> Book Urgent Consultation
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
}
