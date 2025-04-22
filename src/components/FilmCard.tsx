import React from 'react';
import { StarIcon, HeartIcon, MessageCircleIcon, BookmarkIcon } from 'lucide-react';
interface FilmCardProps {
  id: string;
  title: string;
  year: number;
  director: string;
  posterUrl: string;
  rating?: number;
  compact?: boolean;
}
const FilmCard = ({
  id,
  title,
  year,
  director,
  posterUrl,
  rating,
  compact = false
}: FilmCardProps) => {
  return compact ? <div className="relative group">
      <div className="aspect-[2/3] overflow-hidden rounded-md bg-gray-800">
        <img src={posterUrl} alt={`${title} poster`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-sm font-medium truncate">{title}</h3>
        <p className="text-xs text-gray-400">{year}</p>
      </div>
      {rating && <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1 flex items-center">
          <StarIcon className="h-3 w-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs ml-1">{rating}</span>
        </div>}
    </div> : <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-500/30 hover:translate-y-[-4px]">
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-700">
        <img src={posterUrl} alt={`${title} poster`} className="w-full h-full object-cover" />
        {rating && <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5 flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm ml-1 font-medium">{rating}</span>
          </div>}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {title} <span className="text-gray-400 font-normal">({year})</span>
        </h3>
        <p className="text-sm text-gray-400 mb-4">Directed by {director}</p>
        <div className="flex justify-between text-gray-400">
          <button className="flex items-center hover:text-indigo-400">
            <StarIcon className="h-5 w-5 mr-1" />
            <span className="text-xs">Rate</span>
          </button>
          <button className="flex items-center hover:text-pink-400">
            <HeartIcon className="h-5 w-5 mr-1" />
            <span className="text-xs">Like</span>
          </button>
          <button className="flex items-center hover:text-blue-400">
            <MessageCircleIcon className="h-5 w-5 mr-1" />
            <span className="text-xs">Review</span>
          </button>
          <button className="flex items-center hover:text-green-400">
            <BookmarkIcon className="h-5 w-5 mr-1" />
            <span className="text-xs">Watch</span>
          </button>
        </div>
      </div>
    </div>;
};
export default FilmCard;