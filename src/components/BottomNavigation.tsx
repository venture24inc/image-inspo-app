
import { Home, Film, Plus, MessageCircle, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Film, label: "Videos", path: "/videos" },
    { icon: Plus, label: "Create", path: "/create" },
    { icon: MessageCircle, label: "Messages", path: "/messages" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-app-dark border-t border-gray-800 flex items-center justify-around py-3">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const active = isActive(item.path);
        
        // Special styling for the center plus button
        if (item.label === "Create") {
          return (
            <Link 
              key={index} 
              to={item.path} 
              className="bottom-nav-item"
            >
              <div className="w-14 h-14 rounded-full bg-app-gold flex items-center justify-center">
                <Icon className="nav-icon" />
              </div>
            </Link>
          );
        }
        
        return (
          <Link 
            key={index} 
            to={item.path} 
            className="bottom-nav-item"
          >
            <Icon className={`nav-icon ${active ? 'text-app-gold' : 'text-gray-400'}`} />
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
