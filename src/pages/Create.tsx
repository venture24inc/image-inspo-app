
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Image, Video, Smile, MapPin, Users, X } from "lucide-react";

const Create = () => {
  const navigate = useNavigate();
  const [postText, setPostText] = useState("");
  const [mediaType, setMediaType] = useState<"none" | "image" | "video">("none");
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  
  const handlePostSubmit = () => {
    // Mock post submission
    console.log("Post submitted:", { postText, mediaType, mediaPreview });
    // Navigate back to home
    navigate("/");
  };
  
  const handleMediaSelect = (type: "image" | "video") => {
    setMediaType(type);
    // Mock media selection - in a real app this would trigger file selection
    setMediaPreview(
      type === "image" 
        ? "/lovable-uploads/3ccb8a99-323d-4d77-8e41-1a670583c473.png"
        : "/lovable-uploads/efef17b4-0746-42d0-af4a-2cc75dec1ca3.png"
    );
  };
  
  const handleClearMedia = () => {
    setMediaType("none");
    setMediaPreview(null);
  };
  
  return (
    <div className="min-h-screen pb-16 bg-app-dark">
      <Header 
        title="Create New Post"
        showBackButton={true}
      />
      
      <div className="p-4">
        <textarea
          className="w-full p-4 rounded-lg bg-gray-800 text-white resize-none min-h-[120px] outline-none"
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        
        {mediaPreview && (
          <div className="mt-4 relative">
            <img 
              src={mediaPreview} 
              alt="Media preview" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <button 
              className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1"
              onClick={handleClearMedia}
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
        
        <div className="flex mt-4 justify-between items-center">
          <div className="flex gap-4">
            <button onClick={() => handleMediaSelect("image")} className="text-gray-400">
              <Image className="w-6 h-6" />
            </button>
            <button onClick={() => handleMediaSelect("video")} className="text-gray-400">
              <Video className="w-6 h-6" />
            </button>
            <button className="text-gray-400">
              <Smile className="w-6 h-6" />
            </button>
            <button className="text-gray-400">
              <MapPin className="w-6 h-6" />
            </button>
            <button className="text-gray-400">
              <Users className="w-6 h-6" />
            </button>
          </div>
          
          <button 
            className={`px-6 py-2 rounded-full font-medium ${
              postText.trim() || mediaPreview 
                ? "bg-app-gold text-white" 
                : "bg-gray-700 text-gray-400"
            }`}
            disabled={!postText.trim() && !mediaPreview}
            onClick={handlePostSubmit}
          >
            Post
          </button>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Create;
