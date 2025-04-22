import React from 'react';
import { StarIcon, HeartIcon, MessageCircleIcon } from 'lucide-react';
interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  type: 'watched' | 'rated' | 'reviewed' | 'liked';
  film: {
    title: string;
    year: number;
    posterUrl: string;
  };
  timestamp: string;
  rating?: number;
  review?: string;
}
const activities: ActivityItem[] = [{
  id: '1',
  user: {
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  type: 'watched',
  film: {
    title: 'Dune',
    year: 2021,
    posterUrl: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg'
  },
  timestamp: '2 hours ago'
}, {
  id: '2',
  user: {
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  type: 'rated',
  film: {
    title: 'Everything Everywhere All at Once',
    year: 2022,
    posterUrl: 'https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg'
  },
  rating: 4.5,
  timestamp: '5 hours ago'
}, {
  id: '3',
  user: {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  type: 'reviewed',
  film: {
    title: 'The Batman',
    year: 2022,
    posterUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg'
  },
  rating: 4,
  review: 'Atmospheric, brooding and brilliantly crafted. Pattinson delivers a stellar performance as the caped crusader.',
  timestamp: '1 day ago'
}, {
  id: '4',
  user: {
    name: 'David Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  type: 'liked',
  film: {
    title: 'Top Gun: Maverick',
    year: 2022,
    posterUrl: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg'
  },
  timestamp: '2 days ago'
}];
const ActivityFeed = () => {
  return <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="border-b border-gray-700 p-4">
        <h2 className="text-lg font-semibold">Friend Activity</h2>
      </div>
      <div className="divide-y divide-gray-700">
        {activities.map(activity => <div key={activity.id} className="p-4">
            <div className="flex items-start">
              <img src={activity.user.avatar} alt={activity.user.name} className="h-10 w-10 rounded-full mr-3" />
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">{activity.user.name}</span>
                  <span className="mx-1 text-gray-500">•</span>
                  <span className="text-sm text-gray-400">
                    {activity.timestamp}
                  </span>
                </div>
                <div className="mt-1">
                  <p className="text-sm">
                    {activity.type === 'watched' && 'watched'}
                    {activity.type === 'rated' && 'rated'}
                    {activity.type === 'reviewed' && 'reviewed'}
                    {activity.type === 'liked' && 'liked'}
                    <span className="font-medium">
                      {' '}
                      {activity.film.title}
                    </span>{' '}
                    ({activity.film.year})
                    {activity.rating && <span className="inline-flex items-center ml-1">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1">{activity.rating}</span>
                      </span>}
                  </p>
                  {activity.review && <p className="text-sm mt-2 text-gray-300 italic">
                      "{activity.review}"
                    </p>}
                </div>
              </div>
              <div className="ml-3 flex-shrink-0">
                <div className="h-16 w-12 overflow-hidden rounded bg-gray-700">
                  <img src={activity.film.posterUrl} alt={activity.film.title} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
            <div className="mt-3 flex space-x-4 text-sm text-gray-400">
              <button className="flex items-center hover:text-pink-400">
                <HeartIcon className="h-4 w-4 mr-1" />
                <span>Like</span>
              </button>
              <button className="flex items-center hover:text-blue-400">
                <MessageCircleIcon className="h-4 w-4 mr-1" />
                <span>Comment</span>
              </button>
            </div>
          </div>)}
      </div>
    </div>;
};
export default ActivityFeed;