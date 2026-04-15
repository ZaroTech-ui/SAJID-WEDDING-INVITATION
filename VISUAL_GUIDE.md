# 🎨 Visual Design Guide - Sajid & Raziya Wedding Website

## 🌈 Color Palette

### Primary Colors
```
Emerald Green (Primary)
HEX: #064E3B
RGB: 6, 78, 59
Usage: Backgrounds, primary text, borders

Gold (Accent)
HEX: #D4AF37
RGB: 212, 175, 55
Usage: Headings, icons, decorative elements, hover states

Ivory (Background)
HEX: #FFFEF7
RGB: 255, 254, 247
Usage: Main background, card backgrounds, light text
```

### Gradient Combinations
```css
/* Hero Background */
background: linear-gradient(to bottom right, #064E3B, #065F46, #064E3B);

/* Progress Bar */
background: linear-gradient(to right, #064E3B, #D4AF37, #064E3B);

/* Button Hover */
background: linear-gradient(to right, #064E3B, #065F46);

/* Decorative Dividers */
background: linear-gradient(to right, transparent, #D4AF37, transparent);
```

---

## 📝 Typography

### Font Families

**Playfair Display** (Headings)
- Weights: 400, 500, 600, 700, 800
- Usage: All headings (h1-h6), couple names, section titles
- Style: Elegant, luxury serif
- Example: "Sajid ❤️ Raziya"

**Cormorant Garamond** (Body)
- Weights: 300, 400, 500, 600, 700
- Usage: Body text, paragraphs, descriptions
- Style: Refined, readable serif
- Example: Wedding details, venue information

**Amiri** (Arabic)
- Weights: 400, 700
- Usage: Arabic text, Bismillah, Islamic quotes
- Style: Traditional Arabic calligraphy
- Example: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"

### Font Sizes
```css
/* Hero Title */
font-size: 6rem (96px) on desktop
font-size: 3.75rem (60px) on mobile

/* Section Headings */
font-size: 3.75rem (60px) on desktop
font-size: 2.25rem (36px) on mobile

/* Subheadings */
font-size: 2rem (32px) on desktop
font-size: 1.5rem (24px) on mobile

/* Body Text */
font-size: 1.125rem (18px) on desktop
font-size: 1rem (16px) on mobile

/* Small Text */
font-size: 0.875rem (14px)
```

---

## 🎭 Section Layouts

### 1. Hero Section
```
┌─────────────────────────────────────────┐
│  [Music Toggle Button]          [Top]   │
│                                          │
│         بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ         │
│   In the Name of Allah, The Most...     │
│                                          │
│         [Crescent Moon]                  │
│                                          │
│        Sajid ❤️ Raziya                  │
│        ─────────────                     │
│   Together in Faith, United in Love     │
│                                          │
│           7th May 2026                   │
│        Guntur, Andhra Pradesh            │
│                                          │
│         [Scroll Down ↓]                  │
│                                          │
│    [Mosque Silhouette at Bottom]        │
└─────────────────────────────────────────┘
```

### 2. Invitation Section
```
┌─────────────────────────────────────────┐
│    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ            │
│         ─────────────                    │
│                                          │
│  ╔═══════════════════════════════════╗  │
│  ║  [Corner]  Wedding Invitation     ║  │
│  ║                                   ║  │
│  ║   [Icon]        [Icon]            ║  │
│  ║   Sajid M.S.    Raziya B.B.A.     ║  │
│  ║   Software      Fashion           ║  │
│  ║   Engineer      Designing         ║  │
│  ║                                   ║  │
│  ║   ─── ⭐ ───                      ║  │
│  ║                                   ║  │
│  ║   Nikkah Ceremony                 ║  │
│  ║   7th May 2026, 10:30 AM          ║  │
│  ║   Amaravathi Road, Guntur         ║  │
│  ║                                   ║  │
│  ║   Reception                       ║  │
│  ║   10th May 2026, 7:30 PM          ║  │
│  ║   Martur, Bapatla District        ║  │
│  ║                                   ║  │
│  ║   "Quranic Verse 30:21"           ║  │
│  ║  [Corner]                [Corner] ║  │
│  ╚═══════════════════════════════════╝  │
└─────────────────────────────────────────┘
```

### 3. Countdown Section
```
┌─────────────────────────────────────────┐
│   Counting Down to Forever              │
│         ─────────────                    │
│   Thursday, 7th May 2026 at 10:30 AM    │
│                                          │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐   │
│  │ 365 │  │ 12  │  │ 45  │  │ 30  │   │
│  │DAYS │  │HOURS│  │MINS │  │SECS │   │
│  └─────┘  └─────┘  └─────┘  └─────┘   │
│                                          │
│  Join us as we begin our journey...     │
└─────────────────────────────────────────┘
```

### 4. Location Section
```
┌─────────────────────────────────────────┐
│         Venue Details                    │
│         ─────────────                    │
│                                          │
│  ╔═══════════════════════════════════╗  │
│  ║  Nikkah Ceremony    │  [Map View] ║  │
│  ║  📍 Address         │             ║  │
│  ║  📅 Date & Time     │   Google    ║  │
│  ║  [View on Maps]     │    Maps     ║  │
│  ╚═══════════════════════════════════╝  │
│                                          │
│  ╔═══════════════════════════════════╗  │
│  ║  Reception          │  [Map View] ║  │
│  ║  📍 Address         │             ║  │
│  ║  📅 Date & Time     │   Google    ║  │
│  ║  [View on Maps]     │    Maps     ║  │
│  ╚═══════════════════════════════════╝  │
│                                          │
│         [QR Code]                        │
└─────────────────────────────────────────┘
```

### 5. Gallery Section
```
┌─────────────────────────────────────────┐
│         Our Memories                     │
│         ─────────────                    │
│   Capturing moments of love and joy      │
│                                          │
│  ┌────┐  ┌────┐  ┌────┐                │
│  │Img1│  │Img2│  │Img3│                │
│  └────┘  └────┘  └────┘                │
│  ┌────┐  ┌────┐  ┌────┐                │
│  │Img4│  │Img5│  │Img6│                │
│  └────┘  └────┘  └────┘                │
│                                          │
│  (Masonry layout - varying heights)      │
└─────────────────────────────────────────┘
```

### 6. Footer Section
```
┌─────────────────────────────────────────┐
│      ─── ⭐ ───                         │
│                                          │
│  Your Presence is Our Greatest Gift     │
│  We request your presence and blessings  │
│                                          │
│  ┌──────────────┐  ┌──────────────┐    │
│  │ Groom's      │  │ Bride's      │    │
│  │ Family       │  │ Family       │    │
│  │ 📞 +91...    │  │ 📞 +91...    │    │
│  └──────────────┘  └──────────────┘    │
│                                          │
│         ما شاء الله                      │
│    "What Allah wills, will be"          │
│                                          │
│  ────────────────────────────────────   │
│              ❤️                          │
│         Sajid & Raziya                   │
│         7th May 2026                     │
└─────────────────────────────────────────┘
```

---

## 🎨 UI Components

### Glassmorphism Cards
```css
background: rgba(255, 255, 255, 0.25);
backdrop-filter: blur(10px);
border: 1px solid rgba(212, 175, 55, 0.3);
border-radius: 1.5rem;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

### Gold Buttons
```css
background: linear-gradient(to right, #064E3B, #065F46);
color: #D4AF37;
padding: 1rem 2rem;
border-radius: 9999px;
box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);

/* Hover */
transform: scale(1.05);
box-shadow: 0 0 30px rgba(212, 175, 55, 0.8);
```

### Decorative Dividers
```
─── ⭐ ───
or
─────────────
```

### Islamic Patterns
```
Repeating geometric patterns:
- 45° diagonal lines
- -45° diagonal lines
- Opacity: 0.03-0.1
- Colors: Gold and Emerald
```

---

## ✨ Animation Patterns

### Entrance Animations
```javascript
// Fade In
initial: { opacity: 0 }
animate: { opacity: 1 }
duration: 0.8s

// Slide Up
initial: { opacity: 0, y: 50 }
animate: { opacity: 1, y: 0 }
duration: 0.8s

// Scale In
initial: { opacity: 0, scale: 0.8 }
animate: { opacity: 1, scale: 1 }
duration: 0.5s
```

### Hover Animations
```javascript
// Scale
whileHover: { scale: 1.05 }

// Glow
hover: box-shadow: 0 0 30px rgba(212, 175, 55, 0.8)

// Lift
hover: transform: translateY(-5px)
```

### Continuous Animations
```javascript
// Float
animate: { y: [-20, 20, -20] }
duration: 3s
repeat: Infinity

// Pulse
animate: { scale: [1, 1.1, 1] }
duration: 2s
repeat: Infinity

// Bounce
animate: { y: [0, 10, 0] }
duration: 1.5s
repeat: Infinity
```

---

## 📐 Spacing System

### Padding/Margin Scale
```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  1rem    (16px)
lg:  1.5rem  (24px)
xl:  2rem    (32px)
2xl: 3rem    (48px)
3xl: 4rem    (64px)
4xl: 5rem    (80px)
```

### Section Spacing
```
Section padding: 5rem (80px) vertical
Container max-width: 1280px
Content padding: 1rem (16px) horizontal
Gap between elements: 1.5rem (24px)
```

---

## 🎯 Responsive Breakpoints

```css
/* Mobile First */
Default: < 768px (Mobile)

/* Tablet */
md: 768px - 1024px

/* Desktop */
lg: 1024px - 1280px

/* Large Desktop */
xl: > 1280px
```

### Responsive Adjustments
```
Mobile:
- Single column layouts
- Smaller font sizes
- Reduced padding
- Stacked elements

Tablet:
- Two column layouts
- Medium font sizes
- Balanced spacing

Desktop:
- Multi-column layouts
- Full font sizes
- Maximum spacing
- All features visible
```

---

## 🌟 Icon Usage

### Icons Library: React Icons (Heroicons)

```javascript
// Location
<HiLocationMarker /> - Venue markers

// Phone
<HiPhone /> - Contact numbers

// Email
<HiMail /> - Email addresses

// Map
<HiMap /> - Map buttons

// Heart
<HiHeart /> - Love symbol

// Volume
<HiVolumeUp /> - Music on
<HiVolumeOff /> - Music off

// Navigation
<HiChevronDown /> - Scroll indicator
<HiX /> - Close button
```

---

## 🎨 Design Principles

### 1. Hierarchy
- Large, bold headings
- Clear section separation
- Visual weight through size and color
- Gold for emphasis

### 2. Contrast
- Dark emerald vs light ivory
- Gold accents pop against dark backgrounds
- Text legibility maintained

### 3. Balance
- Symmetrical layouts
- Centered content
- Equal spacing
- Visual equilibrium

### 4. Consistency
- Repeated patterns
- Consistent spacing
- Uniform border radius
- Matching animations

### 5. Elegance
- Minimal design
- Luxury materials (glass, gold)
- Smooth animations
- Premium feel

---

## 🕌 Islamic Design Elements

### Geometric Patterns
```
- Repeating diagonal lines
- Star motifs (8-pointed stars)
- Interlocking shapes
- Symmetrical designs
```

### Calligraphy
```
- Bismillah (بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ)
- Masha Allah (ما شاء الله)
- Quranic verses
- Arabic script (Amiri font)
```

### Symbols
```
- Crescent moon 🌙
- Star ⭐
- Mosque silhouette 🕌
- Lanterns
```

---

## 💡 Design Tips

### For Customization:

1. **Maintain Color Harmony**
   - Stick to emerald, gold, ivory palette
   - Use gradients for depth
   - Keep contrast high

2. **Preserve Spacing**
   - Don't reduce padding too much
   - Maintain breathing room
   - Keep consistent gaps

3. **Animation Balance**
   - Don't overdo animations
   - Keep durations reasonable (0.3s - 1s)
   - Use easing functions

4. **Typography Hierarchy**
   - Keep size differences clear
   - Maintain font family consistency
   - Use weights for emphasis

5. **Islamic Aesthetics**
   - Keep patterns subtle
   - Respect cultural elements
   - Maintain elegance

---

## 📱 Mobile Design Considerations

### Touch Targets
```
Minimum size: 44px × 44px
Buttons: 48px height minimum
Spacing between: 8px minimum
```

### Mobile Optimizations
```
- Larger text for readability
- Simplified layouts
- Reduced animations
- Touch-friendly interactions
- Optimized images
```

---

## 🎨 Visual Hierarchy

### Primary Elements (Most Important)
1. Couple names
2. Wedding date
3. Venue information
4. Call-to-action buttons

### Secondary Elements
1. Section headings
2. Countdown timer
3. Contact information
4. Navigation elements

### Tertiary Elements
1. Decorative patterns
2. Background elements
3. Subtle animations
4. Footer information

---

**This visual guide ensures consistency and elegance throughout the wedding website!**

💚 **Sajid ❤️ Raziya** 💛
