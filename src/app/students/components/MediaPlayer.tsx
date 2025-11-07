// src/app/students/components/MediaPlayer.tsx
"use client";

type Props = { src: string; title?: string };

function toYouTubeEmbed(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu")) {
      if (u.pathname === "/watch") {
        const id = u.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
  } catch {}
  return url;
}

function toVimeoEmbed(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : url;
    }
  } catch {}
  return url;
}

export default function MediaPlayer({ src, title = "Lesson Video" }: Props) {
  if (!src) return null;
  const isYouTube = src.includes("youtu");
  const isVimeo = src.includes("vimeo");

  if (isYouTube) {
    const embed = toYouTubeEmbed(src);
    return (
      <div className="aspect-video w-full bg-black">
        <iframe
          className="h-full w-full"
          src={embed}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (isVimeo) {
    const embed = toVimeoEmbed(src);
    return (
      <div className="aspect-video w-full bg-black">
        <iframe
          className="h-full w-full"
          src={embed}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="aspect-video w-full bg-black">
      <video className="h-full w-full" controls src={src}>
        Sorry, your browser doesn’t support embedded video.
      </video>
    </div>
  );
}
