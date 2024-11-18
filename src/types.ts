import { LucideIcon } from 'lucide-react';

export interface Module {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: LucideIcon;
  imageUrl: string;
  category: string;
  estimatedTime: string;
  difficulty: string;
}