import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const AddPlayer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    category: 'batsman',
    totalRuns: '',
    ballsFaced: '',
    inningsPlayed: '',
    wickets: '',
    oversBowled: '',
    runsConceded: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Navigate back to players list
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Add New Player</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="university" className="block text-sm font-medium text-gray-300 mb-1">
                  University
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="batsman">Batsman</option>
                  <option value="bowler">Bowler</option>
                  <option value="allrounder">All-rounder</option>
                </select>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <label htmlFor="totalRuns" className="block text-sm font-medium text-gray-300 mb-1">
                  Total Runs
                </label>
                <input
                  type="number"
                  id="totalRuns"
                  name="totalRuns"
                  value={formData.totalRuns}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="ballsFaced" className="block text-sm font-medium text-gray-300 mb-1">
                  Balls Faced
                </label>
                <input
                  type="number"
                  id="ballsFaced"
                  name="ballsFaced"
                  value={formData.ballsFaced}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="inningsPlayed" className="block text-sm font-medium text-gray-300 mb-1">
                  Innings Played
                </label>
                <input
                  type="number"
                  id="inningsPlayed"
                  name="inningsPlayed"
                  value={formData.inningsPlayed}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="wickets" className="block text-sm font-medium text-gray-300 mb-1">
                  Wickets
                </label>
                <input
                  type="number"
                  id="wickets"
                  name="wickets"
                  value={formData.wickets}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="oversBowled" className="block text-sm font-medium text-gray-300 mb-1">
                  Overs Bowled
                </label>
                <input
                  type="number"
                  id="oversBowled"
                  name="oversBowled"
                  value={formData.oversBowled}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="runsConceded" className="block text-sm font-medium text-gray-300 mb-1">
                  Runs Conceded
                </label>
                <input
                  type="number"
                  id="runsConceded"
                  name="runsConceded"
                  value={formData.runsConceded}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="ghost"
              className="text-white hover:bg-white/10"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add Player
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlayer;