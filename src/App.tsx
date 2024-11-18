import React, { useState } from 'react';
import { BookOpen, TrendingUp, PiggyBank, LineChart, Wallet, Building2 } from 'lucide-react';
import ModuleCard from './components/ModuleCard';
import SearchBar from './components/SearchBar';
import UserProgress from './components/UserProgress';
import { Module } from './types';

const modules: Module[] = [
  {  
    id: 1,
    title: "Saving Fundamentals",
    description: "Master the basics of investing, from stocks to bonds and everything in between.",
    progress: 75,
    icon: TrendingUp,
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1000",
    category: "Basics",
    estimatedTime: "2.5 hours",
    difficulty: "Beginner",
    link: "/learning_mods/Savings (Published)/index.html"
  },
  {
    id: 2,
    title: "Personal Budgeting",
    description: "Create and maintain a budget that works for your lifestyle.",
    progress: 100,
    icon: PiggyBank,
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    category: "Basics",
    estimatedTime: "1.5 hours",
    difficulty: "Beginner",
    link:"/learning_mods/financial literacy/module1.html" // Added link to the HTML page
  },
  {
    id: 3,
    title: "Technical Analysis",
    description: "Learn to read and interpret pricing details.",
    progress: 30,
    icon: LineChart,
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
    category: "Advanced",
    estimatedTime: "4 hours",
    difficulty: "Advanced",
    link: "/learning_mods/Unit Pricing (Published)/index.html"
  },
  {
    id: 4,
    title: "Credit Score",
    description: "Understand your credit score and credits.",
    progress: 0,
    icon: Wallet,
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000",
    category: "Advanced",
    estimatedTime: "3 hours",
    difficulty: "Intermediate",
    link: "/learning_mods/credit score (Published)/index.html"
  },
  {
    id: 5,
    title: "Real Estate Investment",
    description: "Explore property investment strategies and market analysis.",
    progress: 45,
    icon: Building2,
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    category: "Advanced",
    estimatedTime: "3.5 hours",
    difficulty: "Advanced"
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"progress" | "title">("progress");

  const filteredAndSortedModules = modules
    .filter(module => 
      (selectedCategory === "all" || module.category === selectedCategory) &&
      (module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       module.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "progress") return b.progress - a.progress;
      return a.title.localeCompare(b.title);
    });

  const totalProgress = Math.round(
    modules.reduce((acc, module) => acc + module.progress, 0) / modules.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-10 h-10 text-violet-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-200 to-white bg-clip-text text-transparent">
              WealthWizard Academy
            </h1>
          </div>
          <p className="text-violet-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Embark on your financial journey with our expert-crafted learning modules.
            Master everything from basic concepts to advanced investment strategies.
          </p>
        </div>

        {/* User Progress Overview */}
        <UserProgress totalProgress={totalProgress} completedModules={modules.filter(m => m.progress === 100).length} />

        {/* Search and Filters */}
        <div className="mb-8">
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "Basics", "Advanced"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white/10 text-violet-200 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedModules.map((module, index) => (
            module.link ? (
              <a key={module.id} href={module.link} target="_blank" rel="noopener noreferrer">
                <ModuleCard module={module} index={index} />
              </a>
            ) : (
              <ModuleCard key={module.id} module={module} index={index} />
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
