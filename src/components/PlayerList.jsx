import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';

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
    category: 'Wicket Keeper',
  },
  {
    id: 5,
    name: 'Robert Davis',
    university: 'Cambridge University',
    category: 'Batsman',
  },
];

const getCategoryIcon = (category) => {
  const categoryLower = category.toLowerCase();
  if (categoryLower === 'batsman') {
    return './images/batsman.png';
  } else if (categoryLower === 'bowler') {
    return './images/bowler.png';
  } else {
    return './images/all.png';
  }
};

const PlayerList = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">Tournament Players</h2>
      <div className="grid gap-4">
        {players.map((player) => (
          <div
            key={player.id}
            className="p-3 transition-colors border border-gray-700 rounded-lg bg-white/5 backdrop-blur-sm sm:p-4 hover:bg-white/10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <img 
                src={getCategoryIcon(player.category)}
                alt={`${player.category} icon`}
                className="object-contain w-12 h-12 p-1 rounded-full sm:w-12 sm:h-12 bg-white/10"
              />
              <div className="flex flex-col justify-between flex-1 gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <div>
                    <h3 className="text-base font-medium text-white sm:text-lg">{player.name}</h3>
                    <p className="text-xs text-gray-400 sm:text-sm">{player.university}</p>
                  </div>
                  <span className="inline-block px-2 py-1 text-xs font-medium text-blue-400 rounded-full bg-blue-500/10 w-fit">
                    {player.category}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-white hover:text-blue-400 sm:w-auto"
                  onClick={() => navigate(`/player/${player.id}`)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;