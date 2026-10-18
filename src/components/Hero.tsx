import React from 'react';
import { Download, ShieldCheck, Gamepad2, ArrowRight } from 'lucide-react';
import { SmartBattleLogo } from './SmartBattleLogo';
import { APP_CONFIG } from '../config/appConfig';

interface HeroProps {
  onDownloadClick: () => void;
  onInstallGuideClick: () => void;
  referralCode: string | null;
}

export const Hero: React.FC<HeroProps> = ({
  onDownloadClick,
  onInstallGuideClick,
  referralCode,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 esports-grid esports-glow">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Esports Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Gamepad2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Competitive Mobile Esports Platform</span>
            </div>

            {/* Exact Tagline Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] mb-6 font-sans">
              PLAY HARDLY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
                WIN SMARTLY
              </span>
            </h1>

            {/* App Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              <strong className="text-white font-semibold">SMART BATTLE</strong> is the dedicated Android esports tournament application built for competitive squad and solo mobile gamers. Participate in organized bracket tournaments, access verified room slots, and battle under standardized fair-play esports rules.
            </p>

            {/* Referral Banner if present */}
            {referralCode && (
              <div className="w-full max-w-xl mb-6 p-3 bg-cyan-950/40 border border-cyan-800/60 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-cyan-300 font-medium">Invited by teammate:</span>
                  <span className="font-mono text-xs font-bold text-white bg-cyan-900/80 px-2 py-0.5 rounded">
                    {referralCode}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Referral attached</span>
              </div>
            )}

            {/* CTA Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={APP_CONFIG.apkDownloadUrl || 'https://github.com/SMRT-bit123/Smart-battle-website/raw/refs/heads/main/smart_battle.apk'}
                download="smart_battle.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>DOWNLOAD APK</span>
              </a>

              <button
                onClick={onInstallGuideClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
              >
                <span>How to Install</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Trust and Compatibility Checklist (No fake stats/numbers) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Official Sideload Package</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Android 8.0+ Compatible</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Direct Room & Slot Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Mobile Esports App Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Phone Device Shell */}
              <div className="relative bg-[#0b1329] border-4 border-slate-700 rounded-[2.5rem] p-3 shadow-2xl shadow-blue-950/60 ring-1 ring-blue-500/30">
                {/* Speaker Ear Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Smartphone Screen Content */}
                <div className="bg-[#070c18] rounded-[2rem] overflow-hidden pt-8 pb-4 px-4 border border-slate-800/80 text-left">
                  
                  {/* In-App Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <SmartBattleLogo size={24} />
                      <span className="text-xs font-bold text-white tracking-wider">SMART BATTLE</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
                      ROOM ACTIVE
                    </span>
                  </div>

                  {/* Active Tournament Match Card */}
                  <div className="my-3 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span>BATTLE ARENA TOURNAMENT</span>
                      <span className="text-blue-400 font-semibold">MATCH #48</span>
                    </div>
                    <div className="text-sm font-bold text-white uppercase tracking-wide">
                      Squad Championship Qualifier
                    </div>
                    
                    {/* Match Room Details Grid */}
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-[#0b1329] p-2 rounded border border-slate-800/60">
                        <span className="text-slate-400 block text-[9px]">MODE</span>
                        <span className="text-white font-semibold">BATTLE ROYALE 4v4</span>
                      </div>
                      <div className="bg-[#0b1329] p-2 rounded border border-slate-800/60">
                        <span className="text-slate-400 block text-[9px]">MAP</span>
                        <span className="text-white font-semibold">DESERT ARENA</span>
                      </div>
                    </div>
                  </div>

                  {/* Team Roster / Slot Allocation Preview */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300">
                      <span>SLOT ALLOCATION</span>
                      <span className="text-[10px] text-blue-400 font-mono">ROOM DETAILS SENT</span>
                    </div>

                    {/* Slot Item 1 */}
                    <div className="p-2 bg-[#0d162d] rounded-lg border border-blue-900/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-blue-600/40 text-blue-300 text-[10px] font-mono flex items-center justify-center font-bold">
                          01
                        </span>
                        <div>
                          <div className="text-xs font-bold text-white">SQUAD TITAN</div>
                          <div className="text-[9px] text-slate-400">Slot 1 · Verified Captain</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/60">
                        READY
                      </span>
                    </div>

                    {/* Slot Item 2 */}
                    <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono flex items-center justify-center font-bold">
                          02
                        </span>
                        <div>
                          <div className="text-xs font-bold text-white">TEAM VANGUARD</div>
                          <div className="text-[9px] text-slate-400">Slot 2 · Verified Captain</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                        CONFIRMED
                      </span>
                    </div>
                  </div>

                  {/* In-App Action Button */}
                  <div className="p-2.5 bg-blue-600 rounded-lg text-center text-xs font-bold text-white uppercase tracking-wider">
                    View Match Room ID & Pass
                  </div>
                  
                  {/* Subtle Home Indicator Bar */}
                  <div className="w-24 h-1 bg-slate-700 mx-auto mt-4 rounded-full" />
                </div>
              </div>

              {/* Decorative Esports Crest Badge Accent */}
              <div className="absolute -bottom-4 -left-4 bg-[#0a1226] border border-blue-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <SmartBattleLogo size={32} />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">FAIR-PLAY ENGINE</div>
                  <div className="text-[10px] text-blue-300">Strict Esports Verification</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
