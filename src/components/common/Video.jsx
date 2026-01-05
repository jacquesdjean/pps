import React from 'react';
import { useTheme } from '../../hooks/useTheme';

/**
 * Video component for displaying videos from /public/videos
 *
 * Usage:
 *   <Video src="installation-demo.mp4" />
 *   <Video src="franklinwh-overview.mp4" autoPlay loop muted />
 */
const Video = ({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  width = '100%',
  height = 'auto',
  borderRadius = 12,
  style = {},
}) => {
  const { colors } = useTheme();

  // Construct video path - assumes videos are in /public/videos/
  const videoSrc = src.startsWith('/') ? src : `/videos/${src}`;
  const posterSrc = poster ? (poster.startsWith('/') ? poster : `/videos/${poster}`) : undefined;

  return (
    <div
      style={{
        width,
        borderRadius,
        overflow: 'hidden',
        background: colors.backgroundAlt,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      <video
        src={videoSrc}
        poster={posterSrc}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        style={{
          width: '100%',
          height,
          display: 'block',
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

/**
 * YouTube embed component for external videos
 */
export const YouTubeEmbed = ({ videoId, title = 'YouTube video', style = {} }) => {
  const { colors } = useTheme();

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        borderRadius: 12,
        background: colors.backgroundAlt,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
      />
    </div>
  );
};

export default Video;
