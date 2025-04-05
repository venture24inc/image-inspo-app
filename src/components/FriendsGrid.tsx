
import { Link } from "react-router-dom";

interface Friend {
  id: string;
  name: string;
  image: string;
}

interface FriendsGridProps {
  friends: Friend[];
  title?: string;
  showViewAll?: boolean;
}

const FriendsGrid = ({ 
  friends, 
  title = "Friends", 
  showViewAll = true 
}: FriendsGridProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-white font-semibold">{title}</h2>
        {showViewAll && (
          <Link to="/friends" className="text-app-gold text-sm">
            View All
          </Link>
        )}
      </div>
      
      <div className="flex gap-4 px-4 overflow-x-auto pb-2 scrollbar-none">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            to={`/profile/${friend.id}`}
            className="flex flex-col items-center gap-1 min-w-[60px]"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                src={friend.image}
                alt={friend.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-300 text-center">{friend.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsGrid;
