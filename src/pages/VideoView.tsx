
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, MessageCircle, Share2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data
const mockVideoData = {
  id: "1",
  userId: "jay",
  userName: "Jay Doe",
  userImage: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png",
  videoUrl: "/lovable-uploads/922b807e-0475-4957-bdb5-3fdffba7c4a1.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...",
  likes: 200,
  comments: 200,
  time: "1h ago",
};

const VideoView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="h-screen bg-black relative">
      {/* Video content (using image as placeholder) */}
      <img
        src={mockVideoData.videoUrl}
        alt=""
        className="w-full h-full object-cover"
      />
      
      {/* Back button */}
      <button 
        className="absolute top-4 left-4 text-white"
        onClick={handleBack}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      
      {/* Action buttons on right */}
      <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6">
        <button 
          className="flex flex-col items-center gap-1"
          onClick={() => setLiked(!liked)}
        >
          <Heart className={`w-8 h-8 ${liked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
          <span className="text-white text-xs">{mockVideoData.likes}</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <MessageCircle className="w-8 h-8 text-white" />
          <span className="text-white text-xs">{mockVideoData.comments}</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <Share2 className="w-8 h-8 text-white" />
          <span className="text-white text-xs">Share</span>
        </button>
      </div>
      
      {/* Footer info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <Link to={`/profile/${mockVideoData.userId}`} className="flex items-center gap-3">
          <img
            src={mockVideoData.userImage}
            alt={mockVideoData.userName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-white font-medium">{mockVideoData.userName}</h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-xs">{mockVideoData.time}</span>
              <button className="bg-white/20 text-white text-xs rounded-full px-3 py-1">
                Follow
              </button>
            </div>
          </div>
        </Link>
        <p className="text-white mt-3">{mockVideoData.description}</p>
      </div>
    </div>
  );
};

export default VideoView;
