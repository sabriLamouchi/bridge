import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'default' | 'small' | 'large';
  className?: string;
}

const defaultImage = '/assets/default-avatar.svg'; // Make sure this image exists in your public folder

export const Avatar = ({ src, alt = "User avatar", size = 'default', className }: AvatarProps) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-10 h-10',
    large: 'w-12 h-12'
  };

  return (
    <div className={cn(
      sizeClasses[size],
      "rounded-full overflow-hidden flex items-center justify-center bg-slate-200 dark:bg-slate-800",
      className
    )}>
      <img
        src={src || defaultImage}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.src !== defaultImage) {
            target.src = defaultImage;
          }
        }}
      />
    </div>
  );
};

export default Avatar;
