# Videos Directory

Place your video files here for use in the website.

## Supported Formats
- MP4 (recommended)
- WebM
- MOV

## Usage

In your React components:

```jsx
import { Video } from '../components/common';

<Video src="your-video.mp4" controls />
```

## Optimization Tips

1. **Compress videos** before uploading to keep file sizes manageable
2. **Use MP4 format** with H.264 codec for best compatibility
3. **Recommended dimensions**: 1920x1080 (1080p) or 1280x720 (720p)
4. **Frame rate**: 30fps is usually sufficient
5. **Create poster images** (thumbnails) for better loading experience

## Example Videos to Add

- `franklinwh-installation.mp4` - FranklinWH installation process
- `home-battery-demo.mp4` - Home battery system demonstration
- `aquaria-water-demo.mp4` - Aquaria water generation demo
- `span-panel-demo.mp4` - SPAN smart panel demonstration
- `customer-testimonial-1.mp4` - Customer testimonial video

## Git LFS (Optional)

For larger video files (>50MB), consider using Git LFS:

```bash
# Install Git LFS
git lfs install

# Track video files
git lfs track "*.mp4"
git lfs track "*.mov"
git lfs track "*.webm"

# Add and commit
git add .gitattributes
git commit -m "Set up Git LFS for videos"
```

This directory is tracked by Git - videos will be uploaded to GitHub when you commit and push.
