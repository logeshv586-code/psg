# Prime Source Global Website - Developer Guide

## Project Overview

This is a complete clone of the Prime Source Global (PSG) website (https://psgbiz.com/), built using modern web technologies to replicate the original design, functionality, and user experience.

## Technology Stack

The website is built with a modern, production-ready technology stack:

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19 (fast development and optimized production builds)
- **Styling**: Tailwind CSS 3.4.1 with custom design system
- **UI Components**: shadcn/ui components (Radix UI primitives)
- **Routing**: React Router DOM 6.28.0
- **Icons**: Lucide React
- **Animations**: Custom CSS animations and transitions
- **Fonts**: Google Fonts (Inter for body, Poppins for headings)

## Project Structure

```
site-archiver-pro-main/
├── public/                  # Static assets
│   ├── robots.txt          # SEO robots configuration
│   └── sitemap.xml         # XML sitemap for search engines
├── src/
│   ├── assets/             # Images, logos, and media files
│   │   ├── scraped/        # Hero slider images
│   │   ├── psg-logo.png    # PSG icon logo
│   │   ├── psg-logo-full.png # PSG full logo
│   │   ├── qr-code.jpg     # WhatsApp QR code
│   │   └── about-hero.jpg  # About page hero image
│   ├── components/         # React components
│   │   ├── home/           # Homepage-specific components
│   │   │   ├── HeroSlider.tsx       # Hero slider with 5 business categories
│   │   │   ├── BusinessSection.tsx  # Business cards grid
│   │   │   └── AboutSection.tsx     # Vision, Mission, Values
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   ├── Footer.tsx           # Footer with links and contact
│   │   │   └── Layout.tsx           # Main layout wrapper
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Homepage
│   │   ├── About.tsx       # About page
│   │   └── Contact.tsx     # Contact page with form
│   ├── App.tsx             # Main app component with routing
│   ├── index.css           # Global styles and design system
│   └── main.tsx            # Application entry point
├── index.html              # HTML template with SEO metadata
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # Project documentation
```

## Design System

### Color Palette

The website uses a carefully crafted color scheme that matches the original PSG branding:

- **Primary**: Dark Navy (`hsl(220, 35%, 14%)`) - Used for text and primary actions
- **Accent**: Lime Green (`hsl(84, 70%, 55%)`) - PSG brand accent color
- **Background**: Light Gray (`hsl(0, 0%, 97%)`) - Main background
- **Secondary**: Light Gray (`hsl(0, 0%, 96%)`) - Section backgrounds

### Business Category Colors

Each business vertical has its own distinct color:

- **Environmental**: Light Yellow-Green (`hsl(55, 70%, 85%)`)
- **Digital Health**: Light Blue (`hsl(200, 70%, 90%)`)
- **Construction**: Light Orange (`hsl(35, 70%, 90%)`)
- **Tourism**: Light Pink (`hsl(340, 70%, 92%)`)
- **Software & AI**: Light Purple (`hsl(260, 50%, 92%)`)

### Typography

- **Headings**: Poppins (Google Fonts) - Bold, modern sans-serif
- **Body Text**: Inter (Google Fonts) - Clean, readable sans-serif
- **Font Weights**: 300-800 range for various text styles

### Spacing & Layout

- **Container**: Max-width with responsive padding (px-4 lg:px-8)
- **Sections**: Consistent vertical spacing (py-16 lg:py-24)
- **Border Radius**: 0.75rem default for cards and buttons
- **Shadows**: Soft shadows with multiple levels (sm, md, lg, xl)

## Key Features Implemented

### Homepage (/)

The homepage showcases all major sections of the PSG business:

1. **Hero Slider**
   - 5 rotating slides featuring each business vertical
   - Auto-play with 5-second intervals
   - Manual navigation with dots
   - Smooth fade animations
   - Responsive images and text
   - "Scroll Down" button with smooth scroll

2. **Business Section**
   - Grid of 5 business cards
   - Hover effects with elevation
   - Icon-based visual identity
   - Direct links to business pages
   - Responsive layout (1-5 columns based on screen size)

3. **About Section**
   - Company overview with mission statement
   - Vision, Mission, and Values cards
   - Icon-based visual hierarchy
   - Link to full About page

### About Page (/about)

Professional about page with comprehensive company information:

- Hero section with team collaboration image
- Company tagline and description
- Service cards for all 5 business verticals
- Vision, Mission, and Values detailed cards
- Quote section highlighting PSG's global reach

### Contact Page (/contact)

Functional contact page with multiple ways to reach PSG:

- Contact form with validation
  - First Name, Last Name
  - Email
  - Destination/Subject
  - Message textarea
  - Submit button with loading state
- Contact information display
  - Phone numbers (2 lines)
  - Email address
  - Physical address in UAE
  - WhatsApp QR code
- Social media links
  - LinkedIn, Instagram, Facebook, X (Twitter), YouTube, WhatsApp
- Google Maps integration (can be added)

### Navigation

Comprehensive navigation system:

- **Desktop Navigation**
  - Logo with link to homepage
  - Menu items with dropdown support
  - "Contact us" button with arrow animation
  - Hover effects and active states

- **Mobile Navigation**
  - Hamburger menu icon
  - Slide-in menu panel
  - Collapsible dropdown sections
  - Touch-friendly targets

### Footer

Rich footer with multiple sections:

- **Company Information**
  - PSG logo and tagline
  - Brief description
  - Social media icons

- **Useful Links**
  - All 5 business verticals
  - Quick access to services

- **Quick Links**
  - Home, About, Career, Media, Contact

- **Contact Information**
  - Phone numbers
  - Email address
  - Physical address
  - WhatsApp QR code

- **Legal**
  - Terms of Use
  - Privacy Policy
  - Copyright notice

## SEO & Performance Optimization

### Meta Tags

The website includes comprehensive SEO meta tags:

- **Basic Meta Tags**
  - Title: "Prime Source Global - Pioneering Solutions Globally"
  - Description: Detailed company description
  - Keywords: Relevant business keywords
  - Author, Robots, Canonical URL

- **Open Graph Tags**
  - og:title, og:description, og:type
  - og:url, og:image, og:site_name
  - og:locale for internationalization

- **Twitter Card Tags**
  - twitter:card, twitter:site
  - twitter:title, twitter:description
  - twitter:image for social sharing

### Sitemap

XML sitemap (`/sitemap.xml`) includes:
- Homepage (priority 1.0)
- About page (priority 0.8)
- Contact page (priority 0.8)
- All 5 business pages (priority 0.7)
- Career page (priority 0.6)

### Robots.txt

Properly configured robots.txt file:
- Allows all major search engine bots
- References sitemap location
- Sets crawl delay to 10 seconds

### Performance

- **Image Optimization**: WebP format for hero images
- **Code Splitting**: React Router lazy loading ready
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Build Optimization**: Vite production build with minification
- **Gzip Compression**: Enabled for all text assets

## Development Setup

### Prerequisites

- Node.js 18+ (recommended: 22.13.0)
- npm or pnpm package manager

### Installation

```bash
# Clone the repository
cd site-archiver-pro-main

# Install dependencies
npm install

# Start development server
npm run dev

# Access the website at http://localhost:8080
```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting (if configured)
npm run lint
```

## Building for Production

### Build Process

```bash
# Create optimized production build
npm run build

# Output will be in the dist/ directory
# - Minified JavaScript and CSS
# - Optimized images
# - Generated HTML with meta tags
```

### Build Output

The production build creates:
- `dist/index.html` - Main HTML file (2.53 KB)
- `dist/assets/` - All optimized assets
  - CSS bundle (~73 KB, 12 KB gzipped)
  - JavaScript bundle (~355 KB, 112 KB gzipped)
  - Optimized images

### Deployment

The built files in `dist/` can be deployed to any static hosting service:

1. **Netlify / Vercel**
   - Connect GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **AWS S3 + CloudFront**
   - Upload `dist/` contents to S3 bucket
   - Configure CloudFront distribution
   - Set up custom domain

3. **Traditional Web Hosting**
   - Upload `dist/` contents via FTP
   - Configure server for SPA routing
   - Set up SSL certificate

### SPA Routing Configuration

For proper React Router functionality, configure your server:

**Nginx:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Customization Guide

### Updating Content

1. **Hero Slider Content**
   - Edit `src/components/home/HeroSlider.tsx`
   - Update the `slides` array with new content
   - Replace images in `src/assets/scraped/`

2. **Business Information**
   - Edit `src/components/home/BusinessSection.tsx`
   - Update `businessCards` array
   - Modify descriptions and links

3. **Contact Information**
   - Edit `src/components/layout/Footer.tsx`
   - Update phone numbers, email, address
   - Replace QR code image

### Styling Changes

1. **Colors**
   - Edit `src/index.css`
   - Modify CSS custom properties in `:root`
   - Update Tailwind config if needed

2. **Typography**
   - Change Google Fonts import in `src/index.css`
   - Update font families in CSS

3. **Layout**
   - Adjust container widths in components
   - Modify spacing utilities

### Adding New Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/layout/Header.tsx`
4. Add to sitemap in `public/sitemap.xml`

## Browser Support

The website supports all modern browsers:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

The website follows web accessibility best practices:

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Sufficient color contrast

## Known Limitations

### Pages Not Yet Implemented

The following pages from the original website are not yet created:

1. **Business Vertical Pages** (5 pages)
   - /environmental - Environmental Consultancy details
   - /digital-health - Digital Health services
   - /construction - Construction & Interior Supplies
   - /tourism - Travel & Tourism offerings
   - /software - Software Development & AI solutions

2. **Additional Pages**
   - /career - Career opportunities and job listings
   - /media - News, blog, and media resources
   - /partners - Strategic partnerships
   - /terms - Terms of Use
   - /privacy - Privacy Policy

### Recommended Next Steps

To complete the website clone:

1. **Create Business Pages**: Develop detailed pages for each of the 5 business verticals with:
   - Service descriptions
   - Case studies or portfolio
   - Contact forms specific to each vertical
   - Related images and content

2. **Career Page**: Add job listings, application forms, and company culture information

3. **Media/Blog**: Implement news articles, blog posts, and media gallery

4. **Legal Pages**: Add Terms of Use and Privacy Policy content

5. **Contact Form Backend**: Integrate with email service or CRM for form submissions

6. **Analytics**: Add Google Analytics or similar tracking

7. **Performance Monitoring**: Set up monitoring for Core Web Vitals

## Maintenance

### Regular Updates

- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Update content and images as needed
- Monitor and fix broken links
- Update sitemap dates after content changes

### Backup

- Keep source code in version control (Git)
- Backup production build files
- Document any custom configurations

## Support & Contact

For questions or issues with this website:

- **Email**: Sales@psgbiz.com
- **Phone**: +971 543785531 / +971 72586848
- **Address**: Compass Building - Al Shuhada' Rd, Al Hamra Industrial Free Zone, Ras Al Khaimah - UAE

## License

This project is proprietary to Prime Source Global. All rights reserved.

---

**Last Updated**: February 2, 2026
**Version**: 1.0.0
**Developer**: Built with Lovable AI
