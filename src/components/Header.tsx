import React, { useState } from 'react';
import { SmartBattleLogo } from './SmartBattleLogo';
import { Download, Menu, X } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface HeaderProps {
  referralCode: string | null;
  onOpenGitHubGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ referralCode, onOpenGitHubGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How to Install', href: '#install' },
    { label: 'APK Download', href: '#download' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Referral', href: '#referral' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070c18]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Zone */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="SMART BATTLE Home"
          >
            <SmartBattleLogo size={42} />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white uppercase font-sans">
                SMART BATTLE
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase">
                Esports Platform
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
              >
                {link.label}
              </a>
            ))}
            
            {referralCode && (
              <a
                href="#referral"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#referral');
                }}
                className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded transition-colors hover:bg-cyan-900/60"
              >
                Ref: {referralCode}
              </a>
            )}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenGitHubGuide}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2.5 py-1.5 border border-slate-800 hover:border-slate-700 rounded-md"
              title="Deployment & Sync Instructions"
            >
              GitHub Setup
            </button>

            <a
              href={APP_CONFIG.apkDownloadUrl || '#download'}
              download="smart_battle.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get APK</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070c18] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {referralCode && (
            <div className="px-3 py-2 text-xs text-cyan-400 bg-cyan-950/40 rounded border border-cyan-800/50 flex items-center justify-between">
              <span>Referral Code Active</span>
              <span className="font-mono font-bold">{referralCode}</span>
            </div>
          )}

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubGuide();
              }}
              className="w-full text-left px-3 py-2 text-xs text-slate-400 hover:text-white"
            >
              GitHub Sync & Deployment Guide
            </button>
            <a
              href={APP_CONFIG.apkDownloadUrl || '#download'}
              download="smart_battle.apk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download APK
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
