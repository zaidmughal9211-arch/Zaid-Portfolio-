/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  ExternalLink, 
  CheckCircle2, 
  Layout, 
  BarChart3, 
  Palette, 
  ShoppingBag, 
  Menu, 
  X,
  ChevronRight,
  Globe,
  Zap,
  ShieldCheck,
  Headphones,
  Smile
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-display font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          ZAID.
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2 px-6 text-sm">Hire Me</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass py-6 flex flex-col items-center gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2 px-8" onClick={() => setIsMenuOpen(false)}>Hire Me</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold tracking-wider uppercase mb-6">
            Available for New Projects
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-extrabold mb-6 leading-tight">
            I'm <span className="gradient-text">Zaid</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 font-light">
            Meta Ads Expert | Shopify Developer | Ecommerce Manager | Canva Designer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a href="#contact" className="btn-primary" whileHover={{ y: -5 }}>Hire Me</motion.a>
            <motion.a href="#services" className="btn-outline" whileHover={{ y: -5 }}>View Services</motion.a>
            <motion.a 
              href="https://wa.me/923057665687" 
              target="_blank" 
              className="px-8 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 font-semibold text-[#25D366] hover:bg-[#25D366]/30 transition-all"
              whileHover={{ y: -5 }}
            >
              WhatsApp
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: MessageCircle, href: "https://wa.me/923057665687" },
              { icon: Mail, href: "mailto:zaidmughal9211@gmail.com" },
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-1 h-2 bg-white/40 rounded-full" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/zaid/800/800" 
                alt="Zaid" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Floating stats */}
            <motion.div 
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-xs text-white/60 uppercase tracking-widest">Projects Done</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">About <span className="text-primary">Me</span></h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              I am a professional Meta Ads Expert and Ecommerce Developer with strong experience in Shopify, Shopify Ecommerce websites, and Canva designing. 
              I help businesses scale online through profitable Facebook and Instagram ad campaigns, high-converting ecommerce stores, and eye-catching visual designs. 
              My goal is to deliver quality work that drives real results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-4 rounded-xl">
                <p className="text-accent font-bold text-xl mb-1">Expertise</p>
                <p className="text-sm text-white/50">Meta Ads & Shopify</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-accent font-bold text-xl mb-1">Focus</p>
                <p className="text-sm text-white/50">ROI & Conversions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Meta Ads (Facebook & Instagram)",
      icon: <BarChart3 className="text-primary" size={32} />,
      items: [
        "Complete Ads Account Setup",
        "Campaign Strategy and Planning",
        "Audience Research & Targeting",
        "Creative Testing (Images & Videos)",
        "Pixel Setup & Conversion Tracking",
        "ROAS and Performance Optimization"
      ]
    },
    {
      title: "Shopify Development",
      icon: <ShoppingBag className="text-secondary" size={32} />,
      items: [
        "Shopify Store Setup from Scratch",
        "Premium Theme Customization",
        "Product Upload and Optimization",
        "Payment Gateway & Shipping Setup",
        "Store Speed & Mobile Optimization",
        "Basic Shopify SEO"
      ]
    },
    {
      title: "Google & YouTube Ads",
      icon: <Layout className="text-accent" size={32} />,
      items: [
        "Create campaigns",
        "Keyword targeting",
        "Performance monitoring",
        "Video ad setup",
        "Audience targeting"
      ]
    },
    {
      title: "Canva Designing",
      icon: <Palette className="text-primary" size={32} />,
      items: [
        "Social Media Post Designs",
        "Meta Ads Creatives",
        "Ecommerce Banners & Sliders",
        "Thumbnails & Promo Designs",
        "Professional PDF Designs"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Core <span className="gradient-text">Services</span></h2>
          <p className="text-white/60">Comprehensive solutions for your digital growth</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass p-8 rounded-3xl glass-hover flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-6">{service.title}</h3>
              <ul className="space-y-3 mt-auto">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Work <span className="text-secondary">Experience</span></h2>
          <p className="text-white/60">Real results for real businesses</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Meta Ads Experience */}
          <motion.div 
            className="glass p-10 rounded-3xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <BarChart3 size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Meta Ads Expert</h3>
                <p className="text-sm text-white/50 tracking-widest uppercase">Campaign Experience</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-accent font-semibold mb-4 flex items-center gap-2">
                  <ChevronRight size={18} /> Sales Ads
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["pakbazaar.online", "HmGarments.store"].map(store => (
                    <span key={store} className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10">{store}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-accent font-semibold mb-4 flex items-center gap-2">
                  <ChevronRight size={18} /> Messages Ads
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Rano's Collection", "Herbal Hub", "Saudia Furniture", "Stich in.", "Webadix Media", "Hm Garments"].map(store => (
                    <span key={store} className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10">{store}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shopify Experience */}
          <motion.div 
            className="glass p-10 rounded-3xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Shopify Developer</h3>
                <p className="text-sm text-white/50 tracking-widest uppercase">Store Development</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-accent font-semibold mb-4 flex items-center gap-2">
                  <ChevronRight size={18} /> Live Stores
                </h4>
                <div className="flex flex-col gap-3">
                  {["pakbazaar.online", "HmGarments.store", "ShaziaCollection.store", "SufiPairs.store"].map(store => {
                    const isUrl = store.includes('.');
                    return isUrl ? (
                      <a key={store} href={`https://${store}`} target="_blank" className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-secondary/50 transition-all group">
                        <span className="text-sm font-medium">{store}</span>
                        <ExternalLink size={16} className="text-white/30 group-hover:text-secondary" />
                      </a>
                    ) : (
                      <div key={store} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 transition-all">
                        <span className="text-sm font-medium">{store}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-accent font-semibold mb-4 flex items-center gap-2">
                  <ChevronRight size={18} /> Demo Stores
                </h4>
                <p className="text-sm text-white/60 italic">Multiple demo Shopify websites created for practice and previews.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Tools = () => {
  const tools = [
    { name: "Meta Ads Manager", icon: "https://cdn.worldvectorlogo.com/logos/facebook-ads.svg" },
    { name: "Facebook Pixel", icon: "https://www.facebook.com/favicon.ico" },
    { name: "Google Analytics", icon: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
    { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "Canva Pro", icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }
  ];

  return (
    <section className="py-24 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Tools I <span className="text-accent">Use</span></h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center p-4 group">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs font-medium text-white/50 uppercase tracking-widest">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseMe = () => {
  const features = [
    { title: "Result-oriented approach", icon: <Zap className="text-primary" /> },
    { title: "Clean and professional work", icon: <ShieldCheck className="text-secondary" /> },
    { title: "Fast delivery and support", icon: <Headphones className="text-accent" /> },
    { title: "Clear communication", icon: <MessageCircle className="text-primary" /> },
    { title: "100% client satisfaction focus", icon: <Smile className="text-secondary" /> }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Why <span className="gradient-text">Choose Me</span></h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="glass p-8 rounded-2xl text-center glass-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold leading-tight">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[40px] text-center">
          <h2 className="text-5xl font-display font-bold mb-6">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="text-xl text-white/60 mb-12">Ready to scale your business to the next level?</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.a 
              href="mailto:zaidmughal9211@gmail.com" 
              className="btn-primary flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={20} />
              zaidmughal9211@gmail.com
            </motion.a>
            <motion.a 
              href="https://wa.me/923057665687" 
              target="_blank"
              className="px-8 py-3 rounded-full bg-[#25D366] font-semibold text-white shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <MessageCircle size={20} />
              +92 305 7665687
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="#home" className="text-3xl font-display font-bold gradient-text">ZAID.</a>
          
          <div className="flex gap-8">
            <a href="#home" className="text-white/50 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-white/50 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-white/50 hover:text-white transition-colors">Services</a>
            <a href="#experience" className="text-white/50 hover:text-white transition-colors">Experience</a>
          </div>

          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-primary transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center text-white/30 text-sm">
          <p>© {new Date().getFullYear()} Zaid Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Tools />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
