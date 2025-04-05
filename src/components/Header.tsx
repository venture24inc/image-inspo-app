
import { ArrowLeft, MoreHorizontal, Search, Phone, Video } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showMoreOptions?: boolean;
  showSearch?: boolean;
  showCall?: boolean;
  showVideo?: boolean;
  user?: {
    name: string;
    status?: string;
    image: string;
  };
  transparent?: boolean;
  onBackClick?: () => void;
}

const Header = ({
  title,
  showBackButton = true,
  showMoreOptions = false,
  showSearch = false,
  showCall = false,
  showVideo = false,
  user,
  transparent = false,
  onBackClick,
}: HeaderProps) => {
  return (
    <div className={`px-4 py-3 flex items-center justify-between ${transparent ? 'bg-transparent' : 'bg-app-gold'}`}>
      <div className="flex items-center gap-3 flex-1">
        {showBackButton && (
          <Link to={onBackClick ? "#" : "/"} onClick={onBackClick}>
            <ArrowLeft className="text-white w-6 h-6" />
          </Link>
        )}
        
        {user ? (
          <div className="flex items-center gap-2">
            <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
            <div>
              <h2 className="text-white font-medium">{user.name}</h2>
              {user.status && <p className="text-xs text-white/80">{user.status}</p>}
            </div>
          </div>
        ) : (
          <h1 className="text-xl font-medium text-white">{title}</h1>
        )}
      </div>
      
      <div className="flex items-center gap-5">
        {showSearch && <Search className="text-white w-5 h-5" />}
        {showCall && <Phone className="text-white w-5 h-5" />}
        {showVideo && <Video className="text-white w-5 h-5" />}
        {showMoreOptions && <MoreHorizontal className="text-white w-6 h-6" />}
      </div>
    </div>
  );
};

export default Header;
