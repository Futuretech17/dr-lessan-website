import React from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import { Building2, MessageCircle, HeartHandshake, ShieldCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-background">
      <SEO 
        title="About Dr. Joel Lessan | Consultant Paediatric Surgeon"
        description="Learn more about Dr. Joel Lessan's professional background, teaching roles, and commitment to compassionate paediatric surgical care in Nairobi."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">Dr. Joel Lessan</h1>
            <p className="text-xl md:text-2xl text-primary font-medium">Consultant Paediatric Surgeon, Nairobi</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative aspect-[3/4] rounded-[2.5rem] overflow-hidden sticky top-32 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#0f4c4c]"></div>
              <div className="absolute inset-0 opacity-30">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 50 Q 100 0 200 50 T 400 50" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
                  <path d="M 0 100 Q 100 50 200 100 T 400 100" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
                  <path d="M 0 150 Q 100 100 200 150 T 400 150" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
                  <path d="M 0 200 Q 100 150 200 200 T 400 200" stroke="white" strokeWidth="1" fill="none" opacity="0.1" />
                </svg>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-2xl text-foreground font-serif leading-relaxed font-medium mb-8">
                  Dr. Joel Lessan is a dedicated Consultant Paediatric Surgeon based in Nairobi, Kenya. With a focus on providing compassionate, high-quality surgical care for infants, children, and adolescents, he understands the immense trust parents place in him.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His practice is built on a foundation of clinical excellence and clear communication. Surgery can be a frightening prospect for any family, and Dr. Lessan prioritizes ensuring that parents are fully informed and comfortable with every step of their child's treatment plan.
                </p>
              </div>

              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Hospital Affiliations</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <strong className="text-lg text-foreground block mb-1">Gertrude's Children's Hospital</strong>
                      <p className="text-muted-foreground">Private practice providing specialized paediatric surgical interventions.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <strong className="text-lg text-foreground block mb-1">Kenyatta National Hospital</strong>
                      <p className="text-muted-foreground">Serving as a teaching consultant and providing critical public healthcare services.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Community Focus</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond his clinical practice, Dr. Lessan is deeply committed to improving paediatric surgical access across Kenya. He participates in medical outreach programs, ensuring that children from underserved communities can receive life-changing surgical interventions.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Families Trust Grid */}
      <section className="py-24 bg-[#fafafa] border-y">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Why Families Trust Dr. Lessan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Clear Communication</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Taking the time to explain diagnoses and procedures without medical jargon, ensuring parents feel fully informed and empowered to make decisions.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Child-Centric Approach</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Creating a safe, warm environment that minimizes anxiety for the child, treating them as unique individuals with empathy and respect.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Expertise & Safety</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Expertly managing both common conditions and complex congenital abnormalities with precision, utilizing modern, safe surgical techniques.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="w-20 h-20 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
            <GraduationCap size={36} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Teaching & Training</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At Kenyatta National Hospital, Dr. Lessan serves as a teaching consultant, passing on vital surgical skills and clinical knowledge to resident doctors. His dedication to medical education plays a crucial role in expanding Kenya's future capacity for specialized paediatric care.
          </p>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-[#0d3d3d] text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">Ready to schedule a consultation?</h2>
          <Link href="/book">
            <Button size="lg" className="rounded-full text-lg h-16 px-12 bg-white text-[#0d3d3d] hover:bg-gray-100 shadow-xl">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
