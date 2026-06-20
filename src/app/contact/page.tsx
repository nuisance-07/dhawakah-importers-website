"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
  };

  return (
    <PageTransition>
      <div className="bg-dark-surface pt-32 pb-16 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">Get in Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Contact Us
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Whether you're looking for a specific luxury vehicle, need expert clearing services, or want to source construction materials, our team is ready to assist you.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-400">0746 978 736</p>
                    <p className="text-gray-400 text-sm mt-1">Mon-Fri, 8am-6pm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-400">info@dhawakah.co.ke</p>
                    <p className="text-gray-400 text-sm mt-1">Online support 24/7</p>
                  </div>
                </div>

                <div className="flex gap-4 md:col-span-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Visit Our Office</h3>
                    <p className="text-gray-400">Jundan Plaza, Mombasa, Kenya</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="h-[400px] rounded-sm overflow-hidden border border-white/10 bg-black">
                {/* Embed Google Map targeting Jundan Plaza, Mombasa */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3979.803529241853!2d39.66442627588107!3d-4.060195695914569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840131ee635ea79%3A0xc85502ab841eb9bb!2sJundan%20Plaza!5e0!3m2!1sen!2ske!4v1704123456789!5m2!1sen!2ske" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="bg-black/50 border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              
              <h2 className="font-heading text-2xl font-semibold text-white mb-8">Send us a message</h2>
              
              {isSubmitSuccessful ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-sm text-center">
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-400 block">Full Name</label>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        className="w-full bg-dark-surface border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm text-gray-400 block">Phone Number</label>
                      <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="w-full bg-dark-surface border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="07XX XXX XXX"
                      />
                      {errors.phone && <span className="text-red-400 text-xs">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400 block">Email Address</label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className="w-full bg-dark-surface border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400 block">Your Message</label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      className="w-full bg-dark-surface border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us what you're looking for..."
                    />
                    {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black font-semibold py-4 flex items-center justify-center gap-2 rounded-sm hover:bg-primary-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </PageTransition>
  );
}
