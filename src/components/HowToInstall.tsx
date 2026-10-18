import React, { useState } from 'react';
import { 
  DownloadCloud, 
  ShieldAlert, 
  Settings2, 
  CheckCircle, 
  Smartphone,
  ExternalLink,
  Info
} from 'lucide-react';

export const HowToInstall: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const steps = [
    {
      number: '01',
      title: 'Download Official APK',
      subtitle: 'Official Source Only',
      icon: DownloadCloud,
      description: 'Tap the Download APK button on this official website. Your Android browser will begin downloading the verified SMART_BATTLE.apk package file.',
      tip: 'Check your browser notification bar to confirm download progress.',
    },
    {
      number: '02',
      title: 'Review Android Prompt',
      subtitle: 'Unknown Source Security Dialog',
      icon: ShieldAlert,
      description: 'When tapping the downloaded file, Android displays its standard security prompt: "For your security, your phone is currently not allowed to install unknown apps from this source".',
      tip: 'This is the standard Android security procedure for applications installed outside Google Play Store.',
    },
    {
      number: '03',
      title: 'Authorize Installation',
      subtitle: 'Toggle Permission',
      icon: Settings2,
      description: 'On the prompt, tap "Settings" (or "Details"). Toggle the switch to "Allow from this source" for your browser or file manager, then tap the Back arrow.',
      tip: 'On Android 14/15, you can also select "Install anyway" if prompted by Google Play Protect.',
    },
    {
      number: '04',
      title: 'Install & Launch',
      subtitle: 'Ready to Battle',
      icon: CheckCircle,
      description: 'Tap "Install" on the confirmation screen. Once installation finishes in a few seconds, tap "Open" to launch SMART BATTLE and set up your esports player profile.',
      tip: 'Keep the app updated via our official download page for tournament integrity updates.',
    },
  ];

  return (
    <section id="install" className="py-20 bg-[#060a14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Android Sideload Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            How to Install SMART BATTLE on Android
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Follow these 4 simple steps to safely install the official APK on any Android phone (Android 8.0 or newer).
          </p>
        </div>

        {/* Security Warning Box - Prominent Reminder */}
        <div className="mb-12 bg-amber-950/20 border border-amber-800/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-base mb-1">
              <span>Security Advisory: Official Download Guarantee</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Always download the SMART BATTLE APK directly from our official portal. Never download APK packages from third-party forums, Telegram channels, or mirror websites. Unofficial files may be altered, compromised, or lead to tournament disqualification.
            </p>
          </div>
          <a
            href="#download"
            className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Go to Official APK
          </a>
        </div>

        {/* Step-by-Step Interactive Walkthrough Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStep === idx + 1;
            return (
              <div
                key={step.number}
                onClick={() => setSelectedStep(idx + 1)}
                className={`relative bg-[#0b1329] border rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'border-blue-500 shadow-lg shadow-blue-900/30 ring-1 ring-blue-500' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-blue-500/80 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-white mb-1 font-sans">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-blue-400 mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Practical Tip */}
                <div className="pt-3 border-t border-slate-800/80 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-lg">
                  <Info className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{step.tip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Android System Dialog Explainer */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-bold text-white mb-2">
              Understanding Android's "Unknown Sources" Protection
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              When sideloading apps directly from developers, Android protects users by requesting explicit permission per app (e.g., Chrome, Files by Google). Enabling this permission for SMART BATTLE allows your device to install our official signed tournament package.
            </p>
            
            <div className="inline-flex items-center gap-3 text-xs text-slate-300 bg-[#070c18] border border-slate-700/80 px-4 py-2 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Signed with official release keystore · SHA-256 integrity verified</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
