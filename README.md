# Romantic Web Experience

A beautiful, interactive single-page web application designed to make someone feel extremely special and appreciated.

## Features

- **Magical Landing Page** with typewriter animation
- **Photo Gallery** with sparkles and smooth transitions
- **Appreciation Story** with typewriter effect and floating hearts
- **Special Qualities Cards** with glow effects
- **Playful YES/NO Question** with button animations (NO button runs away!)
- **Background Music Player** with playlist support
- **Surprise Ending** with particles and animations
- **Floating Hearts** background throughout the experience

## Technologies Used

- React
- Vite
- TailwindCSS
- Framer Motion
- React Confetti
- HowlerJS

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Customization

All content can be easily customized by editing the `src/config.js` file:

### Change Her Name
```javascript
name: "Beautiful"
```

### Add Your Photos
```javascript
photos: [
  "path/to/photo1.jpg",
  "path/to/photo2.jpg",
  "path/to/photo3.jpg",
]
```

You can use:
- Local images (place them in the `public` folder and reference as `/images/photo.jpg`)
- Online image URLs

### Add Music
```javascript
music: [
  {
    name: "Song Name",
    url: "/music/song.mp3", // Place music files in public/music folder
  },
]
```

### Customize Messages

Edit any of the text in the config file:
- Landing page messages
- Appreciation story
- Special qualities cards
- Question texts
- Ending message

### Example Config Structure

```javascript
export const config = {
  name: "Sarah",
  photos: [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
  ],
  music: [
    {
      name: "Our Song",
      url: "/music/romantic-song.mp3",
    },
  ],
  landing: {
    mainText: "To the most amazing person",
    subText: "I made this just for you",
    buttonText: "Continue",
  },
  // ... more customization options
};
```

## Adding Music Files

1. Create a `public/music` folder in your project
2. Add your music files (.mp3, .wav, etc.)
3. Update the `config.js` file with the music paths
4. The music player will appear after the landing page

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## Deployment

You can deploy this app to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Tips

- Use high-quality photos for the best experience
- Keep music files under 5MB for faster loading
- Test on mobile devices for responsive design
- The NO button will run away when hovered - it's intentional and playful!

## Troubleshooting

**Music not playing?**
- Make sure your music files are in the `public/music` folder
- Check that the paths in `config.js` are correct
- Some browsers require user interaction before playing audio

**Photos not showing?**
- If using local photos, place them in the `public` folder
- If using URLs, make sure they're publicly accessible

## License

This is a personal project. Feel free to customize it for your own romantic gestures!

---

Made with ❤️ and lots of animations
# giftApp
