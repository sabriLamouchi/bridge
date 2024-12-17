import { useState, useEffect } from 'react';
import LeftSidebar from '../components/layout/LeftSidebar';
import RightSidebar from '../components/layout/RightSidebar';
import CreatePost from '../components/post/CreatePost';
import Post from '../components/post/Post';
import Header from '../components/layout/Header';
import { Menu, Loader2, MessageSquarePlus } from 'lucide-react';
import '../styles/layout.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchPosts } from '../store/slices/postSlice';

const HomePage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          <p className="text-gray-500 dark:text-gray-400">Loading posts...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
          <div className="text-red-500 text-center">
            <p className="text-lg font-semibold">Oops! Something went wrong</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      );
    }

    if (!posts || posts.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-[50vh] space-y-6 px-4">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <MessageSquarePlus className="w-8 h-8 text-blue-500" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              No Posts Yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
              Be the first to share something with the community! Create a post to get started.
            </p>
          </div>
        </div>
      );
    }

    return posts.map((post) => (
      <Post 
        key={post.id}
        user={post.user}
        content={post.content}
        image={post.image}
        timestamp={post.timestamp}
        stats={post.stats}
        comments={post.comments}
      />
    ));
  };

  return (
    <div className={`layout-container ${showMobileMenu ? 'mobile-menu-active' : ''}`}>
      <Header />
      
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <Menu size={24} />
      </button>

      <div className="main-wrapper">
        <div className="flex pt-14">
          {/* Left Sidebar */}
          <aside className="sidebar left-sidebar">
            <LeftSidebar />
          </aside>

          {/* Main Content */}
          <main className="main-content">
            <div className="main-content-wrapper">
              {/* Section Header */}
              <header className="sticky top-14 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-100 dark:bg-gray-800/80 dark:border-gray-700">
                <div className="flex items-center justify-between h-14 px-4">
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">Home</h1>
                </div>
              </header>

              {/* Create Post */}
              <div className="border-b border-gray-100 dark:border-gray-700">
                <CreatePost />
              </div>

              {/* Posts Feed */}
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {renderContent()}
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="sidebar right-sidebar">
            <div className="px-4">
              <RightSidebar />
            </div>
          </aside>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {showMobileMenu && (
        <div 
          className="mobile-overlay"
          onClick={() => setShowMobileMenu(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
