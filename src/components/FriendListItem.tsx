
import { useState } from "react";
import { Link } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";

interface FriendListItemProps {
  id: string;
  name: string;
  occupation?: string; // Changed from required to optional
  image: string;
}

const FriendListItem = ({
  id,
  name,
  occupation,
  image,
}: FriendListItemProps) => {
  const [showOptions, setShowOptions] = useState(false);
  
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-800 px-4 relative">
      <Link to={`/profile/${id}`} className="flex items-center gap-3 flex-1">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-gray-400 text-sm">{occupation || 'User'}</p>
        </div>
      </Link>
      
      <button 
        className="p-2"
        onClick={() => setShowOptions(!showOptions)}
      >
        <MoreHorizontal className="text-gray-400 w-5 h-5" />
      </button>
      
      {showOptions && (
        <div className="absolute right-4 top-16 bg-gray-900 rounded-md shadow-lg z-10 overflow-hidden">
          <button className="px-6 py-2 text-white hover:bg-gray-800 w-full text-left">
            Unfriend
          </button>
          <button className="px-6 py-2 text-white hover:bg-gray-800 w-full text-left">
            Message
          </button>
          <button className="px-6 py-2 text-white hover:bg-gray-800 w-full text-left">
            View profile
          </button>
        </div>
      )}
    </div>
  );
};

export default FriendListItem;
