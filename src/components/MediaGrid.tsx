
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface Media {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}

interface MediaGridProps {
  media: Media[];
}

const MediaGrid = ({ media }: MediaGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-1 px-1">
      {media.map((item) => (
        <Link 
          key={item.id} 
          to={`/${item.type}s/${item.id}`}
          className="aspect-square relative overflow-hidden"
        >
          <img
            src={item.thumbnail || item.url}
            alt=""
            className="w-full h-full object-cover"
          />
          {item.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default MediaGrid;
