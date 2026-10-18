import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowToInstall } from './components/HowToInstall';
import { DownloadSection } from './components/DownloadSection';
import { ReferralSection } from './components/ReferralSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { GitHubSyncModal } from './components/GitHubSyncModal';
import { getReferralCodeFromUrl } from './utils/referral';

export default function App() {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'fairplay' | 'contact' | null>(null);
  const [isGitHubGuideOpen, setIsGitHubGuideOpen] = useState(false);

  useEffect(() => {
    // Detect referral query on initial load
    const detectedRef = getReferralCodeFromUrl();
    if (detectedRef) {
      setReferralCode(detectedRef);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSetCustomRef = (code: string) => {
    setReferralCode(code);
    try {
      sessionStorage.setItem('smart_battle_ref', code);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#070c18] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md font-bold text-xs"
      >
        Skip to main content
      </a>

      {/* 1. Header (Sticky Top Bar Contract) */}
      <Header
        referralCode={referralCode}
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          referralCode={referralCode}
          onDownloadClick={() => scrollToSection('download')}
          onInstallGuideClick={() => scrollToSection('install')}
        />

        {/* 3. App Features */}
        <Features />

        {/* 4. How to Install on Android */}
        <HowToInstall />

        {/* 5. APK Download Center */}
        <DownloadSection referralCode={referralCode} />

        {/* 6. Referral Support */}
        <ReferralSection
          currentRef={referralCode}
          onSetCustomRef={handleSetCustomRef}
        />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* 7. Footer */}
      <Footer
        onOpenModal={(type) => setActiveModal(type)}
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
      />

      {/* Legal & Support Modals */}
      <LegalModals
        isOpen={activeModal !== null}
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />

      {/* GitHub Sync & Hosting Walkthrough Modal */}
      <GitHubSyncModal
        isOpen={isGitHubGuideOpen}
        onClose={() => setIsGitHubGuideOpen(false)}
      />
    </div>
  );
}
