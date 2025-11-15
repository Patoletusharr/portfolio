# Assets Guide - Portfolio Website

This guide helps you add all necessary images and files to complete your portfolio.

## 📸 Required Assets

### 1. Profile Photo
**Location:** `/public/images/tushar-profile.jpg`

**Requirements:**
- Format: JPG or PNG
- Recommended size: 400x400px (square)
- Good quality headshot with professional background
- File size: Under 500KB

**How to add:**
1. Take or select a professional photo
2. Crop it to square (1:1 ratio)
3. Rename to `tushar-profile.jpg`
4. Place in `/public/images/` folder

---

### 2. Resume PDF
**Location:** `/public/resume/tushar-resume.pdf`

**Requirements:**
- Format: PDF
- File name: `tushar-resume.pdf`
- Keep file size under 2MB

**How to add:**
1. Export your resume as PDF
2. Name it `tushar-resume.pdf`
3. Place in `/public/resume/` folder

---

### 3. Project Images (Optional)
**Location:** `/public/projects/`

**Examples:**
- `/public/projects/kubernetes-cluster.jpg`
- `/public/projects/ci-cd-pipeline.jpg`
- `/public/projects/aws-infrastructure.jpg`

**Requirements:**
- Format: JPG or PNG
- Recommended size: 800x600px (4:3 ratio)
- Screenshots or diagrams of your projects
- File size: Under 300KB each

**How to add:**
1. Take screenshots of your projects
2. Use descriptive names (e.g., `kubernetes-dashboard.jpg`)
3. Place in `/public/projects/` folder
4. Update `image` field in `/data/siteData.js` projects array

---

### 4. Blog Cover Images (Optional)
**Location:** `/public/blog-images/`

**Examples:**
- `/public/blog-images/kubernetes-guide.jpg`
- `/public/blog-images/aws-best-practices.jpg`

**Requirements:**
- Format: JPG or PNG
- Recommended size: 1200x630px (16:9 ratio)
- Relevant to blog topic
- File size: Under 400KB each

**How to add:**
1. Create or find relevant images
2. Name them matching your blog slugs
3. Place in `/public/blog-images/` folder
4. Update `image` field in `/data/siteData.js` blogs array

---

### 5. Certification Images (Optional)
**Location:** `/public/certifications/`

**Examples:**
- `/public/certifications/aws-cert.jpg`
- `/public/certifications/kubernetes-cert.jpg`

**Requirements:**
- Format: JPG or PNG
- Screenshots of your certificates
- File size: Under 500KB each

---

## 🎨 Quick Image Creation Tips

### For Profile Photo:
- Use a plain or slightly blurred background
- Good lighting on your face
- Professional attire
- Smile naturally
- Center yourself in the frame

### For Project Screenshots:
- Capture clean dashboard views
- Include relevant metrics or data
- Remove sensitive information
- Use high contrast for readability

### For Blog Images:
- Use free stock photos from:
  - [Unsplash](https://unsplash.com)
  - [Pexels](https://pexels.com)
  - [Pixabay](https://pixabay.com)
- Or create diagrams with:
  - [Excalidraw](https://excalidraw.com)
  - [Canva](https://canva.com)

---

## 🔧 Image Optimization

Before adding images, optimize them:

### Online Tools:
- [TinyPNG](https://tinypng.com) - Compress PNG/JPG
- [Squoosh](https://squoosh.app) - Google's image optimizer
- [ImageOptim](https://imageoptim.com) - Mac app

### Command Line:
```bash
# Install ImageMagick
# Then resize and compress:
magick convert input.jpg -resize 800x600 -quality 85 output.jpg
```

---

## 📝 Updating Image Paths

After adding images, update `/data/siteData.js`:

```javascript
// Profile image
export const assetPaths = {
  profileImage: "/images/tushar-profile.jpg",
  resumePdf: "/resume/tushar-resume.pdf",
};

// Project images
export const projects = [
  {
    id: "project-1",
    title: "My Project",
    image: "/projects/my-project.jpg", // Add this line
    // ... rest of project data
  },
];

// Blog images
export const blogs = [
  {
    slug: "my-post",
    title: "My Blog Post",
    image: "/blog-images/my-post.jpg", // Add this line
    // ... rest of blog data
  },
];
```

---

## ⚠️ Important Notes

1. **All paths start with `/`** - This is the public folder root
2. **File names are case-sensitive** - `Profile.jpg` ≠ `profile.jpg`
3. **No spaces in file names** - Use hyphens: `my-project.jpg`
4. **Restart dev server** after adding new images
5. **Check browser console** for 404 errors if images don't load

---

## 🚀 Testing Your Images

After adding images, test them:

1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. Check browser console (F12) for errors
4. Verify all images load correctly
5. Test on mobile view (responsive)

---

## 📦 Current Asset Status

- [ ] Profile photo (`/public/images/tushar-profile.jpg`)
- [ ] Resume PDF (`/public/resume/tushar-resume.pdf`)
- [ ] Project images (optional)
- [ ] Blog cover images (optional)
- [ ] Certification images (optional)

**Tip:** The site will work without images, but adding them makes it look much more professional!

---

## 🆘 Need Help?

If images aren't loading:
1. Check file paths in `/data/siteData.js`
2. Verify files are in correct `/public` subfolders
3. Ensure file names match exactly (case-sensitive)
4. Clear browser cache (Ctrl+Shift+R)
5. Restart dev server

---

**Remember:** You can always add placeholder images initially and replace them with real ones later!
