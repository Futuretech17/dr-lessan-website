import React from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, CheckCircle2, ShieldPlus } from "lucide-react";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";

export default function Book() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEO 
        title="Book Appointment | Dr. Joel Lessan"
        description="Book a pediatric surgery consultation with Dr. Joel Lessan in Nairobi via WhatsApp or phone call."
      />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">Book a Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Reach out directly to our scheduling team. We prioritize clarity and prompt responses for every family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Booking Interface */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-primary/5 border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-primary/50 to-primary"></div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">How it works</h2>
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start relative">
                <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-muted -z-10"></div>
                
                <div className="flex flex-row md:flex-col items-center gap-4 bg-white z-10 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">1</div>
                  <div className="md:text-center">
                    <p className="font-bold text-foreground">Message Us</p>
                    <p className="text-sm text-muted-foreground hidden md:block w-32">Via WhatsApp or Call</p>
                  </div>
                </div>
                
                <div className="flex flex-row md:flex-col items-center gap-4 bg-white z-10 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">2</div>
                  <div className="md:text-center">
                    <p className="font-bold text-foreground">We Confirm</p>
                    <p className="text-sm text-muted-foreground hidden md:block w-32">Time & location</p>
                  </div>
                </div>
                
                <div className="flex flex-row md:flex-col items-center gap-4 bg-white z-10 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">3</div>
                  <div className="md:text-center">
                    <p className="font-bold text-foreground">Visit Clinic</p>
                    <p className="text-sm text-muted-foreground hidden md:block w-32">Meet Dr. Lessan</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-6 mb-10 border border-primary/10 flex gap-4 items-start">
              <CheckCircle2 className="text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">What to include in your message:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please mention your child's name, their primary concern or condition, and your preferred clinic location if you have one.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <a href="https://wa.me/254XXXXXXXXX" target="_blank" rel="noreferrer" className="block w-full">
                <Button className="w-full h-20 text-xl rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-4 shadow-lg shadow-green-900/10 transition-transform hover:-translate-y-1">
                  <FaWhatsapp size={32} /> Message on WhatsApp
                </Button>
              </a>
              
              <div className="relative py-2 flex items-center">
                <div className="flex-grow border-t border-border"></div>
                <span className="flex-shrink-0 mx-6 text-muted-foreground text-sm font-bold uppercase tracking-widest">or</span>
                <div className="flex-grow border-t border-border"></div>
              </div>
              
              <a href="tel:+254XXXXXXXXX" className="block w-full">
                <Button variant="outline" className="w-full h-20 text-xl rounded-2xl flex items-center justify-center gap-4 border-2 border-border hover:bg-muted/50 transition-colors">
                  <Phone size={28} /> Call the Clinic
                </Button>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <ShieldPlus size={18} className="text-primary" />
              <p>We work with major Kenyan insurance providers — contact admin for details.</p>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
