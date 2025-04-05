
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Share2, Reply } from "lucide-react";

interface Comment {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  content: string;
  time: string;
  likes: number;
}

interface PostItemProps {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  content: string;
  image?: string;
  time: string;
  likes: number;
  comments: number;
  showComments?: boolean;
  postComments?: Comment[];
}

const PostItem = ({
  id,
  userId,
  userName,
  userImage,
  content,
  image,
  time,
  likes,
  comments,
  showComments = false,
  postComments = [],
}: PostItemProps) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="border-b border-gray-800">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Link to={`/profile/${userId}`}>
            <img
              src={userImage}
              alt={userName}
              className="w-12 h-12 rounded-full object-cover"
            />
          </Link>
          <div>
            <Link to={`/profile/${userId}`} className="text-white font-medium">{userName}</Link>
            <p className="text-gray-500 text-xs">{time}</p>
          </div>
        </div>
        
        <p className="text-white mb-3">{content}</p>
        
        {image && (
          <div className="mb-3">
            <img
              src={image}
              alt=""
              className="w-full rounded-md"
            />
          </div>
        )}
        
        <div className="flex gap-6 mb-3">
          <button 
            className="action-button"
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`w-6 h-6 ${liked ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
            <span>{likes}</span>
          </button>
          <Link to={`/post/${id}`} className="action-button">
            <MessageCircle className="w-6 h-6 text-gray-400" />
            <span>{comments}</span>
          </Link>
          <button className="action-button">
            <Share2 className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
      
      {showComments && postComments.length > 0 && (
        <div className="border-t border-gray-800">
          {postComments.map((comment) => (
            <div key={comment.id} className="p-4 border-b border-gray-800 flex">
              <div className="w-10 mr-3">
                <Link to={`/profile/${comment.userId}`}>
                  <img
                    src={comment.userImage}
                    alt={comment.userName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </Link>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <Link to={`/profile/${comment.userId}`} className="text-white font-medium text-sm">
                    {comment.userName}
                  </Link>
                  <span className="text-gray-500 text-xs mb-1">{comment.time}</span>
                </div>
                <p className="text-white text-sm mb-2">{comment.content}</p>
                <div className="flex gap-4">
                  <button className="text-gray-400 text-xs flex items-center gap-1">
                    <Reply className="w-4 h-4" />
                    Reply
                  </button>
                  <button className="text-gray-400 text-xs flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {comment.likes}
                  </button>
                  <button className="text-gray-400 text-xs flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {comments}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostItem;
