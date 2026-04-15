# Sajid ❤️ Raziya - Luxury Islamic Wedding Website

A premium, elegant wedding invitation website built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Fullscreen Hero Section** with typewriter animation and Islamic elements
- **Background Music** with auto-play and mute/unmute toggle
- **Luxury Invitation Card** with glassmorphism design
- **Live Countdown Timer** to the wedding date
- **Interactive Location Maps** for both Nikkah and Reception venues
- **Photo Gallery** with masonry layout and lightbox preview
- **Smooth Animations** using Framer Motion
- **Islamic Design Elements** including Arabic calligraphy and geometric patterns
- **Fully Responsive** design for all devices
- **Premium UI** with gold accents and emerald green theme

## 🎨 Color Scheme

- **Emerald Green**: #064E3B
- **Gold**: #D4AF37
- **Ivory**: #FFFEF7

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd SAJIDH
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Adding Background Music

1. Add your Islamic instrumental music file to `public/music/wedding-music.mp3`
2. The music will auto-play with fade-in effect when the page loads

### Updating Wedding Photos

Replace the placeholder images in `src/components/Gallery.js` with your actual wedding photos:

```javascript
const images = [
  { id: 1, url: '/images/photo1.jpg', alt: 'Wedding Photo 1' },
  // Add more photos...
];
```

### Updating Contact Information

Edit the phone numbers in `src/components/Footer.js`:

```javascript
// Update with actual contact numbers
<a href="tel:+919876543210">+91 98765 43210</a>
```

### Customizing Google Maps

Update the map URLs in `src/components/Location.js` with your actual venue coordinates.

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Deployment

You can deploy this website to:
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 🎯 Components

- `Hero.js` - Landing section with typewriter effect
- `Invitation.js` - Wedding details card
- `Countdown.js` - Live countdown timer
- `Location.js` - Venue maps and details
- `Gallery.js` - Photo gallery with lightbox
- `Footer.js` - Contact information and closing message
- `MusicToggle.js` - Background music control
- `ScrollProgress.js` - Page scroll indicator
- `LoadingScreen.js` - Initial loading animation
- `FloatingParticles.js` - Decorative gold particles

## 🎨 Fonts Used

- **Playfair Display** - Headings
- **Cormorant Garamond** - Body text
- **Amiri** - Arabic text

## 📄 License

This project is created for personal use for Sajid and Raziya's wedding.

## 💝 Wedding Details

- **Groom**: Sajid M.S. (Software Engineer, Meta - California, USA)
- **Bride**: Raziya B.B.A. (Fashion Designing)
- **Nikkah**: 7th May 2026, Thursday at 10:30 AM
- **Reception**: 10th May 2026, Sunday at 7:30 PM

---

Made with ❤️ for Sajid & Raziya
