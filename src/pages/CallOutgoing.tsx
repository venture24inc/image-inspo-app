
import { useState, useEffect } from "react";
import CallUI from "@/components/CallUI";
import { useNavigate } from "react-router-dom";

const CallOutgoing = () => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState("00:00");
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
      const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
      const secs = (seconds % 60).toString().padStart(2, "0");
      setDuration(`${mins}:${secs}`);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [seconds]);
  
  const handleEndCall = () => {
    navigate(-1);
  };
  
  return (
    <CallUI
      type="outgoing"
      user={{
        name: "Name Here",
        image: "/lovable-uploads/dec98121-1ede-4b57-9b9a-a3c1612d3e85.png",
      }}
      duration={duration}
      onEnd={handleEndCall}
    />
  );
};

export default CallOutgoing;
