
export type Media = {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
};

export type Friend = {
  id: string;
  name: string;
  image: string;
  occupation?: string;
};

export type Post = {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  content?: string;
  image?: string;
  time: string;
  likes: number;
  comments: number;
};

export type User = {
  id: string;
  name: string;
  occupation: string;
  following: number;
  followers: number;
  likes: number;
  image: string;
  status?: string;
};

export type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
};
