import { ChapterContentType, ChapterType } from "@/types/types";
import React, { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import ReactMarkdown from "react-markdown";

type ChapterContentProps = {
  chapter: ChapterType | null;
  content: ChapterContentType | null;
};

const videoOpts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

const ChapterContent = ({ chapter, content }: ChapterContentProps) => {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | undefined>();

  // Handle video changes
  useEffect(() => {
    if (content?.videoId !== currentVideoId) {
      setIsVideoLoading(true);
      setCurrentVideoId(content?.videoId);
    }
  }, [content?.videoId, currentVideoId]);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
    setIsVideoLoading(false);
  };

  const onPlayerError: YouTubeProps["onError"] = () => {
    setIsVideoLoading(false);
  };

  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.chapter_name}</h2>
      <p className="text-gray-500">{chapter?.description}</p>

      {/* video */}
      <div className="flex justify-center my-6">
        {isVideoLoading && (
          <div className="flex items-center justify-center h-[390px] w-[640px] bg-gray-100 rounded border">
            <div className="text-gray-500 flex items-center gap-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              Loading video...
            </div>
          </div>
        )}
        <YouTube
          key={content?.videoId}
          videoId={content?.videoId}
          opts={videoOpts}
          onReady={onPlayerReady}
          onError={onPlayerError}
          style={{ display: isVideoLoading ? 'none' : 'block' }}
        />
      </div>

      <div>
        {content &&
          content.content.map((item, index) => (
            <div key={index} className="my-5 bg-sky-50 rounded-lg p-5">
              <h2 className="font-medium text-lg">{item.title}</h2>
              <ReactMarkdown className={"mt-3"}>
                {item.explanation}
              </ReactMarkdown>
              {item.code_examples && item.code_examples.length > 0 && (
                <div className="bg-black text-white p-10 mt-3 rounded-md">
                  {item.code_examples.map((example, idx) => (
                    <pre key={idx}>
                      <code>
                        {Array.isArray(example.code)
                          ? example.code
                              .join("")
                              .replace("<precode>", "")
                              .replace("</precode>", "")
                          : (example.code as string)
                              .replace("<precode>", "")
                              .replace("</precode>", "")}
                      </code>
                    </pre>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChapterContent;
