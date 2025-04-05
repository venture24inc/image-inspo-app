
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import ProfileHeader from "@/components/ProfileHeader";
import FriendsGrid from "@/components/FriendsGrid";
import MediaGrid from "@/components/MediaGrid";

// Mock data
const mockFriends = [
  {
    id: "1",
    name: "John Doe",
    image: "/lovable-uploads/69be188e-0e97-4f1e-aa9d-f9bc522c31d3.png",
  },
  {
    id: "2",
    name: "Jessa Doe",
    image: "/lovable-uploads/dec98121-1ede-4b57-9b9a-a3c1612d3e85.png",
  },
  {
    id: "3",
    name: "John Doe",
    image: "/lovable-uploads/7da76785-9445-45c8-b9c5-33633eaf72c9.png",
  },
  {
    id: "4",
    name: "Mira Doe",
    image: "/lovable-uploads/22754c77-9bfd-491f-b313-449889640574.png",
  },
  {
    id: "5",
    name: "Jena Doe",
    image: "/lovable-uploads/0db74e0b-f3cb-452d-accd-d55e6a725250.png",
  },
];

const mockPosts = [
  {
    id: "1",
    type: "image" as const, 
    url: "/lovable-uploads/3ccb8a99-323d-4d77-8e41-1a670583c473.png"
  },
  {
    id: "2",
    type: "image" as const, 
    url: "/lovable-uploads/922b807e-0475-4957-bdb5-3fdffba7c4a1.png"
  },
  {
    id: "3",
    type: "image" as const, 
    url: "/lovable-uploads/32c8d1cc-178d-45c4-b0cf-3894be6337a6.png"
  },
];

const mockUser = {
  id: "jessa",
  name: "Jessa Doe",
  occupation: "Hair Stylist",
  following: 388,
  followers: 123000,
  likes: 300000,
  image: "/lovable-uploads/dec98121-1ede-4b57-9b9a-a3c1612d3e85.png"
};

const Profile = () => {
  const { id } = useParams();
  const isCurrentUser = !id || id === "jessa";
  
  const [activeTab, setActiveTab] = useState("posts");
  
  return (
    <div className="pb-16 min-h-screen bg-app-dark">
      <Header 
        showBackButton={true} 
        showMoreOptions={true} 
        transparent={true}
      />
      
      <ProfileHeader
        profileImage={mockUser.image}
        name={mockUser.name}
        occupation={mockUser.occupation}
        following={mockUser.following}
        followers={mockUser.followers}
        likes={mockUser.likes}
        isCurrentUser={!isCurrentUser}
      />
      
      <FriendsGrid 
        friends={mockFriends} 
      />
      
      <div className="mb-4">
        <div className="flex border-b border-gray-800">
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "posts" ? "text-app-gold border-b-2 border-app-gold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "videos" ? "text-app-gold border-b-2 border-app-gold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "photos" ? "text-app-gold border-b-2 border-app-gold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("photos")}
          >
            Photos
          </button>
        </div>
      </div>
      
      <MediaGrid media={mockPosts} />
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
