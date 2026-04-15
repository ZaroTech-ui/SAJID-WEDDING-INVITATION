# 🚀 Deployment Guide - Sajid & Raziya Wedding Website

## Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] Added background music file (`public/music/wedding-music.mp3`)
- [ ] Updated wedding photos in Gallery component
- [ ] Updated contact phone numbers in Footer
- [ ] Updated Google Maps links with actual venues
- [ ] Tested on mobile devices
- [ ] Tested on different browsers (Chrome, Safari, Firefox)
- [ ] Verified all animations work smoothly
- [ ] Checked all text for typos

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Why Netlify?**
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Drag & drop deployment
- ✅ Continuous deployment from Git

**Steps:**

1. **Build your project:**
   ```bash
   cd SAJIDH
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up / Log in
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `build` folder
   - Done! Your site is live!

3. **Custom Domain (Optional):**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

**Netlify CLI (Alternative):**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

### Option 2: Vercel (Great for React)

**Why Vercel?**
- ✅ Optimized for React
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Git integration
- ✅ Fast global CDN

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd SAJIDH
   vercel
   ```

3. **Follow prompts:**
   - Link to your account
   - Confirm project settings
   - Deploy!

4. **Production deployment:**
   ```bash
   vercel --prod
   ```

**Vercel Dashboard:**
- Go to [vercel.com](https://vercel.com/)
- Import your GitHub repository
- Automatic deployments on every push

---

### Option 3: GitHub Pages

**Why GitHub Pages?**
- ✅ Free hosting
- ✅ Direct from GitHub repo
- ✅ Easy updates via Git

**Steps:**

1. **Install gh-pages:**
   ```bash
   cd SAJIDH
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines:
   ```json
   {
     "homepage": "https://yourusername.github.io/wedding",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: gh-pages branch
   - Save

Your site will be live at: `https://yourusername.github.io/wedding`

---

### Option 4: Firebase Hosting

**Why Firebase?**
- ✅ Google infrastructure
- ✅ Free SSL
- ✅ Fast global CDN
- ✅ Custom domain support

**Steps:**

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   cd SAJIDH
   firebase init hosting
   ```
   - Select: Use existing project or create new
   - Public directory: `build`
   - Single-page app: `Yes`
   - GitHub integration: Optional

4. **Build and Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

Your site will be live at: `https://your-project.web.app`

---

### Option 5: Traditional Web Hosting (cPanel)

**For shared hosting with cPanel:**

1. **Build the project:**
   ```bash
   cd SAJIDH
   npm run build
   ```

2. **Upload files:**
   - Compress the `build` folder contents (not the folder itself)
   - Upload via FTP or cPanel File Manager
   - Extract in `public_html` or your domain folder

3. **Configure:**
   - Ensure `.htaccess` is configured for React Router (if needed)
   - Set correct file permissions

**.htaccess file (if needed):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Build Optimization

### Before Building:

1. **Optimize Images:**
   - Compress wedding photos (use TinyPNG or similar)
   - Recommended size: < 500KB per image
   - Format: JPG for photos, PNG for graphics

2. **Optimize Music:**
   - Compress audio file
   - Recommended: 128kbps MP3
   - Keep file size < 5MB

3. **Environment Variables (if needed):**
   Create `.env` file:
   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key
   ```

### Build Command:
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

## 🌍 Custom Domain Setup

### After Deployment:

1. **Purchase Domain:**
   - Namecheap, GoDaddy, Google Domains, etc.
   - Recommended: yournames.com or yourwedding.com

2. **Configure DNS:**
   
   **For Netlify:**
   - Add A record: `104.198.14.52`
   - Add CNAME: `www` → `your-site.netlify.app`

   **For Vercel:**
   - Add A record: `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`

   **For GitHub Pages:**
   - Add A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add CNAME: `www` → `yourusername.github.io`

3. **SSL Certificate:**
   - Most platforms provide free SSL automatically
   - Wait 24-48 hours for DNS propagation

---

## 📊 Post-Deployment

### Testing:

1. **Cross-Browser Testing:**
   - Chrome
   - Safari
   - Firefox
   - Edge
   - Mobile browsers

2. **Mobile Testing:**
   - iOS Safari
   - Android Chrome
   - Different screen sizes

3. **Performance Testing:**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

### Monitoring:

1. **Analytics (Optional):**
   - Google Analytics
   - Track visitor count
   - Monitor page views

2. **Error Tracking:**
   - Check browser console for errors
   - Test all interactive features

---

## 🔄 Updating the Website

### For Netlify:
1. Make changes locally
2. Run `npm run build`
3. Drag & drop new `build` folder to Netlify

### For Vercel:
1. Make changes locally
2. Run `vercel --prod`

### For GitHub Pages:
1. Make changes locally
2. Run `npm run deploy`

### For Firebase:
1. Make changes locally
2. Run `npm run build`
3. Run `firebase deploy`

---

## 🎯 Performance Tips

### Speed Optimization:

1. **Enable Compression:**
   - Most platforms enable Gzip automatically
   - Reduces file sizes by 70%

2. **CDN:**
   - Use platform's built-in CDN
   - Faster loading worldwide

3. **Caching:**
   - Configure browser caching
   - Static assets cached for 1 year

4. **Image Lazy Loading:**
   - Already implemented in Gallery
   - Images load as user scrolls

### SEO Optimization:

1. **Meta Tags:**
   Already included in `public/index.html`:
   - Title
   - Description
   - Theme color

2. **Open Graph (Optional):**
   Add to `public/index.html`:
   ```html
   <meta property="og:title" content="Sajid & Raziya Wedding" />
   <meta property="og:description" content="Join us for our special day" />
   <meta property="og:image" content="https://yoursite.com/preview.jpg" />
   ```

---

## 🆘 Troubleshooting

### Build Fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Music Doesn't Play:
- Check file path: `public/music/wedding-music.mp3`
- Check file format (must be MP3)
- Some browsers block autoplay (expected behavior)

### Images Don't Load:
- Check file paths in Gallery.js
- Ensure images are in `public/images/`
- Use absolute paths: `/images/photo.jpg`

### Maps Don't Show:
- Check internet connection
- Verify Google Maps embed URL
- Check for console errors

### Slow Loading:
- Compress images (< 500KB each)
- Compress music file (< 5MB)
- Use production build (`npm run build`)

---

## 📞 Support Resources

### Documentation:
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

### Hosting Docs:
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## ✅ Final Checklist

Before sharing with guests:

- [ ] Website loads quickly (< 3 seconds)
- [ ] All images display correctly
- [ ] Music toggle works
- [ ] Countdown shows correct time
- [ ] Maps are interactive
- [ ] Gallery lightbox works
- [ ] All phone numbers are clickable
- [ ] Mobile version looks perfect
- [ ] Tested on multiple browsers
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled (secure)
- [ ] Shared with family for approval

---

## 🎉 You're Ready!

Your luxury wedding website is now live and ready to share with your guests!

### Share Your Website:

1. **WhatsApp Message:**
   ```
   🌙 Assalamu Alaikum! 🌙
   
   You're invited to our wedding!
   
   Visit our website for all details:
   https://your-website.com
   
   Sajid ❤️ Raziya
   7th May 2026
   ```

2. **Social Media:**
   - Share the link on Facebook, Instagram
   - Use wedding hashtag: #SajidRaziya2026

3. **Email:**
   - Send formal email invitations
   - Include website link

---

**Congratulations on your deployment! May your wedding website bring joy to all your guests! 💚💛**

*Need help? Review the README.md or SETUP_INSTRUCTIONS.md*

---

**Built with ❤️ for Sajid & Raziya**

🌙 May Allah bless your union! 🌙
