import React from 'react';
import PlayerList from '../components/PlayerList';
import { ScrollArea } from '../components/ui/scroll-area';
import { Users, Bath as Bat, CircleDot, Trophy } from 'lucide-react';

const players = [
  {
    id: 1,
    name: 'John Smith',
    university: 'Harvard University',
    category: 'Batsman',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    university: 'Stanford University',
    category: 'Bowler',
  },
  {
    id: 3,
    name: 'David Williams',
    university: 'MIT',
    category: 'All-rounder',
  },
  {
    id: 4,
    name: 'James Brown',
    university: 'Oxford University',
    category: 'Bowler',
  },
  {
    id: 5,
    name: 'Robert Davis',
    university: 'Cambridge University',
    category: 'Batsman',
  },
];

const Home = () => {
  const playerStats = {
    batsmen: players.filter(p => p.category === 'Batsman').length,
    bowlers: players.filter(p => p.category === 'Bowler').length,
    allRounders: players.filter(p => p.category === 'All-rounder').length,
  };

  return (
    <main className="container px-4 py-8 mx-auto">
      {/* Header Section */}
      <div className="p-6 mb-8 rounded-lg bg-white/10 backdrop-blur-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="p-4 mb-4 rounded-full bg-blue-500/20">
            <Trophy className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="mb-3 text-4xl font-bold text-transparent text-white md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Spirit11-Admin Dashboard
          </h1>
          <h2 className="mb-4 text-xl font-semibold text-blue-400 md:text-2xl">
            The Ultimate Inter-University Fantasy Cricket Game
          </h2>
          <p className="max-w-2xl text-sm text-center text-gray-300 md:text-base">
            Build your dream team from real university players, analyze statistics, and compete with others for the top spot on the leaderboard. Join the ultimate fantasy cricket experience! 🏏
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid max-w-full grid-cols-1 gap-4 mx-auto mb-8 sm:grid-cols-3">
        <div className="flex items-center justify-between p-5 rounded-lg bg-white/10 backdrop-blur-sm">
          <div>
            <p className="mb-1 text-sm text-gray-400">Batsmen</p>
            <p className="text-2xl font-bold text-white">{playerStats.batsmen}</p>
          </div>
          <div className="p-3 rounded-full bg-blue-500/20">
            <Bat className="w-6 h-6 text-blue-400" />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg bg-white/10 backdrop-blur-sm">
          <div>
            <p className="mb-1 text-sm text-gray-400">Bowlers</p>
            <p className="text-2xl font-bold text-white">{playerStats.bowlers}</p>
          </div>
          <div className="p-3 rounded-full bg-green-500/20">
            <CircleDot className="w-6 h-6 text-green-400" />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg bg-white/10 backdrop-blur-sm">
          <div>
            <p className="mb-1 text-sm text-gray-400">All-rounders</p>
            <p className="text-2xl font-bold text-white">{playerStats.allRounders}</p>
          </div>
          <div className="p-3 rounded-full bg-purple-500/20">
            <Users className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-250px)] rounded-lg bg-white/10 backdrop-blur-lg p-6">
        <PlayerList />
      </ScrollArea>
    </main>
  );
};

export default Home;