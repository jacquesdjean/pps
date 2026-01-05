# Prometheus Power Solutions - Deployment Guide

## Prerequisites

1. **Node.js** (v16 or higher)
2. **Firebase CLI** installed globally
   ```bash
   npm install -g firebase-tools
   ```

## Initial Setup

### 1. Firebase Project Setup

```bash
# Login to Firebase
firebase login

# Initialize Firebase (if not already done)
firebase init hosting

# Select your Firebase project or create a new one
# Set public directory to: dist
# Configure as single-page app: Yes
# Set up automatic builds with GitHub: Optional
```

### 2. Configure Firebase Project ID

Copy the example config and add your project ID:
```bash
cp .firebaserc.example .firebaserc
```

Edit `.firebaserc` and replace `your-firebase-project-id` with your actual Firebase project ID.

## Building and Deploying

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Deploy to Firebase Hosting

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting

# Or deploy with a custom message
firebase deploy --only hosting -m "Your deployment message"
```

## Adding Videos

### For GitHub
1. Add video files to `public/videos/` directory
2. Commit and push to GitHub:
   ```bash
   git add public/videos/your-video.mp4
   git commit -m "Add video: your-video.mp4"
   git push
   ```

### Using Videos in Components

```jsx
import { Video } from '../components/common';

// Local video from public/videos/
<Video src="installation-demo.mp4" controls />

// With poster image
<Video
  src="franklinwh-overview.mp4"
  poster="franklinwh-thumb.jpg"
  autoPlay
  loop
  muted
/>
```

### For YouTube Videos

```jsx
import { YouTubeEmbed } from '../components/common';

<YouTubeEmbed
  videoId="your-youtube-id"
  title="Video title"
/>
```

## Supported Video Formats

- MP4 (recommended)
- WebM
- MOV
- AVI

**Note:** Keep video files optimized for web (under 50MB when possible).

## Environment Variables

If you need environment variables (e.g., for EmailJS):

1. Create `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Access in code:
   ```js
   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   ```

3. Add to `.gitignore` (already included)

## Custom Domain (Optional)

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the verification steps
4. Add your domain (e.g., prometheus-ps.com)
5. Firebase will provide DNS records to add to your domain registrar

## Continuous Deployment with GitHub Actions

Create `.github/workflows/firebase-hosting.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-firebase-project-id
```

## Troubleshooting

### Build fails
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### Videos not loading
- Check file path (should be in `public/videos/`)
- Verify file format is supported
- Check Firebase hosting limits (10GB max)

### Routing issues
- Ensure `firebase.json` has rewrite rules for SPA
- Clear browser cache

## Performance Tips

1. **Optimize images**: Use WebP format for images
2. **Lazy load videos**: Use `loading="lazy"` attribute
3. **Enable caching**: Already configured in `firebase.json`
4. **Monitor performance**: Use Firebase Performance Monitoring

## Support

For issues, contact:
- Email: lukas@prometheus-ps.com
- GitHub: Create an issue in the repository
