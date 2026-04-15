# How to Add Your Own Crescent Moon Image

## Option 1: Download and Use the Image from Freepik

### Step 1: Download the Image
1. Go to the Freepik link you provided
2. Download the crescent moon image
3. Save it as `crescent-moon.png` (or any name you prefer)

### Step 2: Add Image to Project
1. Place the image in: `SAJIDH/public/images/crescent-moon.png`

### Step 3: Update LoadingScreen.js

Replace the SVG in `src/components/LoadingScreen.js` with:

```javascript
<motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ duration: 0.8, type: "spring" }}
  className="mb-8"
>
  <img 
    src="/images/crescent-moon.png" 
    alt="Crescent Moon" 
    className="w-28 h-28 mx-auto object-contain"
  />
</motion.div>
```

### Step 4: Update InvitationCover.js

Replace the crescent moon at the top-right:

```javascript
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 0.3, scale: 1 }}
  transition={{ duration: 1.5, delay: 0.5 }}
  className="absolute top-10 right-10"
>
  <img 
    src="/images/crescent-moon.png" 
    alt="Crescent Moon" 
    className="w-24 h-24 object-contain"
  />
</motion.div>
```

### Step 5: Update Footer.js

Replace the divider crescent moon:

```javascript
<svg className="w-12 h-12 mx-4" viewBox="0 0 120 120" fill="none">
  {/* Replace with: */}
</svg>

{/* With: */}
<img 
  src="/images/crescent-moon.png" 
  alt="Crescent Moon" 
  className="w-12 h-12 mx-4 object-contain"
/>
```

---

## Option 2: Use Free Islamic Crescent Moon Images

### Recommended Free Sources:

1. **Unsplash** (Free, no attribution required)
   - https://unsplash.com/s/photos/crescent-moon
   - Search: "crescent moon" or "islamic crescent"

2. **Pexels** (Free, no attribution required)
   - https://www.pexels.com/search/crescent%20moon/

3. **Pixabay** (Free, no attribution required)
   - https://pixabay.com/images/search/crescent%20moon/

4. **Flaticon** (Free with attribution)
   - https://www.flaticon.com/search?word=crescent%20moon

### Download Steps:
1. Choose an image from any source above
2. Download in PNG format (transparent background preferred)
3. Save as `crescent-moon.png`
4. Place in `SAJIDH/public/images/`
5. Follow Step 3-5 from Option 1 above

---

## Option 3: Use Current Enhanced SVG (Already Implemented)

The current code now has an **enhanced 3D-style crescent moon SVG** with:
- ✅ Gold gradient (3D effect)
- ✅ Shadow for depth
- ✅ Highlight for shine
- ✅ Smooth animations
- ✅ No external image needed

This is **already working** in your website!

---

## Current Implementation

### What's Already Done:
1. ✅ **Loading Screen** - Enhanced 3D crescent moon with gradient
2. ✅ **Invitation Cover** - 3 crescent moons at bottom with gradient
3. ✅ **Footer** - Crescent moon divider with gradient
4. ✅ **Hero Section** - Crescent moon in top-right corner

### Features:
- Gold gradient (FFD700 → D4AF37 → B8860B)
- 3D shadow effect
- Smooth rotation animation
- Spring animation on entrance
- Proper Islamic crescent shape

---

## If You Want to Use a Specific Image

### Quick Code Update:

**For LoadingScreen.js:**
```javascript
// Replace the entire <svg> block with:
<img 
  src="/images/crescent-moon.png" 
  alt="Islamic Crescent Moon" 
  className="w-28 h-28 mx-auto object-contain drop-shadow-2xl"
/>
```

**For InvitationCover.js (top-right):**
```javascript
// In the crescent moon section, replace <svg> with:
<img 
  src="/images/crescent-moon.png" 
  alt="Crescent Moon" 
  className="w-24 h-24 object-contain opacity-30"
/>
```

**For InvitationCover.js (bottom decorations):**
```javascript
// Inside the map function, replace <svg> with:
<img 
  src="/images/crescent-moon.png" 
  alt="Crescent Moon" 
  className="w-8 h-8 object-contain"
/>
```

**For Footer.js:**
```javascript
// Replace the <svg> in the divider with:
<img 
  src="/images/crescent-moon.png" 
  alt="Crescent Moon" 
  className="w-12 h-12 mx-4 object-contain"
/>
```

---

## Recommended Image Specifications

For best results, use an image with:
- **Format**: PNG with transparent background
- **Size**: 512x512 pixels or larger
- **Color**: Gold/yellow tones (or will be styled by CSS)
- **Style**: 3D or flat design
- **Quality**: High resolution for crisp display

---

## Note About Freepik

The Freepik link you provided requires:
- Premium account to download without watermark
- Attribution if using free version

**Alternative**: Use the current enhanced SVG (already implemented) or download from free sources listed above.

---

## Current Status

✅ **Your website already has beautiful 3D-style crescent moons!**

The SVG implementation provides:
- No external dependencies
- Fast loading
- Perfect scaling
- Customizable colors
- 3D gradient effect

**You can use it as-is, or follow the steps above to add your own image!**

---

Need help? The current implementation is production-ready and looks great! 🌙✨
