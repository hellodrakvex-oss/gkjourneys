"use client";

import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactPageClient() {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Stagger wrapper for left column
  const leftColVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-[100svh] overflow-hidden pt-32 pb-24 selection:bg-primary/30">
      
      {/* ── Premium Background Image with Slow Zoom ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=85"
            alt="Contact Background - Kerala Backwaters"
            fill
            quality={85}
            className="object-cover object-center"
          />
        </motion.div>
        {/* Soft dark overlay for perfect readability */}
        <div className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* Advanced Section Heading Animation */}
        <div className="flex justify-center items-center mb-16 overflow-hidden h-24">
          <motion.div
            initial={{ x: "-150%", opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight pr-3 md:pr-4 drop-shadow-md"
          >
            Contact
          </motion.div>
          <motion.div
            initial={{ x: "150%", opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setAnimationComplete(true)}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary italic tracking-tight drop-shadow-md"
          >
            Us
          </motion.div>
        </div>

        {/* Main Content — Fades in after header animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 max-w-7xl mx-auto">
          
          {/* Left Column: Contact Information Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            variants={leftColVariants}
            initial="hidden"
            animate={animationComplete ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">Get In Touch</h2>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Whether you&apos;re ready to book your next adventure or just have a few questions, we&apos;re here to help you plan the perfect journey.
              </p>
            </motion.div>

            {/* Premium Glass Cards */}
            <motion.div variants={itemVariants}>
              <ContactCard 
                icon={<MessageCircle className="w-6 h-6 text-[#25D366]" />}
                title="WhatsApp (Preferred)"
                subtitle="+91 78920 50273 · Typically within 30 min"
                href="https://wa.me/917892050273"
                hoverColor="hover:border-[#25D366]/50 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)]"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ContactCard 
                icon={<Phone className="w-6 h-6 text-primary" />}
                title="Phone Call"
                subtitle="+91 78920 50273 · Mon–Sat 9AM–9PM"
                href="tel:+917892050273"
                hoverColor="hover:border-primary/50 hover:shadow-[0_0_20px_rgba(15,139,115,0.15)]"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactCard 
                icon={<Mail className="w-6 h-6 text-[#C9A227]" />}
                title="Email"
                subtitle="gkjourneysbykrupa@gmail.com"
                href="mailto:gkjourneysbykrupa@gmail.com"
                hoverColor="hover:border-[#C9A227]/50 hover:shadow-[0_0_20px_rgba(201,162,39,0.15)]"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="group flex items-start gap-5 bg-white/10 border border-white/20 p-5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white mb-1">Office Address</p>
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  #544, 5th Cross, Bogadi 2nd Stage North,<br />Mysore, Karnataka – 570026
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={animationComplete ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#0F172A]/60 border border-white/20 rounded-[2rem] p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send an Inquiry</h3>
                <p className="text-white/80 text-sm font-light">
                  Fill out the form below and we will get back to you with a personalized itinerary.
                </p>
              </div>

              <InquiryForm isVisible={animationComplete} />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, subtitle, href, hoverColor }: { icon: React.ReactNode, title: string, subtitle: string, href: string, hoverColor: string }) {
  return (
    <a 
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group flex items-center gap-5 bg-white/10 border border-white/20 p-5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/15 shadow-lg ${hoverColor}`}
    >
      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm text-white mb-1">{title}</p>
        <p className="text-white/80 text-sm font-light">{subtitle}</p>
      </div>
    </a>
  );
}

function InquiryForm({ isVisible }: { isVisible: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!/^\+?[0-9\s-]{10,}$/.test(formData.phone.trim())) newErrors.phone = "Enter a valid phone number (10+ digits)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = "Enter a valid email address";
    if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", destination: "", message: "" });
    } catch (error: unknown) {
      const emailError = error as { status?: number; text?: string };
      console.error("EmailJS Status:", emailError?.status);
      console.error("EmailJS Text:", emailError?.text);
      console.error("EmailJS Full Error:", error);

      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError: boolean) => 
    `w-full bg-black/30 border ${hasError ? "border-red-500/50 focus:border-red-500" : "border-white/20 focus:border-primary/60"} text-white rounded-xl px-4 py-3.5 text-sm font-light focus:outline-none focus:ring-1 ${hasError ? "focus:ring-red-500/50" : "focus:ring-primary/60"} transition-all placeholder:text-white/40 shadow-inner`;

  // Stagger variants for fields
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
  };

  if (submitStatus === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 bg-white/10 rounded-2xl border border-primary/30 relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-3">Inquiry Sent Successfully!</h3>
        <p className="text-white/80 text-sm font-light leading-relaxed mb-8">
          Thank you for reaching out. Krupa has received your message and will get back to you shortly to start planning your journey.
        </p>
        <button 
          onClick={() => setSubmitStatus("idle")} 
          className="text-primary hover:text-white transition-colors font-medium text-sm underline underline-offset-4 decoration-primary/50 hover:decoration-white"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className="space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div variants={itemVariants}>
          <label className="block text-xs font-semibold text-white/70 uppercase tracking-widest mb-2">Full Name *</label>
          <input 
            type="text" 
            name="name" // specific name for emailjs mapping
            placeholder="Your name" 
            className={inputClasses(!!errors.name)} 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          />
          {errors.name && <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.name}</span>}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block text-xs font-semibold text-white/70 uppercase tracking-widest mb-2">Phone *</label>
          <input 
            type="tel" 
            name="phone"
            placeholder="+91 XXXXX XXXXX" 
            className={inputClasses(!!errors.phone)} 
            value={formData.phone} 
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
          />
          {errors.phone && <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.phone}</span>}
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <label className="block text-xs font-semibold text-white/70 uppercase tracking-widest mb-2">Email *</label>
        <input 
          type="email" 
          name="email"
          placeholder="your@email.com" 
          className={inputClasses(!!errors.email)} 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
        {errors.email && <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email}</span>}
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="block text-xs font-semibold text-white/70 uppercase tracking-widest mb-2">Interested In (Optional)</label>
        <select 
          name="destination"
          className={inputClasses(false) + " appearance-none cursor-pointer"} 
          value={formData.destination} 
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
        >
          <option value="" className="bg-[#0F172A] text-white/70">Select a service or destination</option>
          <option className="bg-[#0F172A] text-white">Kerala</option>
          <option className="bg-[#0F172A] text-white">Karnataka</option>
          <option className="bg-[#0F172A] text-white">Tamil Nadu</option>
          <option className="bg-[#0F172A] text-white">Goa</option>
          <option className="bg-[#0F172A] text-white">North India</option>
          <option className="bg-[#0F172A] text-white">International Holiday</option>
          <option className="bg-[#0F172A] text-white">Honeymoon Package</option>
          <option className="bg-[#0F172A] text-white">Family Trip</option>
          <option className="bg-[#0F172A] text-white">Group Tour</option>
          <option className="bg-[#0F172A] text-white">Corporate Travel</option>
          <option className="bg-[#0F172A] text-white">Hotel Booking</option>
          <option className="bg-[#0F172A] text-white">Flight Booking</option>
          <option className="bg-[#0F172A] text-white">Vehicle Rental</option>
        </select>
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="block text-xs font-semibold text-white/70 uppercase tracking-widest mb-2">Message *</label>
        <textarea 
          name="message"
          rows={4} 
          placeholder="Tell us your travel dates, preferences, and any special requests..." 
          className={inputClasses(!!errors.message) + " resize-none"} 
          value={formData.message} 
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
        />
        {errors.message && <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.message}</span>}
      </motion.div>

      {submitStatus === "error" && (
        <motion.div variants={itemVariants} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>Something went wrong while sending your message. Please try again or contact us directly via WhatsApp.</p>
        </motion.div>
      )}

      <motion.div variants={itemVariants} className="pt-2">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="group relative w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_10px_20px_rgba(15,139,115,0.3)] hover:shadow-[0_15px_30px_rgba(15,139,115,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </motion.div>
    </motion.form>
  );
}
