import React, { useState } from 'react';
import { X, Shield, FileText, Mail, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'fairplay' | 'contact' | null;
}

export const LegalModals: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  if (!isOpen || !type) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactMessage) return;
    setContactSubmitted(true);
    setTimeout(() => {
      // Reset after brief display
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-[#0b1329] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070c18]">
          <div className="flex items-center gap-2">
            {type === 'privacy' && <Shield className="w-5 h-5 text-blue-400" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-blue-400" />}
            {type === 'fairplay' && <AlertTriangle className="w-5 h-5 text-amber-400" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-blue-400" />}
            
            <h3 className="text-lg font-bold text-white uppercase font-sans">
              {type === 'privacy' && 'Privacy Policy (Placeholder Draft)'}
              {type === 'terms' && 'Terms of Service (Placeholder Draft)'}
              {type === 'fairplay' && 'Fair Play & Anti-Cheat Rules'}
              {type === 'contact' && 'Contact Support'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {/* PRIVACY POLICY */}
          {type === 'privacy' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-blue-300 text-xs">
                <strong>Editable Legal Draft:</strong> Replace these sections with your finalized legal counsel documents prior to launching your production service.
              </div>
              <h4 className="font-bold text-white text-base">1. Information We Collect</h4>
              <p>
                SMART BATTLE collects minimal information necessary to deliver tournament brackets, allocate match slots, and authenticate registered players. This includes player display names, in-game player character IDs (IGN), device integrity indicators for anti-cheat verification, and email addresses for critical match alerts.
              </p>
              <h4 className="font-bold text-white text-base">2. How Data is Used</h4>
              <p>
                Collected data is used solely to verify match roster eligibility, deliver custom match room credentials, compute tournament leaderboards, and uphold competitive fair-play standards. We do not sell or rent personal player information to third-party data brokers.
              </p>
              <h4 className="font-bold text-white text-base">3. Device Security & Integrity</h4>
              <p>
                To maintain fair competition in mobile tournaments, the SMART BATTLE application performs local device environment checks (such as verifying unauthorized emulator signatures or root modifications).
              </p>
              <h4 className="font-bold text-white text-base">4. Data Inquiries</h4>
              <p>
                Players may contact support at <code className="text-blue-300 font-mono">{APP_CONFIG.supportEmail}</code> to request account data deletion or review stored competitive records.
              </p>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {type === 'terms' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-blue-300 text-xs">
                <strong>Editable Terms Draft:</strong> Update these terms to reflect your organization's legal structure, tournament formats, and regional operating rules.
              </div>
              <h4 className="font-bold text-white text-base">1. Competitive Platform Use</h4>
              <p>
                SMART BATTLE provides tournament bracket coordination, automated check-ins, and room credential delivery for competitive esports events. Users must be at least the legal age of digital consent in their jurisdiction to participate.
              </p>
              <h4 className="font-bold text-white text-base">2. Strict Prohibition on Gambling</h4>
              <p>
                SMART BATTLE is strictly an esports skill platform. The application does not offer real-money gambling, sports betting, deposit-wagering, or casino games. Any unauthorized betting or wagering outside of approved skill tournaments is strictly prohibited and subject to immediate account termination.
              </p>
              <h4 className="font-bold text-white text-base">3. Code of Conduct & Integrity</h4>
              <p>
                Players agree to compete respectfully. Cheating, exploiting game bugs, sharing room credentials with non-registered players, verbal harassment, or match fixing will result in immediate disqualification and permanent platform ban.
              </p>
              <h4 className="font-bold text-white text-base">4. Referee Authority</h4>
              <p>
                Decisions made by certified SMART BATTLE tournament referees regarding match disputes, point tables, and tie-breakers are final.
              </p>
            </div>
          )}

          {/* FAIR PLAY POLICY */}
          {type === 'fairplay' && (
            <div className="space-y-4">
              <h4 className="font-bold text-white text-base">SMART BATTLE Esports Fair Play Standards</h4>
              <p>
                Our core philosophy is simple: <strong>"PLAY HARDLY WIN SMARTLY"</strong>. Victory belongs to the players who bring superior strategy, mechanical discipline, and honest teamwork.
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-xs mb-1">Zero-Tolerance for Third-Party Hacks</div>
                  <p className="text-slate-400 text-xs">Wallhacks, auto-aim, speed modifiers, or modified APK binaries result in permanent hardware-level disqualification.</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-xs mb-1">No Ghosting or Screen Sharing</div>
                  <p className="text-slate-400 text-xs">Stream delays are mandatory for tournament broadcasts. Ghosting opponent positions is classified as active collusion.</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-xs mb-1">Proof Verification</div>
                  <p className="text-slate-400 text-xs">Captains must take end-screen victory screenshots and record POV upon request by tournament officials.</p>
                </div>
              </div>
            </div>
          )}

          {/* CONTACT & SUPPORT */}
          {type === 'contact' && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-300">
                <span className="block text-slate-400 mb-1">Official Support Desk:</span>
                <span className="font-mono text-blue-400 font-bold text-sm">{APP_CONFIG.supportEmail}</span>
                <p className="text-slate-500 text-[11px] mt-1">
                  (Placeholder support address. Replace with your actual domain email before launch.)
                </p>
              </div>

              {contactSubmitted ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-white font-bold text-sm">Message Sent</div>
                  <p className="text-xs text-slate-400">
                    Thank you. Tournament staff will review your message and reply via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Your Name / Gamer Tag</label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. CaptainApex"
                      className="w-full bg-[#070c18] border border-slate-800 focus:border-blue-500 focus:outline-none text-xs text-white p-2.5 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full bg-[#070c18] border border-slate-800 focus:border-blue-500 focus:outline-none text-xs text-white p-2.5 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Inquiry / Tournament Feedback</label>
                    <textarea
                      rows={3}
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Describe your question or partnership inquiry..."
                      className="w-full bg-[#070c18] border border-slate-800 focus:border-blue-500 focus:outline-none text-xs text-white p-2.5 rounded-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#070c18] border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
