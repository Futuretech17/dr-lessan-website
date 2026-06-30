import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Dr. Lessan" },
    { href: "/conditions", label: "Conditions Treated" },
    { href: "/locations", label: "Where He Practices" },
    { href: "/faq", label: "FAQ" },
    { href: "/insights", label: "Health Insights" },
    { href: "/book", label: "Book Appointment" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative">
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-lg">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Plus size={18} strokeWidth={3} />
              </div>
              <span className="text-2xl font-serif text-foreground font-bold tracking-tight">
                Dr. Joel Lessan
              </span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {links.slice(1, -1).map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-sm font-semibold transition-colors hover:text-primary cursor-pointer relative ${location === link.href ? "text-primary" : "text-muted-foreground"}`}>
                  {link.label}
                  {location === link.href && (
                    <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </span>
              </Link>
            ))}
            <Link href="/book">
              <Button className="rounded-full px-8 font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Book Appointment
              </Button>
            </Link>
          </nav>
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-white border-b shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-4 text-lg font-medium rounded-xl cursor-pointer mb-2 transition-colors ${location === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#0d3d3d] text-white py-16 mt-auto">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <span className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Plus size={18} strokeWidth={3} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                Dr. Joel Lessan
              </span>
            </span>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Consultant Paediatric Surgeon based in Nairobi, Kenya. Compassionate care for newborns to adolescents.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block w-fit">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2">Hospitals</h4>
            <div className="flex flex-col gap-4 text-sm text-white/70">
              <p>
                <strong className="text-white block mb-1">Gertrude's Children's Hospital</strong>
                Muthaiga, Nairobi
              </p>
              <p>
                <strong className="text-white block mb-1">Kenyatta National Hospital</strong>
                Hospital Road, Nairobi
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <p>Nairobi, Kenya</p>
              <p>Phone: +254XXXXXXXXX</p>
              <p>WhatsApp: +254XXXXXXXXX</p>
              <Link href="/book">
                <Button variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10 rounded-full w-full justify-center">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© 2024 Dr. Joel Lessan. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a
              href="https://frostfieldtech.co.ke/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Powered by Frostfield Tech
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
        <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium text-foreground opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden md:block">
          Chat with us
        </div>
        <a
          href="https://wa.me/254XXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
          aria-label="Contact on WhatsApp"
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}
