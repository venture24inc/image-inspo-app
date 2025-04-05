
import { useState } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import FriendListItem from "@/components/FriendListItem";
import { Friend } from "@/types";
import { Search } from "lucide-react";

// Mock data
const mockFriends: Friend[] = [
  {
    id: "1",
    name: "Danica Doe",
    occupation: "Hair Stylist",
    image: "/lovable-uploads/4d606964-3842-434c-8256-d2370eac5236.png",
  },
  {
    id: "2",
    name: "Jane Doe",
    occupation: "Hair Stylist",
    image: "/lovable-uploads/dec98121-1ede-4b57-9b9a-a3c1612d3e85.png",
  },
  {
    id: "3",
    name: "Jamie Doe",
    occupation: "Hair Stylist",
    image: "/lovable-uploads/7da76785-9445-45c8-b9c5-33633eaf72c9.png",
  },
  {
    id: "4",
    name: "Sheena Doe",
    occupation: "Hair Stylist",
    image: "/lovable-uploads/22754c77-9bfd-491f-b313-449889640574.png",
  },
  {
    id: "5",
    name: "Lika Doe",
    occupation: "Hair Stylist",
    image: "/lovable-uploads/0db74e0b-f3cb-452d-accd-d55e6a725250.png",
  },
  {
    id: "6",
    name: "Mike Doe",
    occupation: "Hair Stylist",
    image: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png",
  },
  {
    id: "7",
    name: "Harvey Doe",
    occupation: "Hair Stylist",
    image: "/lovable-uploads/efef17b4-0746-42d0-af4a-2cc75dec1ca3.png",
  },
];

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [friends, setFriends] = useState<Friend[]>(mockFriends);
  
  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen pb-16 bg-app-dark">
      <Header title="Your Friends" showBackButton={true} />
      
      <div className="p-4">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 mb-4">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search friends..." 
            className="bg-transparent text-white w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="pb-4">
        {filteredFriends.map((friend) => (
          <FriendListItem key={friend.id} {...friend} />
        ))}
        
        {filteredFriends.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No friends match your search
          </div>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Friends;
