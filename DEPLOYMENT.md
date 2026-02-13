# Deployment Guide - Prime Source Global Website

This guide provides step-by-step instructions for deploying the PSG website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure you have completed the following steps:

- [ ] All content is finalized and reviewed
- [ ] Images are optimized for web
- [ ] SEO metadata is configured in `index.html`
- [ ] Sitemap and robots.txt are up to date
- [ ] Contact information is accurate
- [ ] Social media links are verified
- [ ] Build process completes without errors
- [ ] Website tested in multiple browsers
- [ ] Mobile responsiveness verified

## Building for Production

First, create an optimized production build:

```bash
cd site-archiver-pro-main
npm install
npm run build
```

The build output will be in the `dist/` directory, containing all static files ready for deployment.

## Deployment Options

### Option 1: Netlify (Recommended for Easy Deployment)

Netlify offers free hosting with automatic deployments from Git repositories.

#### Steps:

1. **Push code to GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Node version: 18 or higher

3. **Configure Redirects for SPA**
   Create `public/_redirects` file:
   ```
   /*    /index.html   200
   ```

4. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain: `psgbiz.com`
   - Configure DNS records as instructed

5. **SSL Certificate**
   - Netlify automatically provisions SSL certificates
   - Enable HTTPS redirect in settings

### Option 2: Vercel

Vercel is another excellent platform for React applications with zero-configuration deployments.

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd site-archiver-pro-main
   vercel
   ```

3. **Configure Project**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

5. **Custom Domain**
   - Go to project settings on Vercel dashboard
   - Add domain: `psgbiz.com`
   - Configure DNS records

### Option 3: AWS S3 + CloudFront

For enterprise-grade hosting with full control, use AWS infrastructure.

#### Steps:

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://psgbiz-website
   ```

2. **Configure Bucket for Static Hosting**
   ```bash
   aws s3 website s3://psgbiz-website --index-document index.html --error-document index.html
   ```

3. **Upload Build Files**
   ```bash
   cd dist
   aws s3 sync . s3://psgbiz-website --delete
   ```

4. **Set Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::psgbiz-website/*"
       }
     ]
   }
   ```

5. **Create CloudFront Distribution**
   - Origin: S3 bucket website endpoint
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Custom Error Response: 404 → /index.html (200)
   - Alternate Domain Names: psgbiz.com, www.psgbiz.com

6. **Configure DNS**
   - Create CNAME record pointing to CloudFront distribution
   - Or use Route 53 for full AWS integration

7. **SSL Certificate**
   - Request certificate in AWS Certificate Manager
   - Validate domain ownership
   - Attach to CloudFront distribution

### Option 4: Traditional Web Hosting (cPanel/FTP)

For traditional shared hosting environments.

#### Steps:

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload via FTP**
   - Connect to your hosting server via FTP client
   - Navigate to public_html or www directory
   - Upload all files from `dist/` directory

3. **Configure .htaccess for SPA Routing**
   Create `.htaccess` in root directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Configure SSL**
   - Use Let's Encrypt via cPanel
   - Or purchase SSL certificate from hosting provider

### Option 5: GitHub Pages

Free hosting directly from GitHub repository.

#### Steps:

1. **Install gh-pages Package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add Deploy Script to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: gh-pages branch
   - Custom domain: psgbiz.com

6. **Configure DNS**
   - Add CNAME record: `www` → `username.github.io`
   - Add A records for apex domain to GitHub IPs

## Post-Deployment Configuration

### 1. Verify Deployment

Check the following after deployment:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] Contact form functions (if backend integrated)
- [ ] Mobile view is responsive
- [ ] SSL certificate is active (HTTPS)
- [ ] Social media links open correctly

### 2. Configure DNS

For custom domain `psgbiz.com`:

**A Records (Apex Domain):**
```
Type: A
Name: @
Value: <hosting-provider-ip>
TTL: 3600
```

**CNAME Record (www subdomain):**
```
Type: CNAME
Name: www
Value: <hosting-provider-domain>
TTL: 3600
```

### 3. Set Up Analytics

Add Google Analytics tracking:

1. Create Google Analytics account
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `index.html` before closing `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 4. Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: psgbiz.com
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: https://psgbiz.com/sitemap.xml

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add site: psgbiz.com
3. Verify ownership
4. Submit sitemap

### 5. Set Up Monitoring

**Uptime Monitoring:**
- Use UptimeRobot or Pingdom
- Monitor main URL and critical pages
- Set up email alerts

**Performance Monitoring:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## Continuous Deployment

For automatic deployments on code changes:

### GitHub Actions (for any hosting)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Website

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to hosting
      run: |
        # Add your deployment commands here
        # Example for S3:
        # aws s3 sync dist/ s3://psgbiz-website --delete
```

## Rollback Procedure

If issues occur after deployment:

1. **Netlify/Vercel**: Use dashboard to rollback to previous deployment
2. **AWS S3**: Restore from S3 versioning
3. **Traditional Hosting**: Upload backup files via FTP
4. **GitHub Pages**: Revert commit and redeploy

## Environment-Specific Configuration

For different environments (staging, production):

1. **Create .env files**
   - `.env.development`
   - `.env.staging`
   - `.env.production`

2. **Add environment variables**
   ```
   VITE_API_URL=https://api.psgbiz.com
   VITE_GA_ID=G-XXXXXXXXXX
   ```

3. **Use in code**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## Security Checklist

Before going live:

- [ ] HTTPS enabled with valid SSL certificate
- [ ] Security headers configured (CSP, HSTS, X-Frame-Options)
- [ ] No sensitive data in client-side code
- [ ] Dependencies updated to latest secure versions
- [ ] Contact form has spam protection
- [ ] Rate limiting on API endpoints (if applicable)

## Maintenance Schedule

**Weekly:**
- Check website uptime and performance
- Review analytics for errors or issues

**Monthly:**
- Update npm dependencies
- Review and update content
- Check for broken links
- Backup website files

**Quarterly:**
- Security audit
- Performance optimization review
- SEO analysis and improvements

## Troubleshooting

### Issue: 404 errors on page refresh

**Solution**: Configure server for SPA routing (see deployment options above)

### Issue: Images not loading

**Solution**: Check image paths are relative and files exist in dist/assets/

### Issue: Slow loading times

**Solution**: 
- Enable gzip compression on server
- Optimize images further
- Use CDN for static assets

### Issue: CSS not applying

**Solution**: Clear browser cache and check CSS file is loaded in network tab

## Support

For deployment assistance:

- **Technical Issues**: Refer to DEVELOPER_GUIDE.md
- **Hosting Support**: Contact your hosting provider
- **General Questions**: Sales@psgbiz.com

---

**Last Updated**: February 2, 2026
