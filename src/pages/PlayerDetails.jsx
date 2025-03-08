import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Edit, Trash2, ArrowLeft } from 'lucide-react';

const playerData = {
  id: 1,
  name: 'John Smith',
  university: 'Harvard University',
  category: 'Batsman',
  image: 'https://randomuser.me/api/portraits/men/1.jpg',
  stats: {
    totalRuns: 1250,
    ballsFaced: 1500,
    inningsPlayed: 25,
    wickets: 10,
    oversBowled: 120,
    runsConceded: 600
  }
};

const calculatePlayerScore = (stats) => {
  const battingScore = Math.round(stats.totalRuns / stats.inningsPlayed);
  const bowlingScore = Math.round((stats.wickets / stats.inningsPlayed) * 100);
  return Math.round((battingScore + bowlingScore) / 2);
};

const PlayerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const playerScore = calculatePlayerScore(playerData.stats);

  const handleEdit = () => {
    console.log('Edit player:', id);
  };

  const handleDelete = () => {
    console.log('Delete player:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <Button
        variant="ghost"
        className="text-white mb-4 sm:mb-6"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Players
      </Button>

      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative">
              <img
                src={playerData.image}
                alt={playerData.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-blue-400"
              />
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm font-bold ring-2 ring-white">
                {playerScore}
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{playerData.name}</h1>
              <p className="text-sm sm:text-base text-gray-300">{playerData.university}</p>
              <span className="inline-block px-3 py-1 mt-2 text-xs sm:text-sm font-medium rounded-full bg-blue-500/20 text-blue-400">
                {playerData.category}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              className="flex-1 sm:flex-none text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
              onClick={handleEdit}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button
              variant="ghost"
              className="flex-1 sm:flex-none text-red-400 hover:text-red-300 hover:bg-red-400/10"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard title="Total Runs" value={playerData.stats.totalRuns} />
          <StatCard title="Balls Faced" value={playerData.stats.ballsFaced} />
          <StatCard title="Innings Played" value={playerData.stats.inningsPlayed} />
          <StatCard title="Wickets" value={playerData.stats.wickets} />
          <StatCard title="Overs Bowled" value={playerData.stats.oversBowled} />
          <StatCard title="Runs Conceded" value={playerData.stats.runsConceded} />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
    <h3 className="text-gray-400 text-xs sm:text-sm mb-1">{title}</h3>
    <p className="text-xl sm:text-2xl font-semibold text-white">{value}</p>
  </div>
);

export default PlayerDetails;