
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import PostItem from "@/components/PostItem";
import { Smile, Image } from "lucide-react";

// Mock data
const mockPost = {
  id: "1",
  userId: "janice",
  userName: "Janice Doe",
  userImage: "/lovable-uploads/0db74e0b-f3cb-452d-accd-d55e6a725250.png",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
  image: "/lovable-uploads/4d606964-3842-434c-8256-d2370eac5236.png",
  time: "9h ago",
  likes: 200,
  comments: 200,
};

const mockComments = [
  {
    id: "1",
    userId: "flor",
    userName: "Flor Doe",
    userImage: "/lovable-uploads/69be188e-0e97-4f1e-aa9d-f9bc522c31d3.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    time: "3h ago",
    likes: 18,
  },
  {
    id: "2",
    userId: "jessica",
    userName: "Jessica Doe",
    userImage: "/lovable-uploads/22754c77-9bfd-491f-b313-449889640574.png",
    content: "Lorem ipsum dolor sit amet!",
    time: "2h ago",
    likes: 5,
  },
];

const PostDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  
  return (
    <div className="min-h-screen bg-app-dark pb-20">
      <Header 
        user={{
          name: mockPost.userName,
          image: mockPost.userImage,
        }}
      />
      
      <PostItem 
        {...mockPost}
        showComments={true}
        postComments={mockComments}
      />
      
      <div className="fixed bottom-0 left-0 right-0 p-2 bg-app-dark border-t border-gray-800">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Add a comment"
            className="flex-1 bg-transparent text-white outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex items-center gap-2">
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

export default PostDetail;
