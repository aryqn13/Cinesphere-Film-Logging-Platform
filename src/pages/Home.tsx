import React from 'react';
import { SearchIcon, TrendingUpIcon, ClockIcon, StarIcon } from 'lucide-react';
import FilmCard from '../components/FilmCard';
import ActivityFeed from '../components/ActivityFeed';
const popularFilms = [{
  id: '1',
  title: 'Oppenheimer',
  year: 2023,
  director: 'Christopher Nolan',
  posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  rating: 4.7
}, {
  id: '2',
  title: 'Barbie',
  year: 2023,
  director: 'Greta Gerwig',
  posterUrl: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
  rating: 4.2
}, {
  id: '3',
  title: 'The Killer',
  year: 2023,
  director: 'David Fincher',
  posterUrl: 'https://image.tmdb.org/t/p/w500/e7Jvsry47JJQruuezjU2X1Z6J77.jpg',
  rating: 4.0
}, {
  id: '4',
  title: 'Past Lives',
  year: 2023,
  director: 'Celine Song',
  posterUrl: 'https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg',
  rating: 4.5
}];
const recentlyAdded = [{
  id: '5',
  title: 'Killers of the Flower Moon',
  year: 2023,
  director: 'Martin Scorsese',
  posterUrl: 'https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg'
}, {
  id: '6',
  title: 'Poor Things',
  year: 2023,
  director: 'Yorgos Lanthimos',
  posterUrl: 'https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg'
}, {
  id: '7',
  title: 'The Holdovers',
  year: 2023,
  director: 'Alexander Payne',
  posterUrl: 'https://image.tmdb.org/t/p/w500/wQBg8XbDVlZJ9Ki7UYxVxjDh3Fw.jpg'
}, {
  id: '8',
  title: 'Anatomy of a Fall',
  year: 2023,
  director: 'Justine Triet',
  posterUrl: 'https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUobTsPZ.jpg'
}, {
  id: '9',
  title: 'The Zone of Interest',
  year: 2023,
  director: 'Jonathan Glazer',
  posterUrl: 'https://image.tmdb.org/t/p/w500/AbFtI353N2Pggl5TxV4KJE4zXY8.jpg'
}, {
  id: '10',
  title: 'May December',
  year: 2023,
  director: 'Todd Haynes',
  posterUrl: 'https://image.tmdb.org/t/p/w500/6kCy2ePQ1OwHLRSAuUQ9cxiUTOZ.jpg'
}];
const Home = () => {
  return <div className="w-full bg-gray-900">
      {/* Hero section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/20">
          <img src="https://image.tmdb.org/t/p/original/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg" alt="Featured film backdrop" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">
              Track films you've watched.
              <br />
              Save those you want to see.
              <br />
              Tell your friends what's good.
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Cinesphere is a social platform for film lovers to discover,
              discuss, and share their passion for cinema.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium text-white shadow-lg shadow-indigo-600/30 transition-all">
                Create an account
              </button>
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md font-medium text-white transition-all border border-gray-700">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search bar */}
        <div className="relative mb-10">
          <div className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search for a film..." className="flex-1 ml-2 bg-transparent border-none focus:outline-none text-gray-200 placeholder-gray-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main film content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Popular films */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center">
                  <TrendingUpIcon className="h-6 w-6 mr-2 text-indigo-400" />
                  Popular on Cinesphere
                </h2>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">
                  View all
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {popularFilms.map(film => <FilmCard key={film.id} {...film} />)}
              </div>
            </section>
            {/* Recently added */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center">
                  <ClockIcon className="h-6 w-6 mr-2 text-indigo-400" />
                  Recently Added
                </h2>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">
                  View all
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {recentlyAdded.map(film => <FilmCard key={film.id} {...film} compact />)}
              </div>
            </section>
            {/* Your watchlist preview */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center">
                  <StarIcon className="h-6 w-6 mr-2 text-indigo-400" />
                  Your Watchlist
                </h2>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">
                  View all
                </button>
              </div>
              <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
                <h3 className="text-xl font-medium mb-2">
                  Start building your watchlist
                </h3>
                <p className="text-gray-400 mb-6">
                  Keep track of films you want to watch
                </p>
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium text-white shadow-lg shadow-indigo-600/30 transition-all">
                  Browse films
                </button>
              </div>
            </section>
          </div>
          {/* Activity feed */}
          <div>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>;
};
export default Home;