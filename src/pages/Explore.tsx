import React, { useState } from 'react';
import { FilterIcon, SearchIcon } from 'lucide-react';
import FilmCard from '../components/FilmCard';
const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'];
const films = [{
  id: '1',
  title: 'Oppenheimer',
  year: 2023,
  director: 'Christopher Nolan',
  posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  rating: 4.7,
  genres: ['Drama', 'History', 'Thriller']
}, {
  id: '2',
  title: 'Barbie',
  year: 2023,
  director: 'Greta Gerwig',
  posterUrl: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
  rating: 4.2,
  genres: ['Adventure', 'Comedy', 'Fantasy']
}, {
  id: '3',
  title: 'The Killer',
  year: 2023,
  director: 'David Fincher',
  posterUrl: 'https://image.tmdb.org/t/p/w500/e7Jvsry47JJQruuezjU2X1Z6J77.jpg',
  rating: 4.0,
  genres: ['Action', 'Crime', 'Thriller']
}, {
  id: '4',
  title: 'Past Lives',
  year: 2023,
  director: 'Celine Song',
  posterUrl: 'https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg',
  rating: 4.5,
  genres: ['Drama', 'Romance']
}, {
  id: '5',
  title: 'Killers of the Flower Moon',
  year: 2023,
  director: 'Martin Scorsese',
  posterUrl: 'https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
  rating: 4.6,
  genres: ['Crime', 'Drama', 'History']
}, {
  id: '6',
  title: 'Poor Things',
  year: 2023,
  director: 'Yorgos Lanthimos',
  posterUrl: 'https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
  rating: 4.3,
  genres: ['Romance', 'Sci-Fi', 'Comedy']
}, {
  id: '7',
  title: 'The Holdovers',
  year: 2023,
  director: 'Alexander Payne',
  posterUrl: 'https://image.tmdb.org/t/p/w500/wQBg8XbDVlZJ9Ki7UYxVxjDh3Fw.jpg',
  rating: 4.4,
  genres: ['Comedy', 'Drama']
}, {
  id: '8',
  title: 'Anatomy of a Fall',
  year: 2023,
  director: 'Justine Triet',
  posterUrl: 'https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUobTsPZ.jpg',
  rating: 4.2,
  genres: ['Crime', 'Drama', 'Mystery']
}];
const Explore = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };
  const filteredFilms = selectedGenres.length > 0 ? films.filter(film => film.genres.some(genre => selectedGenres.includes(genre))) : films;
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Films</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-gray-800 rounded-lg p-4 sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg flex items-center">
                <FilterIcon className="h-5 w-5 mr-2 text-indigo-400" />
                Filters
              </h2>
              {selectedGenres.length > 0 && <button className="text-xs text-indigo-400 hover:text-indigo-300" onClick={() => setSelectedGenres([])}>
                  Clear all
                </button>}
            </div>
            <div className="mb-4">
              <div className="relative">
                <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search films..." className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm" />
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Genres</h3>
              <div className="space-y-2">
                {genres.map(genre => <div key={genre} className="flex items-center">
                    <input type="checkbox" id={`genre-${genre}`} checked={selectedGenres.includes(genre)} onChange={() => toggleGenre(genre)} className="h-4 w-4 rounded border-gray-600 text-indigo-600 focus:ring-indigo-500 bg-gray-700" />
                    <label htmlFor={`genre-${genre}`} className="ml-2 text-sm text-gray-300">
                      {genre}
                    </label>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        {/* Films grid */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-400">
              Showing{' '}
              <span className="font-medium text-white">
                {filteredFilms.length}
              </span>{' '}
              results
            </p>
            <div className="flex items-center">
              <span className="text-sm text-gray-400 mr-2">Sort by:</span>
              <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <option>Popularity</option>
                <option>Rating</option>
                <option>Release Date</option>
                <option>Title (A-Z)</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFilms.map(film => <FilmCard key={film.id} {...film} />)}
          </div>
        </div>
      </div>
    </div>;
};
export default Explore;