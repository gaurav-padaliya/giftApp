# How to Add Your Photos and Music

## Adding Photos

### Step 1: Add your photo files
Copy your photos to this folder:
```
romantic-app/public/images/
```

For example:
- `romantic-app/public/images/photo1.jpg`
- `romantic-app/public/images/photo2.jpg`
- `romantic-app/public/images/photo3.jpg`

### Step 2: Update the config file
Open `src/config.js` and find the `photos` array:

```javascript
photos: [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
],
```

**Replace with your actual photo filenames!**

### Example:
If you have photos named:
- `her_smiling.jpg`
- `us_together.jpg`
- `beautiful_moment.png`

Your config should be:
```javascript
photos: [
  "/images/her_smiling.jpg",
  "/images/us_together.jpg",
  "/images/beautiful_moment.png",
],
```

---

## Adding Music (Autoplay Enabled!)

### Step 1: Add your music files
Copy your music files (.mp3, .wav, .m4a) to:
```
romantic-app/public/music/
```

For example:
- `romantic-app/public/music/romantic-song.mp3`
- `romantic-app/public/music/love-song.mp3`

### Step 2: Update the config file
Open `src/config.js` and find the `music` array:

```javascript
music: [
  {
    name: "Beautiful Song",
    url: "/music/romantic-song.mp3",
  },
  {
    name: "Our Song",
    url: "/music/love-song.mp3",
  },
],
```

**Replace with your actual music filenames!**

### Music Features:
✅ **Automatically plays** when the app loads!
✅ **Loops continuously** if you have one song
✅ **Auto-advances** to next song if you have multiple songs
✅ Volume set to 50% (perfect background level)
✅ Users can pause/play with the music player controls

---

## Quick Reference

### File Structure:
```
romantic-app/
├── public/
│   ├── images/          ← Put your photos here
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── photo3.jpg
│   └── music/           ← Put your music files here
│       ├── song1.mp3
│       └── song2.mp3
└── src/
    └── config.js        ← Update photo/music paths here
```

### Supported Image Formats:
- .jpg / .jpeg
- .png
- .gif
- .webp

### Supported Music Formats:
- .mp3 (recommended)
- .wav
- .m4a
- .ogg

---

## Using Online URLs (Alternative)

You can also use direct image/music URLs instead of local files:

```javascript
photos: [
  "https://example.com/photo1.jpg",
  "https://example.com/photo2.jpg",
],

music: [
  {
    name: "Romantic Song",
    url: "https://example.com/song.mp3",
  },
],
```

---

## Tips

1. **Image Size**: For best performance, resize images to under 2MB
2. **Music Size**: Keep music files under 10MB for faster loading
3. **File Names**: Avoid spaces in filenames (use dashes or underscores)
   - Good: `beautiful-smile.jpg`
   - Bad: `beautiful smile.jpg`

---

## Need Help?

1. Make sure file paths start with `/` (e.g., `/images/photo.jpg`)
2. Check that filenames match exactly (case-sensitive!)
3. Refresh the browser after updating config.js
4. Check browser console (F12) for any error messages
