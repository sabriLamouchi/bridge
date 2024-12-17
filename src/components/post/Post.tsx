import { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Bookmark } from 'lucide-react';
import { User, PostStats, Comment } from '../../types/post.types';
import { Button } from '../ui/button';
import { Avatar } from '../ui/Avatar';
import { cn } from '@/lib/utils';

interface PostProps {
  user: User;
  content: string;
  image?: string;
  timestamp: string;
  stats: PostStats;
  comments: Comment[];
}

const Post = ({ user, content, image, timestamp, stats, comments }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isReposted, setIsReposted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Add API call here
  };

  const handleRepost = () => {
    setIsReposted(!isReposted);
    // Add API call here
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Add API call here
  };

  return (
    <article className="p-4 border-b border-gray-100 dark:border-gray-800">
      {/* Post Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <Avatar 
            src={user.avatar}
            alt={`${user.firstName} ${user.lastName}'s avatar`}
            size="default"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {user.firstName} {user.lastName}
              </h2>
              {user.username && (
                <span className="text-gray-500 dark:text-gray-400">
                  @{user.username}
                </span>
              )}
              <span className="text-gray-500 dark:text-gray-400">·</span>
              <span className="text-gray-500 dark:text-gray-400">{timestamp}</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Post Content */}
      <div className="mt-3 space-y-3">
        <p className="text-gray-900 dark:text-white whitespace-pre-wrap">{content}</p>
        {image && (
          <img
            src={image}
            alt="Post attachment"
            className="rounded-lg max-h-96 w-full object-cover"
          />
        )}
      </div>

      {/* Post Stats */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button
            onClick={handleLike}
            className={cn(
              "flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors",
              isLiked && "text-red-500"
            )}
          >
            <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
            <span>{stats.likes}</span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{stats.comments}</span>
          </button>

          <button
            onClick={handleRepost}
            className={cn(
              "flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors",
              isReposted && "text-green-500"
            )}
          >
            <Repeat2 className="w-5 h-5" />
            <span>{stats.reposts}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
            <Share className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={handleSave}
          className={cn(
            "text-gray-500 hover:text-blue-500 transition-colors",
            isSaved && "text-blue-500"
          )}
        >
          <Bookmark className={cn("w-5 h-5", isSaved && "fill-current")} />
        </button>
      </div>

      {/* Comments Section */}
      {showComments && comments.length > 0 && (
        <div className="mt-4 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3 pl-12">
              <Avatar 
                src={comment.user.avatar}
                alt={`${comment.user.firstName} ${comment.user.lastName}'s avatar`}
                size="small"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {comment.user.firstName} {comment.user.lastName}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">·</span>
                  <span className="text-gray-500 dark:text-gray-400">{comment.timestamp}</span>
                </div>
                <p className="text-gray-900 dark:text-white mt-1">{comment.content}</p>
                {comment.likes && (
                  <div className="flex items-center space-x-2 mt-2 text-gray-500">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{comment.likes}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default Post;
