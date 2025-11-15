# Deployment Guide 🚀

Complete guide to deploy your portfolio to production.

## 🎯 Pre-Deployment Checklist

Before deploying, ensure you've completed:

### Content
- [ ] Updated all personal info in `/data/siteData.js`
- [ ] Added profile photo to `/public/images/`
- [ ] Added resume PDF to `/public/resume/`
- [ ] Updated social media links
- [ ] Reviewed all experience entries
- [ ] Added your projects
- [ ] Checked all blog posts
- [ ] Tested contact form

### Technical
- [ ] Tested all pages locally
- [ ] No console errors in browser (F12)
- [ ] All images loading correctly
- [ ] Responsive design works on mobile
- [ ] Build completes successfully (`npm run build`)

---

## 🌐 Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Next.js apps.

### Method 1: GitHub Integration (Recommended)

#### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Create GitHub repo and push
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Select your portfolio repository
5. Vercel auto-detects Next.js settings
6. Click **"Deploy"**
7. Wait 2-3 minutes ⏳
8. Your site is live! 🎉

**Your URL:** `https://your-project-name.vercel.app`

#### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to **Settings → Domains**
2. Add your custom domain (e.g., `tusharpatole.com`)
3. Update DNS records as instructed:
   - Type: `A` Record
   - Name: `@`
   - Value: `76.76.21.21`
4. Wait for DNS propagation (5-30 minutes)

---

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 🔧 Alternative Deployment Options

### Deploy to Netlify

#### Step 1: Build Settings
```bash
# Build command
npm run build

# Publish directory
.next
```

#### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site" → "Import existing project"**
3. Connect to GitHub
4. Select your repository
5. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click **"Deploy site"**

**Note:** Netlify requires additional configuration for Next.js. Vercel is recommended.

---

### Deploy to Your Own Server (VPS)

#### Requirements:
- Ubuntu/Debian server
- Node.js 18+ installed
- PM2 for process management

#### Steps:

```bash
# 1. SSH into your server
ssh user@your-server-ip

# 2. Clone your repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 3. Install dependencies
npm install

# 4. Build the project
npm run build

# 5. Install PM2
npm install -g pm2

# 6. Start the app
pm2 start npm --name "portfolio" -- start

# 7. Save PM2 configuration
pm2 save
pm2 startup

# 8. Setup Nginx reverse proxy
sudo nano /etc/nginx/sites-available/portfolio

# Add this configuration:
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# 9. Enable site and restart Nginx
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# 10. Setup SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 🔐 Environment Variables

If you add API integrations (e.g., contact form), set environment variables:

### Vercel:
1. Go to **Settings → Environment Variables**
2. Add variables:
   - `SENDGRID_API_KEY`
   - `RESEND_API_KEY`
   - etc.

### Local Development:
Create `.env.local`:
```
SENDGRID_API_KEY=your_key_here
RESEND_API_KEY=your_key_here
```

**Important:** Add `.env.local` to `.gitignore`!

---

## 📊 Post-Deployment

### 1. Verify Deployment
- [ ] Visit your live URL
- [ ] Test all pages
- [ ] Check mobile responsiveness
- [ ] Verify images load
- [ ] Test resume download
- [ ] Check contact form

### 2. Setup Analytics (Optional)

#### Google Analytics:
```javascript
// Add to app/layout.js
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

#### Vercel Analytics:
```bash
npm install @vercel/analytics
```

```javascript
// Add to app/layout.js
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. SEO Optimization

#### Add robots.txt:
Create `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

#### Generate Sitemap:
Install package:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
};
```

Add to `package.json`:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

---

## 🔄 Continuous Deployment

With Vercel + GitHub:
1. Push changes to GitHub
2. Vercel automatically deploys
3. Preview deployments for PRs
4. Production deploys on `main` branch

```bash
# Make changes
git add .
git commit -m "Update portfolio content"
git push

# Vercel automatically deploys! 🚀
```

---

## 🐛 Troubleshooting Deployment

### Build Fails
```bash
# Check build locally first
npm run build

# If it works locally but fails on Vercel:
# 1. Check Node.js version in Vercel settings
# 2. Clear Vercel build cache
# 3. Check environment variables
```

### Images Not Loading
- Ensure images are in `/public` folder
- Check paths start with `/`
- Verify file names match exactly (case-sensitive)

### 404 Errors
- Check all routes are defined
- Verify dynamic routes have `generateStaticParams`
- Clear Vercel cache and redeploy

---

## 📈 Performance Optimization

### Image Optimization
Next.js automatically optimizes images with `next/image`.

### Caching
Vercel automatically caches static assets.

### Lighthouse Score
Test your site:
1. Open Chrome DevTools (F12)
2. Go to **Lighthouse** tab
3. Click **Generate report**
4. Aim for 90+ in all categories

---

## 🎉 You're Live!

Your portfolio is now deployed and accessible worldwide!

### Share Your Portfolio:
- LinkedIn: Add to profile
- GitHub: Add to README
- Resume: Include the URL
- Email signature: Add the link

### Monitor Your Site:
- Vercel Dashboard: Analytics & logs
- Google Search Console: SEO performance
- Uptime monitoring: [UptimeRobot](https://uptimerobot.com)

---

## 🔄 Updating Your Portfolio

```bash
# 1. Make changes locally
# 2. Test with npm run dev
# 3. Commit and push
git add .
git commit -m "Update experience section"
git push

# Vercel automatically deploys the update!
```

---

**Congratulations! Your portfolio is live! 🚀**

Need help? Email: patoletusharajit@gmail.com
