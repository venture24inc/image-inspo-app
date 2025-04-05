
import { Play } from "lucide-react";

interface MessageBubbleProps {
  content: string;
  timestamp: string;
  isOwnMessage: boolean;
  audioUrl?: string;
  audioDuration?: string;
}

const MessageBubble = ({
  content,
  timestamp,
  isOwnMessage,
  audioUrl,
  audioDuration,
}: MessageBubbleProps) => {
  return (
    <div className={`flex flex-col ${isOwnMessage ? "items-end" : "items-start"} mb-4`}>
      {audioUrl ? (
        <div className={`flex items-center gap-2 rounded-2xl p-2 ${isOwnMessage ? "bg-app-gold" : "bg-app-dark-lighter"}`}>
          <div className="w-48 h-10 flex items-center gap-3">
            <div className="bg-[#827452]/20 flex-1 h-6 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-start px-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-0.5 h-2 mx-0.5 bg-app-gold" 
                    style={{ 
                      height: `${Math.random() * 10 + 5}px` 
                    }}
                  />
                ))}
              </div>
            </div>
            <span className="text-white text-xs">{audioDuration}</span>
            <button className="w-8 h-8 rounded-full bg-app-gold flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      ) : (
        <div className={isOwnMessage ? "message-right" : "message-left"}>
          {content}
        </div>
      )}
      <span className="text-gray-500 text-xs mt-1">{timestamp}</span>
    </div>
  );
};

export default MessageBubble;
