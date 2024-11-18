import React from 'react';
import { Clock, Award } from 'lucide-react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  const Icon = module.icon;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-red-400';
      default: return 'text-violet-400';
    }
  };

  return (
    <div 
      className="group relative bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.15]"
      style={{
        animation: `fadeSlideIn 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent z-10" />
      
      {/* Background Image */}
      <img 
        src={module.imageUrl} 
        alt={module.title}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
      />

      {/* Content */}
      <div className="relative z-20 p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-violet-500/20 p-2 rounded-lg backdrop-blur-sm">
            <Icon className="w-6 h-6 text-violet-400" />
          </div>
          <span className="text-violet-200 text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
            {module.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
          {module.title}
        </h3>
        <p className="text-violet-200 mb-4 flex-grow">{module.description}</p>

        {/* Module Details */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-violet-400" />
            <span className="text-violet-200">{module.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-violet-400" />
            <span className={getDifficultyColor(module.difficulty)}>{module.difficulty}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-violet-200">Progress</span>
            <span className="text-white font-medium">{module.progress}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-1000"
              style={{ width: `${module.progress}%` }}
            />
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98] backdrop-blur-sm">
          {module.progress === 0 ? 'Start Now' : module.progress === 100 ? 'Review Module' : 'Continue Learning'}
        </button>
      </div>
    </div>
  );
}

export default ModuleCard;