import React from 'react';
import { CalendarIcon, FilmIcon, UserIcon, UsersIcon, PencilIcon, SettingsIcon, StarIcon } from 'lucide-react';
import FilmCard from '../components/FilmCard';
const recentlyWatched = [{
  id: '1',
  title: 'Oppenheimer',
  year: 2023,
  director: 'Christopher Nolan',
  posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  rating: 4.5
}, {
  id: '2',
  title: 'Past Lives',
  year: 2023,
  director: 'Celine Song',
  posterUrl: 'https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg',
  rating: 5.0
}, {
  id: '3',
  title: 'The Killer',
  year: 2023,
  director: 'David Fincher',
  posterUrl: 'https://image.tmdb.org/t/p/w500/e7Jvsry47JJQruuezjU2X1Z6J77.jpg',
  rating: 3.5
}, {
  id: '4',
  title: 'Barbie',
  year: 2023,
  director: 'Greta Gerwig',
  posterUrl: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
  rating: 4.0
}];
const favoriteFilms = [{
  id: '5',
  title: 'Parasite',
  year: 2019,
  director: 'Bong Joon-ho',
  posterUrl: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
  rating: 5.0
}, {
  id: '6',
  title: 'The Social Network',
  year: 2010,
  director: 'David Fincher',
  posterUrl: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg',
  rating: 4.5
}, {
  id: '7',
  title: 'Arrival',
  year: 2016,
  director: 'Denis Villeneuve',
  posterUrl: 'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg',
  rating: 5.0
}, {
  id: '8',
  title: 'Whiplash',
  year: 2014,
  director: 'Damien Chazelle',
  posterUrl: 'https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg',
  rating: 5.0
}];
const Profile = () => {
  return <div className="w-full bg-gray-900">
      {/* Profile header */}
      <div className="relative h-48 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba" alt="Profile cover" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 sm:-mt-24 pb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end">
            <div className="relative">
              <img className="h-32 w-32 rounded-full ring-4 ring-gray-900 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" />
              <button className="absolute bottom-0 right-0 bg-gray-800 rounded-full p-1.5 border border-gray-700 hover:bg-gray-700 transition-colors">
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h1 className="text-2xl font-bold">David Wilson</h1>
              <p className="text-gray-400">@davidwilson • Member since 2021</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-auto">
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-sm font-medium border border-gray-700 transition-colors">
                <SettingsIcon className="h-4 w-4 inline mr-1" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
            <div className="flex justify-center mb-2">
              <FilmIcon className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="text-2xl font-bold">247</div>
            <div className="text-sm text-gray-400">Films watched</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
            <div className="flex justify-center mb-2">
              <StarIcon className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="text-2xl font-bold">183</div>
            <div className="text-sm text-gray-400">Films rated</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
            <div className="flex justify-center mb-2">
              <UsersIcon className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="text-2xl font-bold">128</div>
            <div className="text-sm text-gray-400">Following</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
            <div className="flex justify-center mb-2">
              <UserIcon className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="text-2xl font-bold">96</div>
            <div className="text-sm text-gray-400">Followers</div>
          </div>
        </div>
        {/* Bio */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p className="text-gray-300">
            Film enthusiast and aspiring screenwriter. I love psychological
            thrillers, sci-fi, and anything directed by Denis Villeneuve. Always
            looking for recommendations and discussions about film theory and
            cinematography.
          </p>
        </div>
        {/* Recently watched */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-indigo-400" />
              Recently Watched
            </h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300">
              View all
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recentlyWatched.map(film => <FilmCard key={film.id} {...film} />)}
          </div>
        </section>
        {/* Favorites */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <StarIcon className="h-5 w-5 mr-2 text-indigo-400" />
              Favorites
            </h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300">
              View all
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {favoriteFilms.map(film => <FilmCard key={film.id} {...film} />)}
          </div>
        </section>
      </div>
    </div>;
};
export default Profile;