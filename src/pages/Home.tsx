
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import FriendsGrid from "@/components/FriendsGrid";
import PostItem from "@/components/PostItem";
import { Search } from "lucide-react";

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
    userId: "1",
    userName: "Mary Doe",
    userImage: "/lovable-uploads/4d606964-3842-434c-8256-d2370eac5236.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    image: "/lovable-uploads/3ccb8a99-323d-4d77-8e41-1a670583c473.png",
    time: "1h ago",
    likes: 200,
    comments: 200,
  },
  {
    id: "2",
    userId: "2",
    userName: "Jay Doe",
    userImage: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    time: "1h ago",
    likes: 200,
    comments: 200,
  },
];

const Home = () => {
  return (
    <div className="pb-16 min-h-screen">
      <Header 
        title="Beauty Hive" 
        showBackButton={false} 
        showSearch={true}
      />
      
      <FriendsGrid 
        friends={[
          { id: "add", name: "Add New", image: "/lovable-uploads/dec98121-1ede-4b57-9b9a-a3c1612d3e85.png" }, 
          ...mockFriends
        ]} 
      />
      
      {mockPosts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
      
      <BottomNavigation />
    </div>
  );
};

export default Home;
