import React from "react";

type Props = {
  open: boolean;
  url?: string;
  onClose: () => void;
};

export default function VideoLightbox({ open, url, onClose }: Props) {
  if (!open || !url) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" role="dialog" aria-modal="true">
      <div className="w-full max-w-4xl mx-4 bg-transparent">
        <div className="relative pb-[56.25%]">{/* 16:9 */}
          <iframe
            src={url}
            title="Video player"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button onClick={onClose} className="mt-4 bg-white text-black px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
}
