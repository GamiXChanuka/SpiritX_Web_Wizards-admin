import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const topBatsmen = [
  { name: "John Smith", runs: 450 },
  { name: "Michael Johnson", runs: 380 },
  { name: "David Williams", runs: 350 },
  { name: "James Brown", runs: 320 },
  { name: "Robert Davis", runs: 300 },
].sort((a, b) => b.runs - a.runs);

const topBowlers = [
  { name: "Michael Johnson", wickets: 15 },
  { name: "David Williams", wickets: 12 },
  { name: "James Brown", wickets: 10 },
  { name: "Robert Davis", wickets: 8 },
  { name: "John Smith", wickets: 6 },
].sort((a, b) => b.wickets - a.wickets);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
        <p className="text-white font-medium">{label}</p>
        <p className="text-blue-400">
          {payload[0].name}: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const TournamentSummary = () => {
  const totalRuns = topBatsmen.reduce((sum, player) => sum + player.runs, 0);
  const totalWickets = topBowlers.reduce((sum, player) => sum + player.wickets, 0);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Tournament Summary</h1>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2">Overall Runs</h3>
          <p className="text-3xl sm:text-4xl font-bold text-white">{totalRuns}</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Total runs scored in the tournament
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-2">Overall Wickets</h3>
          <p className="text-3xl sm:text-4xl font-bold text-white">{totalWickets}</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Total wickets taken in the tournament
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-6 sm:space-y-8">
        {/* Top Run Scorers */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
            Highest Run Scorers
          </h2>
          <div className="h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topBatsmen} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: '12px' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: '12px' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="runs" 
                  fill="rgba(59, 130, 246, 0.8)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Wicket Takers */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
            Highest Wicket Takers
          </h2>
          <div className="h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topBowlers} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: '12px' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: '12px' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="wickets" 
                  fill="rgba(34, 197, 94, 0.8)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentSummary;