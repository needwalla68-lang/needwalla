/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Home, 
  Film, 
  Star, 
  List, 
  Settings, 
  Bell, 
  User, 
  Upload, 
  Play, 
  Download, 
  ShieldCheck, 
  CheckCircle, 
  Zap, 
  Users,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Fingerprint,
  QrCode,
  Ticket,
  ArrowRight,
  X,
  UploadCloud,
  FileVideo,
  HelpCircle,
  LogOut,
  Verified,
  MoreHorizontal
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Page = "home" | "auth" | "checkout" | "creator";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Layout components
  const Sidebar = () => (
    <aside className="hidden lg:flex h-full w-20 fixed left-0 top-0 z-40 bg-neutral-900/80 backdrop-blur-lg flex-col py-24 items-center gap-10 border-r border-white/5">
      <NavItem icon={<Home size={24} />} active={currentPage === "home"} onClick={() => setCurrentPage("home")} />
      <NavItem icon={<Film size={24} />} active={false} />
      <NavItem icon={<Star size={24} />} active={false} />
      <NavItem icon={<List size={24} />} active={false} />
      <div className="mt-auto">
        <NavItem icon={<Settings size={24} />} active={currentPage === "creator"} onClick={() => setCurrentPage("creator")} />
      </div>
    </aside>
  );

  const NavItem = ({ icon, active, onClick }: { icon: React.ReactNode; active: boolean; onClick?: () => void }) => (
    <button 
      onClick={onClick}
      className={`p-3 rounded-lg transition-all duration-300 ${
        active 
          ? "bg-primary/10 text-primary border-r-4 border-primary scale-105" 
          : "text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/50"
      }`}
    >
      {icon}
    </button>
  );

  const TopNav = () => (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-xl flex justify-between items-center px-8 py-4 border-b border-white/5">
      <div className="text-2xl font-bold tracking-tighter text-primary font-headline cursor-pointer" onClick={() => setCurrentPage("home")}>
        Obsidian Cinema
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <NavLink label="Discover" active={currentPage === "home"} onClick={() => setCurrentPage("home")} />
        <NavLink label="Trending" />
        <NavLink label="Library" />
        <NavLink label="Creators" active={currentPage === "creator"} onClick={() => setCurrentPage("creator")} />
      </div>
      <div className="flex items-center gap-6">
        <Bell className="text-neutral-400 cursor-pointer hover:text-white transition-all" size={20} />
        <User 
          className="text-neutral-400 cursor-pointer hover:text-white transition-all" 
          size={20} 
          onClick={() => setCurrentPage("auth")}
        />
        <button 
          onClick={() => setCurrentPage("creator")}
          className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold py-2 px-6 rounded transition-all hover:scale-105 glow-button"
        >
          Upload
        </button>
      </div>
    </nav>
  );

  const NavLink = ({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) => (
    <button 
      onClick={onClick}
      className={`font-headline tracking-tighter transition-colors ${
        active ? "text-primary border-b-2 border-primary pb-1" : "text-neutral-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  const Footer = () => (
    <footer className="w-full py-12 border-t border-neutral-900 bg-black flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-8">
        {["Terms of Service", "Privacy Policy", "Contact Support", "Redeem Code"].map((link) => (
          <a key={link} className="font-body text-xs uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors" href="#">
            {link}
          </a>
        ))}
      </div>
      <p className="font-body text-xs uppercase tracking-widest text-neutral-600 opacity-80">
        © 2024 Obsidian Lens Productions. All Rights Reserved.
      </p>
    </footer>
  );

  // Pages
  const HomePage = () => (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="lg:pl-20"
    >
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40" 
            src="https://picsum.photos/seed/obsidian/1920/1080?blur=4" 
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-transparent to-surface-container-lowest"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-1 rounded-full">
            <Star className="text-secondary fill-secondary" size={14} />
            <span className="text-secondary font-body text-xs font-bold uppercase tracking-widest">Exclusive Premiere</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-tight max-w-4xl">
            THE ARCHITECT OF <span className="text-primary italic text-glow">VOID</span>
          </h1>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/80 border border-white/5 group cursor-pointer">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://picsum.photos/seed/void/1280/720" 
              alt="Video Preview"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
              <div className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Play className="text-primary fill-primary ml-1" size={48} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant">
              <div className="h-full bg-primary shadow-[0_0_8px_#81ecff] w-1/3"></div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 w-full max-w-md">
            <button 
              onClick={() => setCurrentPage("checkout")}
              className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-headline font-black text-xl py-6 rounded-lg transition-all hover:scale-[1.02] active:scale-95 glow-button uppercase tracking-tighter"
            >
              Unlock Full Video
            </button>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-on-surface-variant font-body text-sm">
                <Download size={18} className="text-primary" />
                <span>Download Available After Unlock</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-body text-sm">
                <Zap size={18} className="text-secondary" />
                <span>4K Ultra HD + Dolby Atmos Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container rounded-2xl p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" 
              src="https://picsum.photos/seed/detail/800/600" 
              alt="Detail"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="font-headline text-3xl font-bold mb-4">Unprecedented Detail</h3>
              <p className="text-on-surface-variant max-w-md">
                Witness every frame rendered in native 8K with HDR10+ support. Experience the texture of reality like never before in this premium production.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-secondary/10 rounded-2xl p-10 flex flex-col justify-between border border-secondary/20">
            <ShieldCheck className="text-secondary" size={48} />
            <div>
              <h3 className="font-headline text-2xl font-bold text-secondary mb-2">Lifetime Access</h3>
              <p className="text-on-surface-variant text-sm">
                Pay once, own forever. Stream across all your devices or download for offline viewing in up to 3 formats.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-high rounded-2xl p-8 border border-outline-variant/10">
            <Film className="text-primary mb-4" size={24} />
            <h4 className="font-headline text-lg font-bold mb-2">Behind the Scenes</h4>
            <p className="text-on-surface-variant text-sm">Exclusive 40-minute commentary and making-of documentary included.</p>
          </div>
          <div className="md:col-span-4 bg-surface-container-high rounded-2xl p-8 border border-outline-variant/10">
            <Zap className="text-primary mb-4" size={24} />
            <h4 className="font-headline text-lg font-bold mb-2">Lossless Audio</h4>
            <p className="text-on-surface-variant text-sm">Experience the original score in 24-bit studio quality master audio.</p>
          </div>
          <div className="md:col-span-4 bg-surface-container-high rounded-2xl p-8 border border-outline-variant/10">
            <Users className="text-secondary mb-4" size={24} />
            <h4 className="font-headline text-lg font-bold mb-2">Creator Circle</h4>
            <p className="text-on-surface-variant text-sm">Join the private discussion board and interact with the production crew.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-12 border border-white/5 text-center flex flex-col items-center">
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 tracking-tight">READY TO WITNESS THE FUTURE?</h2>
          <p className="text-on-surface-variant mb-10 text-lg max-w-xl">
            Join 50,000+ viewers who have already unlocked the full cinematic experience of Obsidian Cinema's flagship production.
          </p>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="flex justify-between items-center mb-2 px-2">
              <span className="text-on-surface-variant font-body text-sm uppercase tracking-widest">Premium Pass</span>
              <span className="text-secondary font-headline text-2xl font-black">$24.99</span>
            </div>
            <button 
              onClick={() => setCurrentPage("checkout")}
              className="w-full bg-secondary text-on-secondary-fixed font-headline font-black text-lg py-5 rounded transition-all hover:bg-secondary-dim hover:scale-[1.02]"
            >
              Pay to Watch
            </button>
            <p className="text-on-surface-variant/50 text-[10px] uppercase tracking-widest mt-2">Secure 256-bit encrypted checkout via Obsidian Pay</p>
          </div>
        </div>
      </section>
    </motion.div>
  );

  const AuthPage = () => (
    <motion.div 
      initial={{ x: "100%" }} 
      animate={{ x: 0 }} 
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-surface-container-lowest flex flex-col md:flex-row"
    >
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="https://picsum.photos/seed/theater/1200/1000?grayscale" 
            alt="Theater" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10"></div>
        <div className="relative z-20 flex flex-col justify-between p-16 w-full h-full">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black font-headline tracking-tighter text-primary">Obsidian Cinema</span>
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-black font-headline tracking-tighter mb-6 leading-tight">
              Witness the <span className="text-primary text-glow">Unseen</span>.
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-8">
              Experience cinema through a lens of absolute clarity. High-fidelity streaming secured by industry-leading encryption.
            </p>
            <div className="flex items-center gap-6 mt-12">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">4K HDR</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant">Standard</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Dolby Vision</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant">Enhanced</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">AES-256</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant">Secure</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 glass-panel border border-outline-variant/20 rounded-lg flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={16} />
              <span className="text-[10px] uppercase tracking-widest font-semibold">End-to-End Encrypted</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16 relative bg-surface-container-lowest">
        <button 
          onClick={() => setCurrentPage("home")}
          className="absolute top-8 right-8 p-2 text-neutral-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="md:hidden mb-12 flex justify-center w-full">
          <span className="text-3xl font-black font-headline tracking-tighter text-primary">Obsidian Cinema</span>
        </div>
        
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-black font-headline tracking-tight text-white mb-2">Secure Access</h2>
            <p className="text-on-surface-variant">Sign in to unlock premium cinematic content.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setCurrentPage("home"); }}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant block ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="text-outline-variant group-focus-within:text-primary transition-colors" size={20} />
                </div>
                <input 
                  className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary text-white py-4 pl-12 rounded-lg transition-all placeholder:text-outline-variant" 
                  placeholder="name@example.com" 
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end px-1">
                <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant block">Password</label>
                <a className="text-[10px] uppercase tracking-widest text-primary hover:text-primary-fixed transition-colors" href="#">Forgot?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="text-outline-variant group-focus-within:text-primary transition-colors" size={20} />
                </div>
                <input 
                  className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary text-white py-4 pl-12 rounded-lg transition-all placeholder:text-outline-variant" 
                  placeholder="••••••••" 
                  type="password"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                  <Eye className="text-outline-variant hover:text-white transition-colors" size={20} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-1">
              <input className="w-4 h-4 rounded bg-surface-container-low border-none text-primary focus:ring-offset-black focus:ring-primary" id="remember" type="checkbox"/>
              <label className="text-sm text-on-surface-variant cursor-pointer select-none" htmlFor="remember">Remember this device for 30 days</label>
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-black font-headline uppercase tracking-widest py-5 rounded-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
              Continue to Content
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-surface-container-lowest text-[10px] font-bold uppercase tracking-[0.2em] text-outline">or secure connect with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 rounded-lg bg-surface-container hover:bg-surface-bright transition-colors group">
              <Verified className="text-on-surface-variant group-hover:text-white transition-colors" size={20} />
              <span className="text-sm font-semibold">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 rounded-lg bg-surface-container hover:bg-surface-bright transition-colors group">
              <Star className="text-on-surface-variant group-hover:text-white transition-colors" size={20} />
              <span className="text-sm font-semibold">Apple</span>
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-on-surface-variant text-sm">
              New to the obsidian lens? 
              <a className="text-secondary font-bold hover:underline underline-offset-4 ml-1" href="#">Create an account</a>
            </p>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold tracking-widest uppercase">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={14} />
              <span className="text-[10px] font-bold tracking-widest uppercase">PCI Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Fingerprint size={14} />
              <span className="text-[10px] font-bold tracking-widest uppercase">Biometric Ready</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const CheckoutPage = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.95 }}
      className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12"
    >
      <section className="lg:w-5/12 space-y-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-xl aspect-video bg-surface-container">
            <img 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/protocol/800/450" 
              alt="Nocturnal Protocol"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-secondary text-on-secondary-fixed text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">Premium 4K</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-white leading-none">
            NOCTURNAL <br/><span className="text-primary text-glow">PROTOCOL</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
            Unlock the full cinematic experience of the year's most anticipated cyberpunk thriller. Purchase includes 4K streaming and high-fidelity offline downloads.
          </p>
          <div className="pt-6 border-t border-outline-variant/20">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest font-bold mb-1">Total to Pay</p>
                <h2 className="text-5xl font-headline font-black text-white">$24.99</h2>
              </div>
              <div className="text-right">
                <p className="text-secondary font-bold text-sm tracking-wide">GOLD REWARDS ELIGIBLE</p>
                <p className="text-on-surface-variant text-xs">Secure Transaction 256-bit SSL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="bg-surface-container-low p-8 rounded-xl space-y-6 md:col-span-1 border border-outline-variant/10 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3">
            <QrCode className="text-primary" size={32} />
            <h3 className="font-headline font-bold text-xl text-white">UPI Payment</h3>
          </div>
          <div className="bg-white p-4 rounded-lg w-fit mx-auto shadow-[0_0_30px_rgba(129,236,255,0.1)]">
            <img 
              className="w-32 h-32 opacity-90" 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ObsidianCinemaPayment" 
              alt="QR Code"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-center text-xs text-on-surface-variant uppercase tracking-widest">Scan to pay or enter VPA</p>
          <div className="space-y-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Virtual Payment Address</label>
            <input className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary rounded-md px-4 py-3 text-white placeholder:text-neutral-700 transition-all" placeholder="username@bank" type="text"/>
          </div>
        </div>

        <div className="bg-surface-container-low p-8 rounded-xl space-y-6 md:col-span-1 border border-outline-variant/10 hover:border-secondary/30 transition-colors">
          <div className="flex items-center gap-3">
            <Ticket className="text-secondary" size={32} />
            <h3 className="font-headline font-bold text-xl text-white">Redeem Code</h3>
          </div>
          <p className="text-on-surface-variant text-sm">Enter your 16-digit Google Play or Obsidian Gift code below.</p>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Redemption Key</label>
              <input className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-secondary rounded-md px-4 py-3 text-white font-mono tracking-widest placeholder:text-neutral-700 transition-all" placeholder="XXXX-XXXX-XXXX-XXXX" type="text"/>
            </div>
            <button className="w-full bg-surface-bright text-on-surface text-xs font-bold uppercase py-3 rounded-md hover:bg-neutral-700 transition-colors">
              Validate Code
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 pt-4">
          <div className="bg-surface-container-high/50 p-6 rounded-xl flex items-center gap-6 border border-outline-variant/5">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck fill="currentColor" size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold">Instant Activation</h4>
              <p className="text-on-surface-variant text-sm">Once the transaction is confirmed, your license will be permanently added to your library.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-headline font-black text-lg py-5 rounded-md shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3">
              COMPLETE PURCHASE
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setCurrentPage("home")}
              className="px-8 py-5 border border-outline-variant/20 text-on-surface-variant font-bold hover:bg-surface-bright transition-colors rounded-md"
            >
              CANCEL
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );

  const CreatorPage = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }}
      className="lg:pl-64 pt-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        <header className="mb-12">
          <h1 className="font-headline text-5xl font-black text-white tracking-tighter mb-4">Creator Studio</h1>
          <p className="text-on-surface-variant font-body max-w-2xl leading-relaxed">
            Upload your cinematic masterpieces to the Obsidian network. Ensure your video meets the 4K mastering standards for premium distribution.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            <section className="relative group">
              <div className="aspect-video w-full rounded-xl bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center transition-all group-hover:bg-surface-container group-hover:border-primary/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                <UploadCloud className="text-primary/40 mb-4 group-hover:scale-110 transition-transform" size={64} />
                <h3 className="font-headline text-xl font-bold text-white mb-2">Drag & Drop Video</h3>
                <p className="text-on-surface-variant text-sm font-body">MP4, MOV, or MKV up to 50GB</p>
                <button className="mt-6 px-8 py-3 bg-surface-bright text-white font-bold text-xs uppercase tracking-widest rounded transition-all hover:bg-neutral-600">
                  Select File
                </button>
              </div>
            </section>

            <section className="bg-surface-container rounded-xl p-8 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-white tracking-tight">Set Teaser Preview</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Select a 5-second highlight for the homepage carousel.</p>
                </div>
                <span className="text-primary font-body text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">5.0s Locked</span>
              </div>
              
              <div className="space-y-4">
                <div className="relative h-24 bg-surface-container-lowest rounded-lg border border-outline-variant/20 overflow-hidden flex items-center">
                  <div className="flex w-full h-full opacity-30 grayscale gap-1 p-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="flex-1 bg-surface-variant rounded"></div>
                    ))}
                  </div>
                  <div className="absolute left-1/4 w-32 h-full border-x-4 border-primary bg-primary/20 backdrop-blur-sm flex items-center justify-between px-1">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="relative w-full h-2 bg-surface-variant rounded-full">
                  <div className="absolute left-0 top-0 h-full w-1/4 bg-primary shadow-[0_0_8px_#81ecff]"></div>
                  <div className="absolute left-1/4 -top-2 w-4 h-4 rounded-full bg-white border-4 border-primary cursor-pointer"></div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <section className="bg-surface-container rounded-xl p-8 space-y-8">
              <h2 className="font-headline text-2xl font-bold text-white tracking-tight">Video Details</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-on-surface-variant text-xs font-bold uppercase tracking-widest font-body">Video Title</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Enter a cinematic title..." type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-on-surface-variant text-xs font-bold uppercase tracking-widest font-body">Synopsis</label>
                  <textarea className="w-full bg-surface-container-low border border-outline-variant/20 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell the story behind your film..." rows={5}></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-on-surface-variant text-xs font-bold uppercase tracking-widest font-body">Rental Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-on-surface-variant">$</span>
                      <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded pl-8 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="4.99" type="number"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-on-surface-variant text-xs font-bold uppercase tracking-widest font-body">Purchase Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-on-surface-variant">$</span>
                      <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded pl-8 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="19.99" type="number"/>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-on-surface-variant text-xs font-bold uppercase tracking-widest font-body">Distribution Category</label>
                  <div className="flex flex-wrap gap-2">
                    {["Feature Film", "Documentary", "Experimental", "Music Video"].map((cat, i) => (
                      <button key={cat} className={`px-4 py-2 rounded text-xs font-bold transition-all ${i === 0 ? "bg-primary text-on-primary-fixed" : "bg-surface-container-low border border-outline-variant/20 text-on-surface-variant hover:text-white"}`}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant/10">
                <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-black text-sm uppercase tracking-[0.2em] rounded shadow-[0_0_20px_rgba(0,227,253,0.3)] hover:scale-[1.02] transition-all">
                  Publish to Network
                </button>
                <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest mt-4">By publishing, you agree to the Obsidian Creators Agreement</p>
              </div>
            </section>
          </div>
        </div>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container p-6 rounded-xl border-l-4 border-primary">
            <Zap className="text-primary mb-2" size={24} />
            <h4 className="text-white font-bold mb-1">Ultra 4K Delivery</h4>
            <p className="text-on-surface-variant text-xs leading-relaxed font-body">Encoders automatically scale your content for multi-platform delivery without quality loss.</p>
          </div>
          <div className="bg-surface-container p-6 rounded-xl border-l-4 border-secondary">
            <Star className="text-secondary mb-2" size={24} />
            <h4 className="text-white font-bold mb-1">Direct Earnings</h4>
            <p className="text-on-surface-variant text-xs leading-relaxed font-body">Earn 85% of every rental and purchase directly through our smart contract system.</p>
          </div>
          <div className="bg-surface-container p-6 rounded-xl border-l-4 border-primary-container">
            <ShieldCheck className="text-primary-container mb-2" size={24} />
            <h4 className="text-white font-bold mb-1">Digital Rights Management</h4>
            <p className="text-on-surface-variant text-xs leading-relaxed font-body">Advanced encryption ensures your content remains exclusive to authorized viewers.</p>
          </div>
        </section>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface font-body overflow-x-hidden">
      <TopNav />
      {currentPage !== "auth" && <Sidebar />}
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === "home" && <HomePage key="home" />}
          {currentPage === "auth" && <AuthPage key="auth" />}
          {currentPage === "checkout" && <CheckoutPage key="checkout" />}
          {currentPage === "creator" && <CreatorPage key="creator" />}
        </AnimatePresence>
      </main>

      {currentPage === "home" && <Footer />}

      {/* Background Glows */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </div>
  );
}
