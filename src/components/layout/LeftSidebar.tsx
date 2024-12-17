import { Link } from 'react-router-dom';
import { Home, MessageCircle, User, Settings } from 'lucide-react';

const LeftSidebar = () => {
  const userStats = {
    followers: '2.3k',
    following: '865',
    posts: '80'
  };

  const likedPages = [
    { name: 'React cmt', icon: '⚛️', link: '#' },
    { name: 'Github', icon: '', link: '#' },
    { name: 'Dribbble', icon: '🏀', link: '#' }
  ];

  return (
    <div className="h-screen py-4 px-4">
      {/* Profile Stats */}
      <div className="mb-8 bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div>
            <h2 className="font-semibold text-lg">Man Devlpmt</h2>
            <p className="text-gray-500 text-sm">@mano_dev</p>
          </div>
        </div>
        <div className="flex justify-between text-center py-2">
          <div>
            <div className="font-semibold">{userStats.followers}</div>
            <div className="text-gray-500 text-sm">Follower</div>
          </div>
          <div>
            <div className="font-semibold">{userStats.following}</div>
            <div className="text-gray-500 text-sm">Following</div>
          </div>
          <div>
            <div className="font-semibold">{userStats.posts}</div>
            <div className="text-gray-500 text-sm">Posts</div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="space-y-1 mb-8">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 bg-blue-500 text-white rounded-lg"
        >
          <Home size={20} />
          <span className="font-medium">Home</span>
        </Link>
        <Link
          to="/messages"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <MessageCircle size={20} />
          <span className="font-medium">Messages</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <User size={20} />
          <span className="font-medium">Profile</span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </Link>
      </div>

      {/* Pages You Like */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">PAGE YOU LIKE</h3>
          <span className="text-blue-500 text-sm bg-blue-50 px-2 py-0.5 rounded-full">16</span>
        </div>
        <div className="space-y-3">
          {likedPages.map((page, index) => (
            <Link
              key={index}
              to={page.link}
              className="flex items-center gap-3 py-2 px-3 hover:bg-gray-50 rounded-lg"
            >
              {page.icon ? (
                <span className="text-xl">{page.icon}</span>
              ) : (
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
              )}
              <span className="text-gray-700">{page.name}</span>
            </Link>
          ))}
        </div>
        <button className="w-full mt-4 text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-50 font-medium">
          See All
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
