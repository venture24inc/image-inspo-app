
import { useState } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import MediaGrid from "@/components/MediaGrid";
import { Search, Plus } from "lucide-react";

// Mock data
const mockVideos = [
  { 
    id: "1", 
    type: "video", 
    url: "/lovable-uploads/efef17b4-0746-42d0-af4a-2cc75dec1ca3.png",
    thumbnail: "/lovable-uploads/efef17b4-0746-42d0-af4a-2cc75dec1ca3.png"
  },
  { 
    id: "2", 
    type: "video", 
    url: "/lovable-uploads/648c889f-cfff-4d1d-a2c6-48547b23ac2b.png",
    thumbnail: "/lovable-uploads/648c889f-cfff-4d1d-a2c6-48547b23ac2b.png"
  },
  { 
    id: "3", 
    type: "video", 
    url: "/lovable-uploads/2b3118f5-6c06-4122-972d-e17cdba8f931.png",
    thumbnail: "/lovable-uploads/2b3118f5-6c06-4122-972d-e17cdba8f931.png"
  },
  { 
    id: "4", 
    type: "video", 
    url: "/lovable-uploads/4d606964-3842-434c-8256-d2370eac5236.png",
    thumbnail: "/lovable-uploads/4d606964-3842-434c-8256-d2370eac5236.png"
  },
  { 
    id: "5", 
    type: "video", 
    url: "/lovable-uploads/69be188e-0e97-4f1e-aa9d-f9bc522c31d3.png",
    thumbnail: "/lovable-uploads/69be188e-0e97-4f1e-aa9d-f9bc522c31d3.png"
  },
  { 
    id: "6", 
    type: "video", 
    url: "/lovable-uploads/0db74e0b-f3cb-452d-accd-d55e6a725250.png",
    thumbnail: "/lovable-uploads/0db74e0b-f3cb-452d-accd-d55e6a725250.png"
  },
  { 
    id: "7", 
    type: "video", 
    url: "/lovable-uploads/7da76785-9445-45c8-b9c5-33633eaf72c9.png",
    thumbnail: "/lovable-uploads/7da76785-9445-45c8-b9c5-33633eaf72c9.png"
  },
  { 
    id: "8", 
    type: "video", 
    url: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png",
    thumbnail: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png"
  },
  { 
    id: "9", 
    type: "video", 
    url: "/lovable-uploads/922b807e-0475-4957-bdb5-3fdffba7c4a1.png",
    thumbnail: "/lovable-uploads/922b807e-0475-4957-bdb5-3fdffba7c4a1.png"
  },
  { 
    id: "10", 
    type: "video", 
    url: "/lovable-uploads/32c8d1cc-178d-45c4-b0cf-3894be6337a6.png",
    thumbnail: "/lovable-uploads/32c8d1cc-178d-45c4-b0cf-3894be6337a6.png"
  },
  { 
    id: "11", 
    type: "video", 
    url: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png",
    thumbnail: "/lovable-uploads/af216129-7a79-4a3f-ab2b-a05784c1610f.png"
  },
  { 
    id: "12", 
    type: "video", 
    url: "/lovable-uploads/922b807e-0475-4957-bdb5-3fdffba7c4a1.png",
    thumbnail: "/lovable-uploads/922b807e-0475-4957-bdb5-3fdffba7c4a1.png"
  },
];

const Videos = () => {
  return (
    <div className="pb-16">
      <Header 
        title="Your Videos" 
        showSearch={true}
        showBackButton={true}
      >
        <Plus className="text-white w-5 h-5" />
      </Header>
      
      <div className="py-2">
        <MediaGrid media={mockVideos} />
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Videos;
