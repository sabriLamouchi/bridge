import { useState } from 'react';
import { Image, Video, Calendar, PenLine } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar } from '../ui/Avatar';
import CreatePostDrawer from './CreatePostDrawer';

// Temporary default user until authentication is implemented
const defaultUser = {
  firstName: 'Guest',
  lastName: 'User',
  username: 'guest',
  avatar: undefined // This will use our default avatar
};

const CreatePost = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="p-4 bg-white dark:bg-gray-900">
        <div className="flex items-start space-x-3">
          <Avatar 
            src={defaultUser.avatar}
            alt={`${defaultUser.firstName} ${defaultUser.lastName}'s avatar`}
            size="default"
          />
          <div className="flex-1">
            <button
              onClick={handleOpenDrawer}
              className="w-full text-left px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
            >
              What's on your mind?
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t dark:border-gray-800 pt-3">
          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={handleOpenDrawer}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <Image className="w-5 h-5" />
              <span className="text-sm font-medium">Photo</span>
            </button>

            <button
              type="button"
              onClick={handleOpenDrawer}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <Video className="w-5 h-5" />
              <span className="text-sm font-medium">Video</span>
            </button>

            <button
              type="button"
              onClick={handleOpenDrawer}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Event</span>
            </button>

            <button
              type="button"
              onClick={handleOpenDrawer}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <PenLine className="w-5 h-5" />
              <span className="text-sm font-medium">Write an Article</span>
            </button>
          </div>
        </div>
      </div>

      <CreatePostDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        defaultUser={defaultUser}
      />
    </>
  );
};

export default CreatePost;
