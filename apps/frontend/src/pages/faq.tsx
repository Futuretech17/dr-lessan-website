import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    { q: "Do I need a referral to see Dr. Lessan?", a: "While referrals are welcome and helpful, they are not always strictly necessary for a private consultation. However, please check with your insurance provider as they might require one for coverage." },
    { q: "How should I prepare my child for a consultation?", a: "Explain to them gently that they are going to see a doctor who will help them feel better. Use simple words. We strive to keep the clinic environment friendly, calm, and completely non-intimidating for young patients." },
    { q: "What happens on the day of surgery?", a: "You will be provided with clear, step-by-step written instructions prior to the day. We ensure parents can stay with their child as much as possible before the procedure begins and are present immediately when they wake up." },
    { q: "Is pediatric anesthesia safe?", a: "Yes. We work exclusively with specialized pediatric anesthetists who use techniques specifically designed and proven to be extremely safe for infants, toddlers, and older children." },
    { q: "What are your consultation fees?", a: "Please contact our clinic administration via WhatsApp or phone for the most up-to-date information on consultation fees and the list of insurance providers we currently accept." },
    { q: "How quickly can we get a surgery date?", a: "Emergency and urgent procedures are handled immediately. Elective surgeries are scheduled promptly, prioritizing the clinical urgency of your child's condition to ensure they are treated without unnecessary delay." }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEO 
        title="FAQ | Dr. Joel Lessan Paediatric Surgeon"
        description="Frequently asked questions about pediatric surgery, consultations, and care with Dr. Joel Lessan."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-16 md:pt-32 md:pb-20 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Clear answers to help you prepare for your child's visit and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem value={`item-${i}`} className="bg-white px-6 md:px-8 py-3 rounded-[2rem] border shadow-sm hover:border-primary/30 transition-colors border-l-4 border-l-primary">
                  <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline hover:text-primary transition-colors py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6 pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0d3d3d] text-center mt-auto">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Still have questions?</h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Our admin team is happy to help clarify anything you need before booking an appointment.
          </p>
          <a href="https://wa.me/254XXXXXXXXX" target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full text-lg h-16 px-10 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-green-900/20">
              <FaWhatsapp size={24} className="mr-3" /> Chat with Admin
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
}
