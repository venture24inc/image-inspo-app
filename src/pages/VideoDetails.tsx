
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";

// Mock data
const mockData = {
  id: "1",
  userId: "123",
  userName: "Jay Doe",
  userImage: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png",
  videoUrl: "/lovable-uploads/922b807e-0475-4957-bdb5-3fdffba7c4a1.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...",
  likes: 200,
  comments: 200,
  time: "1h ago",
};

const mockComments = [
  {
    id: "1",
    userName: "Joe Doe",
    userImage: "/lovable-uploads/69be188e-0e97-4f1e-aa9d-f9bc522c31d3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    time: "1d ago",
    likes: 200,
    replies: 12,
  },
  {
    id: "2",
    userName: "Martha Doe",
    userImage: "/lovable-uploads/22754c77-9bfd-491f-b313-449889640574.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    time: "1d ago",
    likes: 100,
    replies: 5,
  },
  {
    id: "3",
    userName: "Joe Doe",
    userImage: "/lovable-uploads/7da76785-9445-45c8-b9c5-33633eaf72c9.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    time: "1d ago",
    likes: 50,
    replies: 14,
  },
];

const VideoDetails = () => {
  const { id } = useParams();
  const [showComments, setShowComments] = useState(true);
  
  return (
    <div className="h-screen flex flex-col bg-app-dark">
      <div className="relative flex-1">
        <VideoPlayer 
          id={id || "1"}
          userId={mockData.userId}
          userName={mockData.userName}
          userImage={mockData.userImage}
          videoUrl={mockData.videoUrl}
          description={mockData.description}
          likes={mockData.likes}
          comments={mockData.comments}
          time={mockData.time}
        />
      </div>
      
      <div className="bg-black rounded-t-xl overflow-hidden">
        <div className="py-3 px-5 bg-black">
          <h2 className="text-white text-lg font-medium">Comments</h2>
        </div>
        
        <div className="max-h-[40vh] overflow-y-auto bg-app-dark">
          {mockComments.map((comment) => (
            <div key={comment.id} className="p-4 border-b border-gray-800">
              <div className="flex items-start gap-3">
                <img 
                  src={comment.userImage}
                  alt={comment.userName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium">{comment.userName}</span>
                    <span className="text-gray-500 text-xs">{comment.time}</span>
                  </div>
                  <p className="text-white text-sm mb-3">{comment.text}</p>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 text-xs">Reply</button>
                    <button className="text-gray-400 text-xs">View {comment.replies} Replies</button>
                    <button className="text-gray-400 text-xs flex items-center gap-1">
                      <span>♥</span> {comment.likes}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
