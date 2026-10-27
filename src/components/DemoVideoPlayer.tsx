"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type DemoVideoPlayerProps = {
  src?: string;
  title?: string;
  subtitle?: string;
};

export default function DemoVideoPlayer({
  src = "/videos/intorza-quotation-demo-english.mp4",
  title = "Demo #1: Quotation in English - Intorza product walkthrough",
  subtitle = "Quotation walkthrough - English",
}: DemoVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = false;
    video.muted = false;
    video.volume = 1;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Audible autoplay may require the visitor to press play first.
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function enableSound() {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = false;
    video.muted = false;
    video.volume = 1;
  }

  async function playWithSound() {
    const video = videoRef.current;
    if (!video) return;
    enableSound();
    try {
      await video.play();
      setStarted(true);
    } catch {
      setError(true);
    }
  }

  return (
    <div>
      <div className="relative overflow-hidden bg-[#111827]">
        <video
          ref={videoRef}
          controls
          controlsList="nodownload"
          playsInline
          preload="metadata"
          aria-label={title}
          className="aspect-video w-full"
          onPlay={() => {
            setStarted(true);
            document.querySelectorAll("video").forEach((other) => {
              if (other !== videoRef.current) other.pause();
            });
          }}
          onError={() => setError(true)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video. Please try a different browser.
        </video>
        {!started && !error && (
          <div className="pointer-events-none absolute inset-x-0 top-0 bottom-14 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-[#111827]/60 to-[#111827]/95 p-5 text-center text-white">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">
              Your next quotation starts here
            </span>
            <button
              type="button"
              onClick={playWithSound}
              className="pointer-events-auto inline-flex items-center gap-3 border-2 border-white bg-primary px-5 py-4 font-semibold text-white transition-colors hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Play className="h-5 w-5" fill="currentColor" aria-hidden="true" />
              Play demo with sound
            </button>
            <span className="text-sm text-white/70">{subtitle}</span>
          </div>
        )}
      </div>
      {error && (
        <p role="status" className="bg-background p-4 text-sm text-foreground">
          Unable to play here? Try refreshing the page or watching in a different browser.
        </p>
      )}
    </div>
  );
}
