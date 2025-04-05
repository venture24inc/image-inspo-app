
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Videos from "./pages/Videos";
import Messages from "./pages/Messages";
import Chat from "./pages/Chat";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import VideoDetails from "./pages/VideoDetails";
import PostDetail from "./pages/PostDetail";
import VideoView from "./pages/VideoView";
import CallOutgoing from "./pages/CallOutgoing";
import CallIncoming from "./pages/CallIncoming";
import CallActive from "./pages/CallActive";
import VideoCall from "./pages/VideoCall";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:id" element={<Chat />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/videos/:id" element={<VideoView />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/call/outgoing" element={<CallOutgoing />} />
          <Route path="/call/incoming" element={<CallIncoming />} />
          <Route path="/call/active" element={<CallActive />} />
          <Route path="/call/video" element={<VideoCall />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
