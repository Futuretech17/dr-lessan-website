import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Insights() {
  const articles = [
    {
      title: "What Is a Paediatric Surgeon?",
      excerpt: "Many parents wonder why a specialist is needed. Paediatric surgeons complete additional training beyond general surgery to handle the unique anatomy, physiology, and emotional needs of young patients.",
      date: "July 10, 2023",
      category: "About Paediatric Surgery",
      color: "border-l-[#0f4c4c]"
    },
    {
      title: "Recognizing Appendicitis in Children",
      excerpt: "Appendicitis is a common emergency. Unlike adults, young children might not be able to articulate their pain clearly. Look out for sudden abdominal pain, loss of appetite, and fever. Early detection is key.",
      date: "October 12, 2023",
      category: "Emergency Signs",
      color: "border-l-[#e11d48]"
    },
    {
      title: "Preparing Your Child for Surgery",
      excerpt: "Honesty and age-appropriate explanations are key. Avoid using scary words, and reassure them that the medical team is there to help them heal. Creating a calm environment at home makes a significant difference.",
      date: "September 05, 2023",
      category: "Surgery Prep",
      color: "border-l-[#2563eb]"
    },
    {
      title: "Understanding Umbilical Hernias",
      excerpt: "Many parents worry when they notice a bulge near their baby's belly button. Most umbilical hernias are harmless and often close on their own, but surgical evaluation is important if they persist.",
      date: "August 20, 2023",
      category: "Common Conditions",
      color: "border-l-[#16a34a]"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEO 
        title="Health Insights | Dr. Joel Lessan"
        description="Educational articles and insights on children's surgical health, recognizing symptoms, and preparing for medical procedures."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">Health Insights</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Expert advice and guidance for parents navigating pediatric health and surgical procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-3xl overflow-hidden group cursor-pointer border-l-4 ${article.color}`}>
                  <CardContent className="p-8 md:p-10 relative">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-foreground text-xs font-bold uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all w-fit border-b-2 border-transparent group-hover:border-primary pb-1">
                      Read Article <ArrowRight size={18} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-base">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
