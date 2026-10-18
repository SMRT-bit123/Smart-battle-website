import React from 'react';
import { SmartBattleLogo } from './SmartBattleLogo';
import { APP_CONFIG } from '../config/appConfig';
import { Shield, FileText, Mail, Trophy, GitBranch } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type: 'privacy' | 'terms' | 'fairplay' | 'contact') => void;
  onOpenGitHubGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onOpenGitHubGuide }) => {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SmartBattleLogo size={44} />
              <div>
                <span className="text-xl font-black tracking-wider text-white uppercase font-sans">
                  {APP_CONFIG.appName}
                </span>
                <span className="block text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-0.5">
                  {APP_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated mobile esports tournament management and bracket coordination platform for competitive squad and solo players on Android.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenGitHubGuide}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                <span>GitHub Repo: {APP_CONFIG.githubRepoName}</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  App Features
                </a>
              </li>
              <li>
                <a href="#install" className="hover:text-blue-400 transition-colors">
                  How to Install on Android
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-blue-400 transition-colors">
                  APK Download Center
                </a>
              </li>
              <li>
                <a href="#referral" className="hover:text-blue-400 transition-colors">
                  Referral Program
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal & Support Placeholders
            </h4>
            <p className="text-[11px] text-slate-500">
              Click below to view and edit draft documents prior to public release:
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('privacy')}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-500" />
                  <span>Privacy Policy (Draft Template)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('terms')}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Terms of Service (Draft Template)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('fairplay')}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Trophy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Fair Play & Anti-Cheat Rules</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('contact')}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact & Support ({APP_CONFIG.supportEmail})</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {APP_CONFIG.appName}. All rights reserved. Slogan: "{APP_CONFIG.tagline}".
          </div>

          <div className="text-center md:text-right max-w-lg">
            SMART BATTLE is an independent esports management application. Game titles and registered trademarks are properties of their respective developers and publishers. No endorsement implied.
          </div>
        </div>

      </div>
    </footer>
  );
};
