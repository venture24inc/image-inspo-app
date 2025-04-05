
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import FriendsGrid from "@/components/FriendsGrid";
import MessageListItem from "@/components/MessageListItem";
import { Search } from "lucide-react";

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

const mockMessages = [
  {
    id: "1",
    name: "Joyce Doe",
    image: "/lovable-uploads/4d606964-3842-434c-8256-d2370eac5236.png",
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    time: "4h ago",
    unread: true,
  },
  {
    id: "2",
    name: "Jenny Doe",
    image: "/lovable-uploads/22754c77-9bfd-491f-b313-449889640574.png",
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    time: "6h ago",
  },
  {
    id: "3",
    name: "Janice Doe",
    image: "/lovable-uploads/0db74e0b-f3cb-452d-accd-d55e6a725250.png",
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    time: "12h ago",
  },
  {
    id: "4",
    name: "Danica Doe",
    image: "/lovable-uploads/dec98121-1ede-4b57-9b9a-a3c1612d3e85.png",
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    time: "15h ago",
  },
  {
    id: "5",
    name: "David Doe",
    image: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png",
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    time: "20h ago",
  },
];

const Messages = () => {
  return (
    <div className="pb-16 min-h-screen bg-app-dark">
      <Header 
        title="Messages" 
        showBackButton={false} 
        showSearch={true}
      />
      
      <FriendsGrid 
        friends={mockFriends} 
        showViewAll={false}
      />
      
      {mockMessages.map((message) => (
        <MessageListItem key={message.id} {...message} />
      ))}
      
      <BottomNavigation />
    </div>
  );
};

export default Messages;
