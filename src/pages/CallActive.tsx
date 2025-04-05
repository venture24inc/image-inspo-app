
import { useState } from "react";
import CallUI from "@/components/CallUI";
import { useNavigate } from "react-router-dom";

const CallActive = () => {
  const navigate = useNavigate();
  
  const handleEndCall = () => {
    navigate(-1);
  };
  
  return (
    <CallUI
      type="active"
      user={{
        name: "Name Here",
        image: "/lovable-uploads/dec98121-1ede-4b57-9b9a-a3c1612d3e85.png",
      }}
      onEnd={handleEndCall}
    />
  );
};

export default CallActive;
