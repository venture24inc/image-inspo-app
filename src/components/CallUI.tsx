
import { Mic, MicOff, Camera, Phone, PauseCircle, Monitor, NotebookPen } from "lucide-react";
import { useState } from "react";

interface CallUIProps {
  type: "outgoing" | "incoming" | "active" | "video";
  user: {
    name: string;
    image: string;
  };
  duration?: string;
  onEnd: () => void;
  onAnswer?: () => void;
  onDecline?: () => void;
}

const CallUI = ({ type, user, duration, onEnd, onAnswer, onDecline }: CallUIProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  if (type === "incoming") {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={user.image}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
        <p className="text-white/80 mb-36">Incoming Call</p>
        
        <div className="flex gap-6 items-center">
          <button 
            className="call-button bg-app-green"
            onClick={onAnswer}
          >
            <Phone className="w-6 h-6" />
          </button>
          <button 
            className="call-button bg-app-red"
            onClick={onDecline}
          >
            <Phone className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  
  if (type === "outgoing") {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={user.image}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
        <p className="text-white/80 mb-6">Calling</p>
        
        <div className="text-2xl font-semibold text-white mb-20">
          {duration || "00:00"}
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center max-w-xs">
          <button 
            className="call-button bg-white/20"
            onClick={() => setIsOnHold(!isOnHold)}
          >
            <PauseCircle className="w-6 h-6" />
          </button>
          <button 
            className="call-button bg-white/20"
            onClick={() => setIsRecording(!isRecording)}
          >
            <Monitor className="w-6 h-6" />
          </button>
          <button 
            className="call-button bg-white/20"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          <button 
            className="call-button bg-white/20"
          >
            <NotebookPen className="w-6 h-6" />
          </button>
          <button 
            className="call-button bg-white/20"
          >
            <Monitor className="w-6 h-6" />
          </button>
          <button 
            className="call-button bg-app-red"
            onClick={onEnd}
          >
            <Phone className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  
  if (type === "video") {
    return (
      <div className="fixed inset-0 bg-black flex flex-col">
        {/* Main video area (showing the image placeholder) */}
        <div className="flex-1 relative">
          <img 
            src={user.image} 
            alt="Video call" 
            className="w-full h-full object-cover"
          />
          
          {/* Small self view */}
          <div className="absolute top-4 right-4 w-24 h-32 bg-gray-800 rounded-md overflow-hidden">
            <img 
              src="/lovable-uploads/dec98121-1ede-4b57-9b9a-a3c1612d3e85.png" 
              alt="Self view" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Controls */}
        <div className="bg-gray-900/80 p-4 flex justify-between">
          <button className="call-button bg-white">
            <Camera className="w-6 h-6 text-black" />
          </button>
          <button className="call-button bg-white/20">
            <MicOff className="w-6 h-6" />
          </button>
          <button className="call-button bg-white/20">
            <Mic className="w-6 h-6" />
          </button>
          <button 
            className="call-button bg-app-red"
            onClick={onEnd}
          >
            <Phone className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  
  // Default is active call
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
      <p className="text-white/80 mb-6">05:12</p>
      
      <div className="flex flex-wrap gap-6 justify-center max-w-xs mb-8">
        <button 
          className="call-button bg-white/20"
          onClick={() => setIsOnHold(!isOnHold)}
        >
          <PauseCircle className="w-6 h-6" />
          <span className="text-xs mt-1 text-white">Hold</span>
        </button>
        <button 
          className="call-button bg-white/20"
          onClick={() => setIsRecording(!isRecording)}
        >
          <Monitor className="w-6 h-6" />
          <span className="text-xs mt-1 text-white">Record</span>
        </button>
        <button 
          className="call-button bg-white/20"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          <span className="text-xs mt-1 text-white">Mute</span>
        </button>
        <button 
          className="call-button bg-white/20"
        >
          <NotebookPen className="w-6 h-6" />
          <span className="text-xs mt-1 text-white">Note</span>
        </button>
      </div>
      
      <div className="flex gap-6">
        <button className="call-button bg-white/20">
          <Monitor className="w-6 h-6" />
          <span className="text-xs mt-1 text-white">Loud Speak</span>
        </button>
        <button 
          className="call-button bg-app-red"
          onClick={onEnd}
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs mt-1 text-white">End</span>
        </button>
        <button className="call-button bg-white/20">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M12 16C10.9 16 10 16.9 10 18S10.9 20 12 20 14 19.1 14 18 13.1 16 12 16M12 4C10.9 4 10 4.9 10 6S10.9 8 12 8 14 7.1 14 6 13.1 4 12 4M12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10Z" />
          </svg>
          <span className="text-xs mt-1 text-white">Dial</span>
        </button>
      </div>
    </div>
  );
};

export default CallUI;
