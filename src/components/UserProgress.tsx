import React from 'react';
import { Award, Trophy } from 'lucide-react';

interface UserProgressProps {
  totalProgress: number;
  completedModules: number;
}

const UserProgress: React.FC<UserProgressProps> = ({ totalProgress, completedModules }) => {
  return (
    <div className="mb-12 bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-violet-500/20 p-3 rounded-lg">
            <Trophy className="w-8 h-8 text-violet-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Overall Progress</h3>
            <div className="mt-2 h-2 bg-white/10 rounded-full w-48">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-1000"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
            <p className="mt-1 text-violet-200">{totalProgress}% Complete</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-violet-500/20 p-3 rounded-lg">
            <Award className="w-8 h-8 text-violet-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Achievements</h3>
            <p className="text-violet-200">
              {completedModules} {completedModules === 1 ? 'module' : 'modules'} completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProgress;