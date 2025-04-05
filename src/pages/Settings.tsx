
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Heart, Users, Film, Image, LogOut, Phone, Mail } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen pb-16 bg-app-dark">
      <Header title="Jason Doe" showMoreOptions={false} />
      
      <div className="p-4 flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
          <img 
            src="/lovable-uploads/69be188e-0e97-4f1e-aa9d-f9bc522c31d3.png" 
            alt="Jason Doe" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-white mb-1">Jason Doe</h2>
        <p className="text-gray-400">Hair Stylist</p>
      </div>
      
      <div className="px-4 mb-4">
        <Link to="tel:1234567890" className="flex items-center gap-4 py-4 border-b border-gray-800">
          <Phone className="w-6 h-6 text-app-gold" />
          <span className="text-app-gold">(123) 456 - 7890</span>
        </Link>
        
        <Link to="mailto:samplemail24@gmail.com" className="flex items-center gap-4 py-4 border-b border-gray-800">
          <Mail className="w-6 h-6 text-app-gold" />
          <span className="text-app-gold">Samplemail24@gmail.com</span>
        </Link>
      </div>
      
      <div className="px-4 mb-4">
        <Link to="/favorites" className="flex items-center gap-4 py-4 border-b border-gray-800">
          <Heart className="w-6 h-6 text-white" />
          <span className="text-white">Your Favorites</span>
        </Link>
        
        <Link to="/friends" className="flex items-center gap-4 py-4 border-b border-gray-800">
          <Users className="w-6 h-6 text-white" />
          <span className="text-white">Your Friends</span>
        </Link>
        
        <Link to="/videos" className="flex items-center gap-4 py-4 border-b border-gray-800">
          <Film className="w-6 h-6 text-white" />
          <span className="text-white">Your Videos</span>
        </Link>
        
        <Link to="/photos" className="flex items-center gap-4 py-4 border-b border-gray-800">
          <Image className="w-6 h-6 text-white" />
          <span className="text-white">Your Photos</span>
        </Link>
      </div>
      
      <div className="px-4">
        <Link to="/logout" className="flex items-center gap-4 py-4 border-b border-gray-800">
          <LogOut className="w-6 h-6 text-white" />
          <span className="text-white">Logout</span>
        </Link>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Settings;
