import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Shield, 
  Clock, 
  Heart, 
  MapPin, 
  Building2, 
  Stethoscope, 
  Check, 
  Activity, 
  AlertTriangle, 
  Baby, 
  Droplets, 
  AlertCircle, 
  GraduationCap,
  ArrowRight,
  Phone
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalDoctor",
    "name": "Dr. Joel Lessan",
    "medicalSpecialty": "Paediatric Surgery",
    "location": [
      {
        "@type": "Place",
        "name": "Gertrude's Children's Hospital",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nairobi",
          "addressRegion": "Nairobi",
          "addressCountry": "KE"
        }
      },
      {
        "@type": "Place",
        "name": "Kenyatta National Hospital",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nairobi",
          "addressRegion": "Nairobi",
          "addressCountry": "KE"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Dr. Joel Lessan | Consultant Paediatric Surgeon in Nairobi"
        description="Compassionate surgical care for children by Dr. Joel Lessan, Consultant Paediatric Surgeon based in Nairobi, Kenya. Focus on safety, clarity, and family support."
        schema={schema}
      />
      
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-background pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Consultant Paediatric Surgeon · Nairobi, Kenya
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Trusted Paediatric <br className="hidden md:block" />
                <span className="text-primary">Surgical Care</span> <br className="hidden md:block" />
                for Children & Families
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Compassionate specialist care for newborns, infants, children and adolescents, with a focus on safety, clarity and family support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/book" className="w-full sm:w-auto">
                  <Button size="lg" className="rounded-full text-base h-14 px-8 w-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Book Consultation
                  </Button>
                </Link>
                <a href="https://wa.me/254XXXXXXXXX" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 w-full border-primary/20 hover:bg-primary/5">
                    WhatsApp Admin
                  </Button>
                </a>
                <Link href="/locations" className="w-full sm:w-auto">
                  <Button size="lg" variant="ghost" className="rounded-full text-base h-14 px-8 w-full hover:bg-muted">
                    View Locations
                  </Button>
                </Link>
              </div>
              
              <div className="pt-8 border-t border-border/50">
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Consultant Paediatric Surgeon",
                    "Kenyatta National Hospital",
                    "Gertrude's Children's Hospital",
                    "Community Outreach"
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center text-sm font-medium text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative h-full min-h-[500px] w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/80 rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-[100px] rounded-full"></div>
                
                <img 
                  src="/clinic.jpg" 
                  alt="Dr. Lessan Clinic" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-12 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 rotate-[-2deg]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Specialist Paediatric</p>
                  <p className="text-sm text-muted-foreground">Surgeon</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 -right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 rotate-[3deg]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Nairobi, Kenya</p>
                  <p className="text-sm text-muted-foreground">Location</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-8 left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 rotate-[-1deg]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Private & Public</p>
                  <p className="text-sm text-muted-foreground">Practice</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust Bar */}
      <section className="bg-[#0f4c4c] py-16 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-sm font-bold text-white/70 uppercase tracking-[0.2em] mb-8">Practicing at Nairobi's leading medical institutions</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white opacity-90 font-medium">Kenyatta National Hospital</h3>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white opacity-90 font-medium">Gertrude's Children's Hospital</h3>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Care that puts your child first</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Warm & Child-Friendly", desc: "A gentle approach minimizing clinical anxiety, ensuring children feel safe and parents feel reassured." },
              { icon: Shield, title: "Expert Surgical Care", desc: "Specialized expertise in both common procedures and complex congenital paediatric conditions." },
              { icon: Clock, title: "Unhurried Consultations", desc: "Time taken to answer every single question clearly before any surgical decision is made." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-white rounded-3xl p-10 h-full border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/20 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                      <feature.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#0f4c4c]"></div>
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 0 C 50 100 150 100 200 0" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                  <path d="M 0 50 C 50 150 150 150 200 50" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
                  <path d="M 0 100 C 50 200 150 200 200 100" stroke="white" strokeWidth="2" fill="none" opacity="0.1" />
                </svg>
              </div>
              <img 
                src="/clinic.jpg" 
                alt="Medical setting" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                About Dr. Joel Lessan
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                A surgeon who takes the time to understand your child
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  As a Consultant Paediatric Surgeon, Dr. Lessan brings specialized expertise and a deeply compassionate approach to treating children. He understands that for a parent, there is no such thing as a "minor" surgery when it involves their child.
                </p>
                <p>
                  He divides his time between private practice at Gertrude's Children's Hospital and serving as a specialist and educator at Kenyatta National Hospital, ensuring high standards of care across both sectors.
                </p>
              </div>
              <Link href="/about" className="inline-block pt-4">
                <Button size="lg" className="rounded-full text-base h-14 px-8">
                  Learn More About Dr. Lessan
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Conditions Treated Preview */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Conditions We Treat</h2>
              <p className="text-xl text-muted-foreground">Expert diagnosis and surgical management for a wide range of paediatric conditions.</p>
            </div>
            <Link href="/conditions">
              <Button variant="outline" className="rounded-full bg-white hidden md:flex">
                See All Conditions <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "Hernias", desc: "Straightforward repair for inguinal and umbilical hernias." },
              { icon: AlertTriangle, title: "Appendicitis", desc: "Urgent surgical care for sudden, severe abdominal pain." },
              { icon: Baby, title: "Undescended Testicles", desc: "Expert correction to protect future development and health." },
              { icon: Heart, title: "Congenital Conditions", desc: "Specialist care for structural differences present from birth." },
              { icon: Droplets, title: "Paediatric Urology", desc: "Sensitive management of kidney, bladder, and tract issues." },
              { icon: AlertCircle, title: "Emergency Surgical Care", desc: "Rapid response for acute abdominal or trauma conditions." },
            ].map((condition, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 group hover:border-primary/30 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      <condition.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{condition.title}</h3>
                    <p className="text-muted-foreground">{condition.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <Link href="/conditions" className="md:hidden mt-10 inline-block w-full">
            <Button variant="outline" className="rounded-full bg-white w-full h-14 text-base">
              See All Conditions <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 6: Community Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                Community Outreach
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Committed to children beyond the clinic
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Dr. Lessan believes that high-quality surgical care should not be a privilege limited by geography or circumstance. He actively participates in community outreach programs designed to bring specialist paediatric surgical services to underserved regions in Kenya.
                </p>
                <p>
                  Through these medical camps and partnerships, children who would otherwise face lifelong complications from treatable conditions receive the surgical interventions they desperately need.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-primary to-[#0d3d3d] p-10 md:p-16 flex flex-col justify-center shadow-2xl"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              <div className="relative z-10">
                <svg className="w-16 h-16 text-white/30 mb-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.2c.4-2.2 2.3-4 4.8-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-5.8c.4-2.2 2.3-4 4.8-4V8z"/>
                </svg>
                <blockquote className="text-2xl md:text-3xl font-serif text-white font-medium leading-snug mb-8">
                  "Every child deserves access to skilled surgical care, regardless of where they come from or what they can afford."
                </blockquote>
                <p className="text-white/80 font-medium tracking-wide uppercase text-sm">
                  — Dr. Joel Lessan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Training & Teaching */}
      <section className="py-16 bg-[#0f4c4c] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-16">
            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h2 className="font-serif text-3xl font-bold">Shaping the Next Generation</h2>
            </div>
            <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-16">
              <p className="text-xl text-white/80 leading-relaxed font-serif">
                As a consultant at Kenyatta National Hospital, Dr. Lessan plays a vital role in training future paediatric surgeons. By mentoring residents and sharing specialist surgical techniques, he contributes significantly to building long-term paediatric surgical capacity within Kenya's healthcare system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Parent Information Preview */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Common Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-white px-6 py-2 rounded-2xl border shadow-sm">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    Do I need a referral to see Dr. Lessan?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    While referrals are welcome and helpful, they are not always strictly necessary for a private consultation. However, please check with your insurance provider as they might require one for coverage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-white px-6 py-2 rounded-2xl border shadow-sm">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    What happens on the day of surgery?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    You will be provided with clear, step-by-step written instructions prior to the day. We ensure parents can stay with their child as much as possible before the procedure begins and are present immediately when they wake up.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href="/faq" className="inline-block pt-2">
                <Button variant="link" className="text-primary font-semibold p-0 h-auto text-base hover:no-underline group">
                  See All FAQs <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Health Insights</h2>
              <Card className="border-none shadow-md bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8 md:p-10">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">Surgery Prep</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Preparing Your Child for Surgery
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Honesty and age-appropriate explanations are key. Avoid using scary words, and reassure them that the medical team is there to help them heal. Creating a calm environment makes a significant difference.
                  </p>
                  <Link href="/insights">
                    <Button variant="outline" className="rounded-full">
                      Read Health Insights
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Appointment CTA */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            Get in Touch
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to speak with Dr. Lessan?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Reach our care team via WhatsApp or phone. We'll respond promptly to answer your questions and schedule a convenient time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://wa.me/254XXXXXXXXX" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full text-base h-16 px-10 w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-500/20">
                <FaWhatsapp size={20} className="mr-3" /> Message on WhatsApp
              </Button>
            </a>
            <a href="tel:+254XXXXXXXXX" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full text-base h-16 px-10 w-full sm:w-auto border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
                <Phone size={20} className="mr-3" /> Call the Clinic
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
