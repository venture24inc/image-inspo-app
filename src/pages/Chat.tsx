
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import MessageBubble from "@/components/MessageBubble";
import { Mic, Smile, Image, Send } from "lucide-react";

// Mock user data
const mockUsers = {
  "1": {
    id: "1",
    name: "Joyce Doe",
    image: "/lovable-uploads/4d606964-3842-434c-8256-d2370eac5236.png",
    status: "Active Now",
  },
  "2": {
    id: "2",
    name: "Jenny Doe",
    image: "/lovable-uploads/22754c77-9bfd-491f-b313-449889640574.png",
    status: "Active 5m ago",
  },
  "3": {
    id: "3",
    name: "Janice Doe",
    image: "/lovable-uploads/0db74e0b-f3cb-452d-accd-d55e6a725250.png",
    status: "Active Now",
  },
};

// Mock messages data
const mockMessages = {
  "3": [
    {
      id: "1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      timestamp: "09:25 PM",
      isOwnMessage: false,
    },
    {
      id: "2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis.",
      timestamp: "10:25 PM",
      isOwnMessage: true,
    },
    {
      id: "3",
      audioUrl: "audio.mp3",
      audioDuration: "03:15",
      timestamp: "11:25 PM",
      isOwnMessage: false,
    },
    {
      id: "4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis.",
      timestamp: "09:25 PM",
      isOwnMessage: false,
    },
  ],
};

const Chat = () => {
  const { id } = useParams();
  const user = mockUsers[id as keyof typeof mockUsers];
  const messages = mockMessages[id as keyof typeof mockMessages] || [];
  
  const [newMessage, setNewMessage] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the server
      setNewMessage("");
    }
  };
  
  return (
    <div className="h-screen flex flex-col">
      <Header 
        user={user} 
        showCall={true}
        showVideo={true}
      />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-app-dark">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            content={message.content}
            timestamp={message.timestamp}
            isOwnMessage={message.isOwnMessage}
            audioUrl={message.audioUrl}
            audioDuration={message.audioDuration}
          />
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      
      <div className="p-2 bg-app-dark border-t border-gray-800">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Write a Message"
            className="flex-1 bg-transparent text-white outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <button className="p-1">
              <Mic className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-1">
              <Smile className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-1">
              <Image className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
