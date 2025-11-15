# Quick Start Guide 🚀

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Add Your Profile Photo (Important!)

1. Find a professional photo of yourself
2. Rename it to `tushar-profile.jpg`
3. Place it in `/public/images/` folder

**Without this, you'll see a broken image icon in the sidebar.**

## Step 4: Add Your Resume PDF

1. Export your resume as PDF
2. Rename it to `tushar-resume.pdf`
3. Place it in `/public/resume/` folder

## Step 5: Customize Your Data

Open `/data/siteData.js` and update:

### Quick Edits:
```javascript
// Line 2-10: Personal Info
export const siteAuthor = {
  name: "Your Name",           // Change this
  designation: "Your Title",   // Change this
  email: "your@email.com",     // Change this
  phone: "+91-XXXXXXXXXX",     // Change this
  location: "Your City",       // Change this
  status: "Available for hire", // Change this
};

// Line 13-20: Social Links
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  // Update these URLs
];
```

## Step 6: Test All Pages

Visit these URLs to verify everything works:

- ✅ Home: http://localhost:3000
- ✅ About: http://localhost:3000/about
- ✅ Resume: http://localhost:3000/resume
- ✅ Portfolio: http://localhost:3000/portfolio
- ✅ Blog: http://localhost:3000/blogs
- ✅ Contact: http://localhost:3000/contact

## Step 7: Build for Production

```bash
npm run build
npm start
```

## Step 8: Deploy to Vercel

### Option A: Via GitHub
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Option B: Via CLI
```bash
npm install -g vercel
vercel
```

---

## 🎨 Customization Checklist

- [ ] Update personal info in `/data/siteData.js`
- [ ] Add profile photo to `/public/images/`
- [ ] Add resume PDF to `/public/resume/`
- [ ] Update social media links
- [ ] Customize experience section
- [ ] Add your projects
- [ ] Write blog posts (optional)
- [ ] Test all pages
- [ ] Deploy to Vercel

---

## 🐛 Common Issues

### Images not loading?
- Check file paths start with `/`
- Verify files are in `/public` folder
- Restart dev server

### CSS not working?
- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📚 Next Steps

1. **Read README.md** for detailed documentation
2. **Read ASSETS-GUIDE.md** for image requirements
3. **Customize colors** in `tailwind.config.js`
4. **Add more content** in `/data/siteData.js`
5. **Deploy** to Vercel

---

## 🆘 Need Help?

- Check browser console (F12) for errors
- Read full README.md
- Email: patoletusharajit@gmail.com

---

**You're all set! 🎉 Start customizing your portfolio!**
