
import { Link } from "react-router-dom";

interface MessageListItemProps {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
}

const MessageListItem = ({
  id,
  name,
  image,
  lastMessage,
  time,
  unread = false,
}: MessageListItemProps) => {
  return (
    <Link 
      to={`/messages/${id}`}
      className="flex items-center gap-3 p-4 border-b border-gray-800"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover" 
        />
        {unread && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-app-gold rounded-full" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-white font-medium">{name}</h3>
        <p className="text-gray-400 text-sm line-clamp-1">{lastMessage}</p>
      </div>
      <span className="text-gray-500 text-xs">{time}</span>
    </Link>
  );
};

export default MessageListItem;
