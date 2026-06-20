import Link from "next/link";
import { Facebook, Instagram, Phone, MapPin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl tracking-wider text-white uppercase">
                  Dhawakah
                </span>
                <span className="font-sans text-xs tracking-[0.2em] text-primary uppercase">
                  Importers
                </span>
              </div>
            </Link>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              Premium importer of luxury vehicles, offering exceptional clearing & forwarding services and high-quality building materials.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-secondary hover:text-primary transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/inventory" className="text-secondary hover:text-primary transition-colors text-sm">Inventory</Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary hover:text-primary transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary hover:text-primary transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-secondary text-sm hover:text-white transition-colors cursor-default">Vehicle Importation</li>
              <li className="text-secondary text-sm hover:text-white transition-colors cursor-default">Clearing & Forwarding</li>
              <li className="text-secondary text-sm hover:text-white transition-colors cursor-default">Construction Materials</li>
              <li className="text-secondary text-sm hover:text-white transition-colors cursor-default">Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-secondary text-sm">
                  Jundan Plaza, <br />
                  Mombasa, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-secondary text-sm">0746 978 736</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-secondary text-sm">info@dhawakah.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} Dhawakah Importers. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-secondary hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-secondary hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
