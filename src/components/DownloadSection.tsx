import React, { useState } from 'react';
import { 
  Download, 
  Clock, 
  Smartphone, 
  ShieldCheck, 
  Cpu, 
  HardDrive, 
  Layers, 
  Bell, 
  CheckCircle2, 
  AlertCircle,
  FileCode,
  Copy,
  Check
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { SmartBattleLogo } from './SmartBattleLogo';

interface DownloadSectionProps {
  referralCode: string | null;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ referralCode }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [copiedSetting, setCopiedSetting] = useState(false);

  const hasDirectUrl = Boolean(APP_CONFIG.apkDownloadUrl && APP_CONFIG.apkDownloadUrl.trim().length > 0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    // Save to localStorage for demo persistence
    try {
      const existing = JSON.parse(localStorage.getItem('smart_battle_subscribers') || '[]');
      existing.push({ email, date: new Date().toISOString(), ref: referralCode });
      localStorage.setItem('smart_battle_subscribers', JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }
    setSubscribed(true);
  };

  const handleCopyConfigSnippet = () => {
    navigator.clipboard.writeText(`// In src/config/appConfig.ts:\napkDownloadUrl: "https://your-domain.com/downloads/SMART_BATTLE.apk"`);
    setCopiedSetting(true);
    setTimeout(() => setCopiedSetting(false), 2000);
  };

  return (
    <section id="download" className="py-20 bg-[#070c18] border-t border-slate-800/80 relative overflow-hidden esports-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Download className="w-3.5 h-3.5" />
            <span>Official Android APK Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Download SMART BATTLE APK
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Get the official application package directly from our verified build pipeline. No third-party stores required.
          </p>
        </div>

        {/* Main APK Box */}
        <div className="max-w-3xl mx-auto bg-[#0b1329] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Header Row: Logo & Release Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <SmartBattleLogo size={56} />
              <div>
                <h3 className="text-2xl font-black text-white uppercase font-sans">
                  {APP_CONFIG.appName}
                </h3>
                <div className="text-xs text-blue-400 font-semibold tracking-wider uppercase mt-0.5">
                  {APP_CONFIG.tagline}
                </div>
              </div>
            </div>

            {/* Official Status Indicator */}
            <div>
              {hasDirectUrl ? (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Build Ready</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/60 border border-amber-800/80 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>APK Coming Soon</span>
                </div>
              )}
            </div>
          </div>

          {/* Device & Package Specifications Grid */}
          <div className="py-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#070c18] p-3.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>VERSION</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">
                {APP_CONFIG.version}
              </div>
            </div>

            <div className="bg-[#070c18] p-3.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                <HardDrive className="w-3.5 h-3.5 text-blue-400" />
                <span>FILE SIZE</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">
                {APP_CONFIG.estimatedSize}
              </div>
            </div>

            <div className="bg-[#070c18] p-3.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                <span>MINIMUM OS</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Android 8.0+
              </div>
            </div>

            <div className="bg-[#070c18] p-3.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>ARCH</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">
                Universal
              </div>
            </div>
          </div>

          {/* Package Identity Details */}
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 mb-8 space-y-2 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-300">
              <span className="text-slate-400">Package Identifier:</span>
              <span className="font-mono text-blue-300">{APP_CONFIG.packageName}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-300">
              <span className="text-slate-400">Security Certificate:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Official Release Keystore
              </span>
            </div>
            {referralCode && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-cyan-300 pt-2 border-t border-slate-800">
                <span className="text-slate-400">Referral Code to Pass:</span>
                <span className="font-mono font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                  {referralCode}
                </span>
              </div>
            )}
          </div>

          {/* Action Area: Either Active Download OR Coming Soon Disabled State */}
          {hasDirectUrl ? (
            <div className="space-y-4">
              <a
                href={APP_CONFIG.apkDownloadUrl!}
                download
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Download APK ({APP_CONFIG.version})</span>
              </a>
              <p className="text-center text-xs text-slate-400">
                Direct download from verified official server. By downloading you agree to tournament fair play terms.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Coming Soon Notice Card */}
              <div className="p-4 bg-amber-950/30 border border-amber-800/50 rounded-xl flex items-start gap-3 text-amber-200 text-xs leading-relaxed">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-amber-300 block mb-0.5">
                    Official Release Build in Final Preparation
                  </strong>
                  The production APK package is currently completing anti-cheat integration and keystore signature validation. The download action will be unlocked the moment the file is published.
                </div>
              </div>

              {/* Disabled Download Button with clear state */}
              <div className="relative">
                <button
                  type="button"
                  disabled
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-slate-800/70 border border-slate-700/80 text-slate-400 font-bold text-base uppercase tracking-wider rounded-xl cursor-not-allowed opacity-80"
                  aria-disabled="true"
                >
                  <Download className="w-5 h-5 text-slate-500" />
                  <span>APK Coming Soon (Download Inactive)</span>
                </button>
              </div>

              {/* Pre-Registration / Email Notification Form */}
              <div className="pt-6 border-t border-slate-800">
                <div className="text-center mb-4">
                  <h4 className="text-sm font-bold text-white flex items-center justify-center gap-2">
                    <Bell className="w-4 h-4 text-blue-400" />
                    <span>Get Notified on Launch</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Enter your email to receive direct notification when the official APK file is released.
                  </p>
                </div>

                {subscribed ? (
                  <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>You're registered! We will notify you immediately once the APK download is live.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="player@example.com"
                        className="flex-1 bg-[#070c18] border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white px-4 py-3 rounded-xl placeholder:text-slate-600"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0 cursor-pointer"
                      >
                        Notify Me
                      </button>
                    </div>
                    {emailError && (
                      <p className="text-xs text-red-400 pl-1">{emailError}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Developer Configuration Note (Explains where download URL is hooked up) */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400 bg-[#070c18]/80 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                To activate download: set <code className="text-blue-300 font-mono">apkDownloadUrl</code> in <code className="text-slate-300 font-mono">src/config/appConfig.ts</code>
              </span>
            </div>
            <button
              onClick={handleCopyConfigSnippet}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors shrink-0 cursor-pointer"
            >
              {copiedSetting ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Config</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
