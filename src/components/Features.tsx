import React, { useState } from 'react';
import { 
  Trophy, 
  KeyRound, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Bell, 
  Target,
  Swords,
  CheckCircle2
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

export const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const features: FeatureItem[] = [
    {
      id: 'brackets',
      category: 'tournaments',
      title: 'Tournament Brackets & Scheduling',
      description: 'Structured single elimination, double elimination, and round-robin tournament schedules with verified check-in countdowns.',
      icon: Trophy,
      highlights: ['Automated bracket seeding', 'Check-in time window confirmation', 'Live match status tracker'],
    },
    {
      id: 'room-dispatch',
      category: 'matchmaking',
      title: 'Secure Room & Slot Allocation',
      description: 'Instant delivery of Custom Room ID and Room Password to verified registered players right before match start.',
      icon: KeyRound,
      highlights: ['Authorized slot assignment', 'Direct copy-to-clipboard room code', 'Zero leak captain access control'],
    },
    {
      id: 'fair-play',
      category: 'integrity',
      title: 'Strict Fair-Play Rule Engine',
      description: 'Standardized competitive rules preventing unofficial emulators, unverified modifications, and unfair advantage.',
      icon: ShieldCheck,
      highlights: ['Mobile-only integrity checks', 'Dispute submission with screenshot proof', 'Transparent referee guidelines'],
    },
    {
      id: 'roster',
      category: 'squads',
      title: 'Solo, Duo & Squad Roster Tools',
      description: 'Complete team management with captain privileges, player game IDs, substitute registration, and squad invitations.',
      icon: Users,
      highlights: ['Captain team controls', 'In-game character ID verification', 'Quick substitute rotation'],
    },
    {
      id: 'scoring',
      category: 'tournaments',
      title: 'Competitive Point Tables & Scoring',
      description: 'Automated points calculation combining placement ranking and confirmed kill points according to tournament formats.',
      icon: BarChart3,
      highlights: ['Official esports point matrix', 'Match result verification audit', 'Squad rank ladder'],
    },
    {
      id: 'notifications',
      category: 'matchmaking',
      title: 'Match Readiness & Alert Engine',
      description: 'Push notifications notify players when brackets go live, match slots open, or when a referee issues a briefing.',
      icon: Bell,
      highlights: ['15-minute slot standby reminder', 'Room password release notification', 'Schedule change alerts'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'tournaments', label: 'Tournaments' },
    { id: 'matchmaking', label: 'Match Rooms' },
    { id: 'integrity', label: 'Fair Play' },
    { id: 'squads', label: 'Rosters' },
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory);

  return (
    <section id="features" className="py-20 bg-[#070c18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              <Swords className="w-4 h-4" />
              <span>Core Application Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Built Exclusively for Competitive Esports
            </h2>
            <p className="mt-3 text-base text-slate-400">
              SMART BATTLE provides tournament organizers and competitive mobile squads with the tools required for transparent, verified esports competitions.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Accessible Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative bg-[#0b1329] border border-slate-800 hover:border-blue-600/60 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Unboxed Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {feat.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 font-sans">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {feat.description}
                  </p>
                </div>

                {/* Capability Bullet Points */}
                <div className="pt-4 border-t border-slate-800/70 space-y-2">
                  {feat.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitive Ethics Statement */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-blue-950/40 border border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Skill & Strategy Standard</div>
              <div className="text-xs text-slate-400">
                SMART BATTLE is an esports tournament organizer strictly dedicated to competitive gameplay and match bracket logistics.
              </div>
            </div>
          </div>

          <a
            href="#install"
            className="text-xs font-bold text-blue-400 hover:text-blue-300 uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5 transition-colors"
          >
            <span>Installation Guide</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
