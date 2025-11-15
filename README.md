# Tushar Patole - DevOps Engineer Portfolio

A modern, dark-themed personal portfolio website built with **Next.js 14 (App Router)** and **Tailwind CSS**. Features a sidebar navigation, profile dashboard, and complete portfolio sections showcasing DevOps expertise.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🚀 Features

- ✅ **Modern Dark Theme** with blue/cyan neon accents
- ✅ **Sidebar Navigation** with profile card and contact info
- ✅ **Fully Responsive** - Mobile to Desktop
- ✅ **SEO Optimized** with metadata for all pages
- ✅ **Dynamic Routes** for blog posts (`/blogs/[slug]`)
- ✅ **Project Portfolio** with modal details
- ✅ **Resume Page** with PDF download
- ✅ **Contact Form** (frontend-ready, backend instructions included)
- ✅ **Smooth Animations** and hover effects
- ✅ **Clean Typography** using Inter font

## 📁 Project Structure

```
Portfolio-website/
├── app/
│   ├── layout.js              # Root layout with sidebar
│   ├── page.js                # Home page (About + Experience)
│   ├── about/page.js          # Skills, Education, Achievements
│   ├── resume/page.js         # Full resume with download
│   ├── portfolio/page.js      # Projects showcase
│   ├── blogs/
│   │   ├── page.js            # Blog listing
│   │   ├── [slug]/page.js     # Dynamic blog post
│   │   └── layout.js          # Blog layout
│   ├── contact/page.js        # Contact form
│   └── globals.css            # Global styles
├── components/
│   ├── Sidebar.js             # Sidebar with profile & navigation
│   ├── Button.js              # Reusable button component
│   ├── Card.js                # Card component
│   ├── Container.js           # Container wrapper
│   ├── SectionHeader.js       # Section headers
│   └── Modal.js               # Modal component
├── data/
│   └── siteData.js            # ⭐ ALL YOUR DATA IS HERE
├── public/
│   ├── images/                # Profile photo
│   ├── projects/              # Project thumbnails
│   ├── certifications/        # Certificate images
│   ├── blog-images/           # Blog cover images
│   └── resume/                # Resume PDF
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── README.md

```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel (recommended)

## 📦 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### 📝 Update Your Information

**All your personal data is in one file:** `/data/siteData.js`

Edit this file to update:
- ✅ Name, designation, contact info
- ✅ About section & career summary
- ✅ Skills (organized by category)
- ✅ Professional experience with highlights
- ✅ Projects with tech stacks
- ✅ Education & achievements
- ✅ Blog posts
- ✅ Social links

### 🖼️ Add Your Profile Photo

1. Place your photo at: `/public/images/tushar-profile.jpg`
2. Or update the path in `/data/siteData.js`:

```javascript
export const assetPaths = {
  profileImage: "/images/your-photo.jpg",
  resumePdf: "/resume/your-resume.pdf",
};
```

### 📄 Add Your Resume PDF

1. Export your resume as PDF
2. Place it at: `/public/resume/tushar-resume.pdf`
3. Or update `assetPaths.resumePdf` in `/data/siteData.js`

### 💼 Add New Projects

In `/data/siteData.js`, add to the `projects` array:

```javascript
export const projects = [
  {
    id: "unique-project-id",
    title: "My New Project",
    description: "Project description...",
    techStack: ["Docker", "Kubernetes", "AWS"],
    image: "/projects/my-project.jpg",
    category: "DevOps Automation",
    highlights: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
  // Add more...
];
```

### 📝 Add New Blog Posts

In `/data/siteData.js`, add to the `blogs` array:

```javascript
export const blogs = [
  {
    slug: "my-new-post",
    title: "My New Blog Post",
    date: "2024-12-01",
    readingTime: "5 min read",
    excerpt: "Short summary...",
    image: "/blog-images/my-post.jpg",
    tags: ["DevOps", "AWS"],
    content: "Full article content here...",
  },
  // Add more...
];
```

The post will automatically be available at `/blogs/my-new-post`

### 🎓 Update Skills, Education, Achievements

All in `/data/siteData.js`:

```javascript
// Skills
export const skills = {
  "CI/CD Tools": ["Jenkins", "GitHub Actions"],
  "Containers": ["Docker", "Kubernetes"],
  // Add more categories...
};

// Education
export const education = {
  degree: "Your Degree",
  institution: "Your College",
  university: "Your University",
  period: "2018 – 2022",
};

// Achievements
export const achievements = [
  {
    title: "Award Name",
    organization: "Company",
    description: "Description...",
  },
];
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**
7. Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to your Vercel project dashboard
2. Click **"Settings" → "Domains"**
3. Add your custom domain
4. Update DNS records as instructed

## 📧 Making the Contact Form Functional

The contact form is currently frontend-only. To make it send emails:

### 1. Create API Route

Create `/app/api/contact/route.js`:

```javascript
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();
  
  // Option A: Send email via SendGrid
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: 'your@email.com',
  //   from: 'noreply@yourdomain.com',
  //   subject: `Contact from ${name}`,
  //   text: message,
  // });

  // Option B: Use Resend
  // const { Resend } = require('resend');
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'your@email.com',
  //   subject: `Contact from ${name}`,
  //   html: `<p>${message}</p>`,
  // });

  return NextResponse.json({ success: true });
}
```

### 2. Update Contact Form

In `/app/contact/page.js`, update `handleSubmit`:

```javascript
async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  if (response.ok) {
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  }
}
```

### 3. Add Environment Variables

Create `.env.local`:

```
SENDGRID_API_KEY=your_key_here
# or
RESEND_API_KEY=your_key_here
```

Add to Vercel:
1. Go to **Settings → Environment Variables**
2. Add your API keys

## 🎨 Theme Customization

Edit `/tailwind.config.js` to change colors:

```javascript
colors: {
  primary: {
    DEFAULT: "#3b82f6", // Change this for main accent
  },
  accent: {
    DEFAULT: "#06b6d4", // Change this for secondary accent
  },
  dark: {
    bg: "#0f172a",      // Background color
    card: "#1e293b",    // Card background
    border: "#334155",  // Border color
    text: "#e2e8f0",    // Text color
    muted: "#94a3b8",   // Muted text
  },
},
```

## 📱 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Home/About page with experience timeline |
| `/about` | Skills, education, achievements, hobbies |
| `/resume` | Full resume with PDF download |
| `/portfolio` | Projects showcase with modal details |
| `/blogs` | Blog listing page |
| `/blogs/[slug]` | Individual blog post |
| `/contact` | Contact form with social links |

## 🐛 Troubleshooting

### CSS Warnings (@tailwind, @apply)

These are editor warnings only. Tailwind processes them correctly at runtime. You can safely ignore them or add a Tailwind CSS IntelliSense extension to your editor.

### Images Not Loading

1. Ensure images are in the correct `/public` folder
2. Check paths in `/data/siteData.js` start with `/` (e.g., `/images/profile.jpg`)
3. Restart the dev server after adding new images

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For issues or questions:
- Email: patoletusharajit@gmail.com
- LinkedIn: [Tushar Patole](https://linkedin.com/in/tusharpatole)

---

**Built with ❤️ by Tushar Patole**
