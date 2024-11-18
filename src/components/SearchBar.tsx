import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: "progress" | "title";
  setSortBy: (sort: "progress" | "title") => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400" />
        <input
          type="text"
          placeholder="Search modules..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg text-violet-200 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-violet-200">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "progress" | "title")}
          className="bg-white/10 text-violet-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
        >
          <option value="progress">Progress</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;