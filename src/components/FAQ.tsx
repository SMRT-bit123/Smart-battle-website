import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Is the SMART BATTLE APK free to download?',
      answer: 'Yes, downloading and installing the official SMART BATTLE application from this website is completely free. Organized esports brackets and community tournaments are open for registration according to individual tournament rules.',
    },
    {
      question: 'Why does Android warn about "unknown apps" when installing the APK?',
      answer: 'Android classifies any application installed directly from a web browser or file manager rather than the Google Play Store as an "unknown source". Because SMART BATTLE distributes direct tournament builds through our official portal, you simply need to tap Settings and enable "Allow from this source" for your browser to proceed with the official signed APK.',
    },
    {
      question: 'Are emulators or rooted Android devices allowed in tournaments?',
      answer: 'To ensure absolute competitive integrity, emulator use depends on specific tournament category rules. Standard mobile-only brackets enforce hardware checks prohibiting PC emulators and unapproved modifications. Always review tournament tier requirements before checking into a match room.',
    },
    {
      question: 'How do I receive my match room ID and slot assignment?',
      answer: 'Once you or your team captain completes the match check-in, SMART BATTLE delivers the Custom Room ID and password directly inside your match hub roughly 10–15 minutes before scheduled match start.',
    },
    {
      question: 'When will the official APK download link be active?',
      answer: 'The application is currently undergoing final quality assurance, keystore certification, and tournament anti-cheat verification. You can enter your email in the download section above to be alerted the minute the APK is released.',
    },
    {
      question: 'What should I do if a match result is disputed?',
      answer: 'Team captains can submit end-of-match screenshot proofs directly through the in-app dispute portal. Official referees review spectator recordings and submitted screenshots before certifying the final point table.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#070c18] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Player Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Everything you need to know about downloading, installing, and competing in SMART BATTLE.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#0b1329] border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-sans">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
