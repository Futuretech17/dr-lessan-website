import React from "react";
import { MapPin, Phone, Building2, ExternalLink, Clock, Calendar } from "lucide-react";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Locations() {
  return (
    <div className="flex flex-col w-full bg-background">
      <SEO 
        title="Where He Practices | Dr. Joel Lessan"
        description="Find Dr. Joel Lessan at Gertrude's Children's Hospital in Muthaiga and Kenyatta National Hospital in Nairobi."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">Practice Locations</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Conveniently located in Nairobi's premier medical facilities to provide top-tier surgical care for your child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Gertrude's */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-lg border border-border overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-primary/10 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center z-10 text-primary">
                  <Building2 size={40} />
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6 w-fit">
                  Private Practice
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Gertrude's Children's Hospital</h2>
                
                <div className="space-y-5 mb-10 flex-1">
                  <div className="flex gap-4 items-start">
                    <MapPin size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground text-lg mb-1">Muthaiga, Nairobi</strong>
                      <p className="text-muted-foreground">Premier dedicated paediatric hospital facility.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground text-lg mb-1">+254XXXXXXXXX</strong>
                      <p className="text-muted-foreground">Call for booking inquiries</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                  <p className="text-foreground font-medium mb-2">What to expect:</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">A calm, child-focused environment with dedicated paediatric nursing staff. Excellent amenities for waiting parents.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a href="https://wa.me/254XXXXXXXXX" target="_blank" rel="noreferrer">
                    <Button className="w-full h-14 rounded-xl text-base">Book Here</Button>
                  </a>
                  <Button variant="outline" className="w-full h-14 rounded-xl text-base" disabled>
                    <ExternalLink size={18} className="mr-2" /> Maps
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Kenyatta */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] shadow-lg border border-border overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-secondary/30 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-secondary-foreground)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center z-10 text-secondary-foreground">
                  <Building2 size={40} />
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide uppercase mb-6 w-fit">
                  Public & Teaching
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Kenyatta National Hospital</h2>
                
                <div className="space-y-5 mb-10 flex-1">
                  <div className="flex gap-4 items-start">
                    <MapPin size={24} className="text-secondary-foreground shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground text-lg mb-1">Hospital Road, Nairobi</strong>
                      <p className="text-muted-foreground">National referral and teaching hospital.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone size={24} className="text-secondary-foreground shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground text-lg mb-1">+254XXXXXXXXX</strong>
                      <p className="text-muted-foreground">Main hospital switchboard</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/20 rounded-2xl p-6 mb-8">
                  <p className="text-foreground font-medium mb-2">What to expect:</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">A busy, high-capacity tertiary facility where Dr. Lessan handles complex cases and trains future surgeons.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a href="tel:+254XXXXXXXXX">
                    <Button variant="secondary" className="w-full h-14 rounded-xl text-base">Contact Hospital</Button>
                  </a>
                  <Button variant="outline" className="w-full h-14 rounded-xl text-base" disabled>
                    <ExternalLink size={18} className="mr-2" /> Maps
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How to Book Process */}
      <section className="py-24 bg-[#fafafa] border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">How to Book an Appointment</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0"></div>
            
            <div className="bg-white p-8 rounded-3xl border shadow-sm relative z-10 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/30">1</div>
              <h3 className="text-xl font-bold mb-3">Message Admin</h3>
              <p className="text-muted-foreground">Send a WhatsApp message with your child's concern and preferred clinic location.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border shadow-sm relative z-10 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/30">2</div>
              <h3 className="text-xl font-bold mb-3">Confirm Time</h3>
              <p className="text-muted-foreground">Our team will reply with available slots and insurance details to confirm your booking.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border shadow-sm relative z-10 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/30">3</div>
              <h3 className="text-xl font-bold mb-3">Arrive at Clinic</h3>
              <p className="text-muted-foreground">Come to the clinic 15 minutes early to complete any registration paperwork.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
