import React, { useState } from 'react';
import { 
  Users2, 
  Share2, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight,
  Info
} from 'lucide-react';
import { buildReferralUrl } from '../utils/referral';

interface ReferralSectionProps {
  currentRef: string | null;
  onSetCustomRef: (code: string) => void;
}

export const ReferralSection: React.FC<ReferralSectionProps> = ({
  currentRef,
  onSetCustomRef,
}) => {
  const [customInput, setCustomInput] = useState(currentRef || '');
  const [copied, setCopied] = useState(false);
  const [appliedNotice, setAppliedNotice] = useState(false);

  const activeCode = customInput.trim() || currentRef || 'SQUAD2026';
  const generatedUrl = buildReferralUrl(activeCode);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      onSetCustomRef(customInput.trim());
      setAppliedNotice(true);
      setTimeout(() => setAppliedNotice(false), 2500);
    }
  };

  return (
    <section id="referral" className="py-20 bg-[#060a14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users2 className="w-3.5 h-3.5" />
            <span>Squad & Player Referrals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Referral Code Integration
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Invite teammates and roster members. This site captures incoming referral codes from URL parameters and preserves them for app onboarding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Active Referral Status & Link Generator */}
          <div className="lg:col-span-7 bg-[#0b1329] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Status Card */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Active Referral Status
              </div>
              {currentRef ? (
                <div className="p-4 bg-cyan-950/40 border border-cyan-800/60 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs text-cyan-400 block font-medium">Captured from URL Parameter</span>
                    <span className="text-lg font-black text-white font-mono">{currentRef}</span>
                  </div>
                  <span className="text-xs font-bold text-cyan-300 bg-cyan-900/60 px-2.5 py-1 rounded border border-cyan-700/60">
                    Active on Page
                  </span>
                </div>
              ) : (
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">No referral detected in current URL</span>
                    <span className="text-xs text-slate-500">Test with ?ref=YOURCODE or generate a custom link below</span>
                  </div>
                </div>
              )}
            </div>

            {/* Test / Custom Referral Code Input */}
            <form onSubmit={handleApplyCode} className="space-y-3">
              <label htmlFor="refCode" className="text-xs font-semibold text-slate-300 block">
                Enter Team / Player Referral Code
              </label>
              <div className="flex gap-2">
                <input
                  id="refCode"
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value.toUpperCase())}
                  placeholder="e.g. SQUAD2026"
                  maxLength={24}
                  className="flex-1 bg-[#070c18] border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono text-sm text-white px-4 py-2.5 rounded-xl uppercase placeholder:normal-case placeholder:text-slate-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {appliedNotice && (
                <p className="text-xs text-emerald-400">Referral code applied to current session!</p>
              )}
            </form>

            {/* Generated Shareable URL */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="text-xs font-semibold text-slate-400">
                Generated Referral URL
              </div>
              <div className="flex items-center gap-2 bg-[#070c18] p-2.5 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-300 font-mono truncate flex-1 select-all">
                  {generatedUrl}
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors shrink-0 cursor-pointer"
                  title="Copy shareable link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Explanation (No fake tracking claims) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0b1329] border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                <Share2 className="w-4 h-4" />
                <span>How Referrals Work</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Preserved Query Architecture
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                When a player visits via your link, the website reads <code className="text-blue-300">?ref=CODE</code> from the query string and stores it in the browser session. When internal navigation occurs, the referral stays preserved.
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                  <span>Teammate opens link with your referral query</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                  <span>Website validates and attaches code to download session</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                  <span>Upon APK install & backend signup, the referral is credited</span>
                </div>
              </div>
            </div>

            {/* Honest Disclaimer */}
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start gap-2.5 text-[11px] text-slate-400">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong>Integration Note:</strong> This site prepares the frontend capture and link formatting. Final player reward distribution is validated by the game backend service during profile registration.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
