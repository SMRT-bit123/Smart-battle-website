import React, { useState } from 'react';
import { X, GitBranch, Terminal, Globe, Check, Copy, ExternalLink, Code2, Server } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface GitHubSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubSyncModal: React.FC<GitHubSyncModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const repoName = APP_CONFIG.githubRepoName; // "smart-battle-download"

  const codeBlocks = [
    {
      title: '1. Initialize & Connect to GitHub Repository',
      description: 'Run these commands in your project directory to push the source code to your GitHub repo:',
      command: `git init
git add .
git commit -m "Fix Vite and esbuild dependency conflict for Cloudflare Pages"
git branch -M main
git remote add origin https://github.com/SMRT-bit123/SMART-BATTLE-DOWNLOAD.git
git push -u origin main`,
    },
    {
      title: '2. Connecting the Actual APK File When Ready',
      description: 'Once you build or upload your signed Android APK to GitHub Releases, Cloudflare R2, or AWS S3:',
      command: `// Open src/config/appConfig.ts and set your direct download URL:
export const APP_CONFIG: AppConfig = {
  ...
  apkDownloadUrl: "https://github.com/<YOUR_USERNAME>/${repoName}/releases/download/v1.0.0/SMART_BATTLE.apk",
  ...
};`,
    },
    {
      title: '3. Deploy for 100% Free Static Hosting',
      description: 'Build command and output directory for Cloudflare Pages, Vercel, Netlify, or GitHub Pages:',
      command: `Build Command: npm run build
Output Directory: dist
Node Version: 18+ or 20+`,
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-[#0b1329] border border-blue-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070c18]">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-blue-400" />
            <h3 className="text-base sm:text-lg font-bold text-white uppercase font-sans">
              GitHub Sync & Deployment Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          
          <div className="p-3.5 bg-blue-950/40 border border-blue-800/60 rounded-xl text-xs text-blue-300 flex items-center justify-between">
            <div>
              <span className="block text-slate-400 text-[11px]">Target Repository Name:</span>
              <span className="font-mono font-bold text-white text-sm">{repoName}</span>
            </div>
            <span className="text-[11px] bg-blue-900/60 text-blue-200 px-2.5 py-1 rounded font-semibold border border-blue-700">
              Vite + React + Tailwind
            </span>
          </div>

          {/* Steps */}
          {codeBlocks.map((block, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span>{block.title}</span>
                </h4>
                <button
                  onClick={() => handleCopy(block.command, idx)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors cursor-pointer"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400">{block.description}</p>

              <pre className="p-3.5 bg-[#050811] border border-slate-800 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto whitespace-pre leading-relaxed select-all">
                {block.command}
              </pre>
            </div>
          ))}

          {/* Recommended Hosting Options */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Recommended Free Hosting Services</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="font-bold text-white mb-1">Cloudflare Pages</div>
                <div className="text-slate-400 text-[11px]">Free unlimited bandwidth, lightning-fast edge CDN, automated GitHub push builds.</div>
              </div>

              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="font-bold text-white mb-1">Vercel</div>
                <div className="text-slate-400 text-[11px]">Free Hobby tier, zero-config Vite detection, custom domains with automatic HTTPS.</div>
              </div>

              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="font-bold text-white mb-1">GitHub Pages</div>
                <div className="text-slate-400 text-[11px]">Direct integration with your smart-battle-download repo using GitHub Actions.</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#070c18] border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
