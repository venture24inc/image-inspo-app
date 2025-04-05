
import { MessageCircle, Share } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileHeaderProps {
  profileImage: string;
  name: string;
  occupation: string;
  following: number;
  followers: number;
  likes: number;
  isCurrentUser?: boolean;
}

const ProfileHeader = ({
  profileImage,
  name,
  occupation,
  following,
  followers,
  likes,
  isCurrentUser = false,
}: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center pt-6 pb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <img
          src={profileImage}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-2xl font-bold text-white mb-1">{name}</h1>
      <p className="text-gray-400 mb-4">{occupation}</p>
      
      <div className="flex gap-4 mb-6">
        {isCurrentUser ? (
          <>
            <Link to="/messages" className="rounded-full bg-gray-800 p-2">
              <MessageCircle className="w-6 h-6 text-white" />
            </Link>
            <button className="bg-app-gold text-white px-6 py-2 rounded-full font-medium">
              Follow
            </button>
            <button className="rounded-full bg-gray-800 p-2">
              <Share className="w-6 h-6 text-white" />
            </button>
          </>
        ) : (
          <button className="bg-app-gold text-white px-10 py-2 rounded-full font-medium">
            Edit Profile
          </button>
        )}
      </div>
      
      <div className="flex justify-between w-full max-w-xs border-t border-gray-800 pt-4">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">{following}</span>
          <span className="text-sm text-gray-400">Following</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">{followers}</span>
          <span className="text-sm text-gray-400">Followers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">{likes}</span>
          <span className="text-sm text-gray-400">Likes</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
