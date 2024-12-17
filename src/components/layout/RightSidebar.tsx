import { Button } from '../ui/button';
import { Avatar } from '../ui/Avatar';

interface SuggestedUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar?: string;
  community?: string;
  mutualFriends?: number;
}

// Temporary data until we implement the backend
const suggestedUsers: SuggestedUser[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    community: 'React Developers',
    mutualFriends: 12
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    username: 'janesmith',
    community: 'UI/UX Design',
    mutualFriends: 8
  },
  {
    id: '3',
    firstName: 'Mike',
    lastName: 'Johnson',
    username: 'mikejohnson',
    community: 'Web Development',
    mutualFriends: 15
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Wilson',
    username: 'sarahwilson',
    community: 'JavaScript',
    mutualFriends: 6
  }
];

const trendingTopics = [
  { id: 1, name: '#WebDev', posts: '1.2k' },
  { id: 2, name: '#JavaScript', posts: '2.3k' },
  { id: 3, name: '#React', posts: '1.8k' },
  { id: 4, name: '#TailwindCSS', posts: '956' },
  { id: 5, name: '#TypeScript', posts: '1.5k' }
];

const RightSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="sticky top-0 bg-white dark:bg-gray-900 py-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
        </div>
      </div>

      {/* Based on your communities */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Based on your communities
          </h2>
          <div className="space-y-4">
            {suggestedUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar 
                    src={user.avatar}
                    alt={`${user.firstName} ${user.lastName}'s avatar`}
                    size="default"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      @{user.username}
                    </p>
                    {user.community && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {user.community}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 dark:hover:bg-blue-900"
                >
                  Follow
                </Button>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            className="w-full mt-4 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900"
          >
            Show more
          </Button>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Trending Topics
          </h2>
          <div className="space-y-4">
            {trendingTopics.map((topic) => (
              <div key={topic.id} className="flex items-center justify-between">
                <span className="text-blue-500 hover:underline cursor-pointer">
                  {topic.name}
                </span>
                <span className="text-sm text-gray-500">{topic.posts} posts</span>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            className="w-full mt-4 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900"
          >
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
