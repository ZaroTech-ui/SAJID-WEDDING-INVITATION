# 🎉 Setup Instructions for Sajid & Raziya Wedding Website

## 📋 Quick Start Guide

### Step 1: Install Dependencies

Open your terminal in the SAJIDH folder and run:

```bash
npm install
```

This will install all required packages:
- React 18.2.0
- Framer Motion (for animations)
- React Icons
- Tailwind CSS (configured)

### Step 2: Add Background Music (Optional but Recommended)

1. Find a beautiful Islamic instrumental music file (MP3 format)
2. Place it in: `public/music/wedding-music.mp3`
3. The music will auto-play with fade-in when visitors open the website

**Recommended Music Sources:**
- Islamic instrumental nasheeds
- Peaceful Arabic instrumental music
- Royalty-free Islamic wedding music

### Step 3: Add Your Wedding Photos

1. Prepare 6-10 high-quality wedding photos
2. Place them in `public/images/` folder (create this folder)
3. Update the image paths in `src/components/Gallery.js`:

```javascript
const images = [
  { id: 1, url: '/images/photo1.jpg', alt: 'Wedding Photo 1' },
  { id: 2, url: '/images/photo2.jpg', alt: 'Wedding Photo 2' },
  // Add more...
];
```

### Step 4: Update Contact Numbers

Edit `src/components/Footer.js` and replace placeholder numbers with actual contact information:

```javascript
// Groom's Family
<a href="tel:+919876543210">+91 98765 43210</a>

// Bride's Family
<a href="tel:+919876543212">+91 98765 43212</a>
```

### Step 5: Update Google Maps Links

Edit `src/components/Location.js` and update the map URLs with your actual venue locations:

1. Go to Google Maps
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Replace the `mapUrl` in the code

### Step 6: Run the Website

```bash
npm start
```

The website will open at `http://localhost:3000`

## 🎨 Customization Options

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  emerald: {
    950: '#064E3B', // Change this
  },
  gold: '#D4AF37', // Change this
  ivory: '#FFFEF7', // Change this
}
```

### Modify Wedding Details

All wedding information is in `src/components/Invitation.js`. Update:
- Names
- Dates
- Times
- Venues
- Professions

### Add More Sections

Create new components in `src/components/` and import them in `src/App.js`

## 🚀 Deployment

### Option 1: Netlify (Easiest)

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://www.netlify.com/)
3. Drag and drop the `build` folder
4. Your site is live!

### Option 2: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/wedding",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📱 Mobile Optimization

The website is fully responsive and works perfectly on:
- ✅ Mobile phones
- ✅ Tablets
- ✅ Desktops
- ✅ Large screens

## 🎵 Music Auto-Play Note

Some browsers block auto-play. If music doesn't start automatically:
- Users can click the music toggle button (top-right)
- This is a browser security feature

## 🐛 Troubleshooting

### Issue: npm install fails
**Solution**: Make sure you have Node.js 14+ installed
```bash
node --version
```

### Issue: Music doesn't play
**Solution**: 
1. Check file path: `public/music/wedding-music.mp3`
2. Check file format (must be MP3)
3. Try clicking the music toggle button

### Issue: Images don't load
**Solution**: 
1. Check file paths in Gallery.js
2. Make sure images are in `public/images/`
3. Use forward slashes in paths: `/images/photo.jpg`

### Issue: Maps don't show
**Solution**: 
1. Check your internet connection
2. Verify the Google Maps embed URL
3. Make sure the URL is in the iframe src attribute

## 📞 Support

For any issues or questions:
- Check the README.md file
- Review component files for inline comments
- Test in different browsers

## ✨ Features Included

✅ Fullscreen hero with typewriter animation
✅ Background music with toggle
✅ Luxury glassmorphism invitation card
✅ Live countdown timer
✅ Interactive Google Maps
✅ Photo gallery with lightbox
✅ Smooth scroll animations
✅ Islamic design patterns
✅ Arabic calligraphy
✅ Floating gold particles
✅ Loading screen animation
✅ Scroll progress bar
✅ Fully responsive design
✅ Premium UI/UX

## 🎯 Final Checklist

Before going live:
- [ ] Add background music file
- [ ] Update all contact numbers
- [ ] Add wedding photos
- [ ] Update Google Maps links
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Share with family for review
- [ ] Deploy to hosting service

---

**Congratulations on your wedding! May Allah bless your union with love, happiness, and prosperity. 💚💛**

*Sajid ❤️ Raziya - 7th May 2026*
