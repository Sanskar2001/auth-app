import { useState } from "react";
import "./index.css";
import Icon from "./components/Icon";
import TextEditor from "./components/TextEditor";
import PostCard from "./components/PostCard";
import sampleData from "./constants/SampleData";

export default function App() {
  const [posts, setPosts] = useState(sampleData);

  function handleSubmit(text: string) {
    setPosts((prev) => [
      { name: "You", text, avatar: "https://i.pravatar.cc/80?img=68" },
      ...prev,
    ]);
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="h-16 flex">
        <div className="w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-900">
            <div className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center">
              <Icon name="logo" className="h-5 w-5" />
            </div>
            <span className="font-semibold">foo-rum</span>
          </div>

          <button className="text-sm text-gray-700 inline-flex items-center gap-1">
            Login
            <Icon name="login" className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="col-span-12 md:col-span-7">
            <div className="mt-6">
              <TextEditor onSubmit={handleSubmit} />
            </div>

            <div className="mt-6 space-y-6">
              {posts.map((p, i) => (
                <PostCard
                  key={i}
                  name={p.name}
                  text={p.text}
                  avatar={p.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
