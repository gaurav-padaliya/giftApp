# Quick Customization Guide

This guide will help you personalize the romantic web app in just a few simple steps.

## Step 1: Customize the Text (5 minutes)

Open `src/config.js` and change:

### Her Name
```javascript
name: "Sarah", // Change to her name
```

### Landing Page
```javascript
landing: {
  mainText: "To the most beautiful girl I've ever met",
  subText: "I built this little corner of the internet just for you.",
  buttonText: "Click to continue",
},
```

### Appreciation Message
```javascript
appreciationStory: `You are easily the most amazing girl I have ever met.
Your smile has a way of making everything brighter.
The way you laugh, talk, and exist makes the world feel lighter.`,
```

### The Question
```javascript
question: {
  setup: "Can I ask you something?",
  mainQuestion: "Do you love me?",
  yesResponse: "You just made me the happiest person.",
},
```

### Ending Message
```javascript
ending: {
  message: `If the universe had a 'best girl ever' award...
you would win it every single time.`,
},
```

## Step 2: Add Photos (10 minutes)

### Option A: Use Online Photos (Easiest)
Just add direct image URLs to the config:

```javascript
photos: [
  "https://example.com/photo1.jpg",
  "https://example.com/photo2.jpg",
],
```

### Option B: Use Local Photos
1. Create a folder: `public/images`
2. Add your photos to this folder
3. Reference them in config:

```javascript
photos: [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
],
```

## Step 3: Customize Special Qualities (5 minutes)

Edit the `specialQualities` array in `src/config.js`:

```javascript
specialQualities: [
  {
    emoji: "😊",
    title: "Your Smile",
    description: "It lights up every room you walk into",
  },
  {
    emoji: "💖",
    title: "Your Kindness",
    description: "The way you care for everyone around you",
  },
  // Add more qualities...
],
```

You can:
- Add new cards
- Remove existing ones
- Change emojis, titles, and descriptions

## Step 4: Add Music (Optional, 10 minutes)

### 1. Create music folder
```bash
mkdir public/music
```

### 2. Add your music files
Copy your `.mp3` or `.wav` files to `public/music/`

### 3. Update config
```javascript
music: [
  {
    name: "Our Song",
    url: "/music/romantic-song.mp3",
  },
  {
    name: "Another Song",
    url: "/music/song2.mp3",
  },
],
```

**Note:** If you don't want music, set it to an empty array:
```javascript
music: [],
```

## Step 5: Run the App

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to see your changes!

## Quick Tips

### Colors
The app uses pink/purple gradients by default. To change colors, edit:
- `src/index.css` - for global styles
- `tailwind.config.js` - for theme colors

### Fonts
The app uses:
- **Pacifico** for fancy cursive text
- **Poppins** for regular text

To change fonts, update the Google Fonts import in `src/index.css`

### Animations
All animations use Framer Motion. To adjust:
- Speed: Change `duration` values in component files
- Type: Change `transition` types (spring, tween, etc.)

## Common Customizations

### Remove a Section
In `src/App.jsx`, comment out the section you don't want:

```javascript
{/* <Section3AppreciationStory /> */}
```

### Change the Order of Sections
Rearrange the components in `src/App.jsx`:

```javascript
<Section4SpecialQualities />
<Section2PhotoMemory />
<Section3AppreciationStory />
```

### Disable the Floating Hearts
In `src/App.jsx`, comment out:

```javascript
{/* <FloatingHearts /> */}
```

## Need More Help?

Check the main `README.md` file for detailed documentation!

---

Remember: The goal is to make it personal and meaningful. Don't worry about making it perfect - the thought and effort will shine through!
