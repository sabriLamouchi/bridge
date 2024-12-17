import { X, Image, Video, Calendar, PenLine, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar } from '../ui/Avatar';
import { useEffect, useRef } from 'react';

interface CreatePostDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultUser: {
    firstName: string;
    lastName: string;
    username: string;
    avatar?: string;
  };
}

const CreatePostDrawer = ({ isOpen, onClose, defaultUser }: CreatePostDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={drawerRef}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-2xl mx-4 transform transition-all"
      >
        {/* Header */}
        <div className="border-b dark:border-gray-800 p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Create Post</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 flex items-center space-x-3">
          <Avatar
            src={defaultUser.avatar}
            alt={`${defaultUser.firstName} ${defaultUser.lastName}'s avatar`}
            size="default"
          />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {defaultUser.firstName} {defaultUser.lastName}
            </h3>
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-sm"
            >
              <Globe className="w-4 h-4 mr-1" />
              Public
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Post Content */}
        <div className="p-4">
          <textarea
            ref={textareaRef}
            placeholder="What's on your mind?"
            className="w-full min-h-[150px] bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500 resize-none"
          />
        </div>

        {/* Add to your post */}
        <div className="p-4 border-t dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Add to your post</h4>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                <Image className="w-6 h-6 text-green-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                <Video className="w-6 h-6 text-blue-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                <Calendar className="w-6 h-6 text-yellow-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                <PenLine className="w-6 h-6 text-purple-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Post Button */}
        <div className="p-4 border-t dark:border-gray-800">
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostDrawer;
