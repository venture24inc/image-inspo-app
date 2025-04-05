
import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface VideoPlayerProps {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  videoUrl: string;
  description: string;
  likes: number;
  comments: number;
  time: string;
  showControls?: boolean;
}

const VideoPlayer = ({
  id,
  userId,
  userName,
  userImage,
  videoUrl,
  description,
  likes,
  comments,
  time,
  showControls = true,
}: VideoPlayerProps) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="relative h-full w-full">
      {/* Using an image as placeholder for the video */}
      <img
        src={videoUrl}
        alt=""
        className="w-full h-full object-cover"
      />
      
      {/* Video overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-16">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={userImage}
            alt={userName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{userName}</span>
            <span className="text-white/70 text-xs">{time}</span>
            <button className="bg-white/20 text-white text-xs rounded-full px-2 py-0.5">
              Follow
            </button>
          </div>
        </div>
        
        <p className="text-white text-sm mb-3 line-clamp-2">{description}</p>
      </div>
      
      {/* Right side actions */}
      {showControls && (
        <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6">
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => setLiked(!liked)}
          >
            <div className="bg-black/30 p-2 rounded-full">
              <Heart className={`w-6 h-6 ${liked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
            </div>
            <span className="text-white text-xs">{likes}</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <div className="bg-black/30 p-2 rounded-full">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs">{comments}</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <div className="bg-black/30 p-2 rounded-full">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs">Share</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
