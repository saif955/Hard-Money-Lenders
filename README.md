# Ridge Street Capital - Real Estate Lending Platform

A modern, responsive website for Ridge Street Capital, a real estate lending company specializing in fix & flip loans, rental property financing, and ground-up construction loans. Built with Next.js and featuring smooth animations, interactive components, and a professional design.

## Live link

https://real-estate-loan.vercel.app/

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion powered scroll animations and transitions
- **Interactive Components**: Carousels, testimonials, and project showcases
- **Professional Loading Screen**: Branded loading animation with progress indicator
- **Modern UI**: Clean design with gradient overlays and professional typography
- **Optimized Performance**: Next.js Image optimization and efficient component architecture

## Project Setup Instructions

### Prerequisites

- Node.js 18+ installed on your system
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd real-estate-loan
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm run start
```

## Tools & Packages Used

### Core Framework

- **Next.js 15.4.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety and better development experience

### UI & Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **ShadCN UI Components** - Pre-built accessible components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility class merging

### Animations & Interactions

- **Framer Motion 12.23.9** - Production-ready motion library
- **tw-animate-css** - Additional Tailwind animations

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

### Additional Libraries

- **React Google Maps API** - Map integration (replaced with static approach)
- **clsx** - Conditional className utility

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── Footer.tsx           # Site footer
│   ├── LoadingScreen.tsx    # Initial loading animation
│   ├── Navbar.tsx           # Navigation with smooth scrolling
│   └── StaggeredAnimation.tsx # Animation wrapper component
├── pages/
│   ├── Homepage.tsx         # Hero section
│   ├── LoanProducts.tsx     # Loan product cards
│   ├── WhereWeLend.tsx      # Lending areas with map
│   ├── WhyChooseUs.tsx      # Features and testimonials
│   ├── PastProjects.tsx     # Project showcase
│   ├── InterestedInWorking.tsx # Action cards
│   ├── OtherResources.tsx   # Blog and resources
│   └── ReadyToGetStarted.tsx # Final CTA section
├── hooks/                   # Custom React hooks
└── lib/                     # Utility functions
```

## Screenshots

### Homepage Hero Section

![alt text](homepage.png)

### Loan Products

![alt text](loanproducts.png)

### Interactive Map

![alt text](USA_map_interactive.png)

### Mobile Responsive Design

![alt text](phone.png)

## Development Notes

- The project uses a modular component architecture for easy maintenance
- All animations are GPU-accelerated using Framer Motion
- Images are optimized using Next.js Image component
- The design follows mobile-first responsive principles
- Custom CSS animations are defined in `globals.css`
- Navigation uses smooth scrolling to different page sections

## Deployment

### Deploy to Vercel

This project is optimized for deployment on Vercel, the platform created by the makers of Next.js.

#### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub** (if not already done):

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure deployment settings**:

   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a live URL like `https://your-project.vercel.app`

#### Method 2: Deploy using Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy from your project directory**:

   ```bash
   vercel
   ```

   Follow the prompts:

   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No** (for first deployment)
   - Project name? **real-estate-loan** (or your preferred name)
   - In which directory is your code located? **./`**
   - Want to modify settings? **No** (Vercel auto-detects Next.js)

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

#### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/saif955/Hard-Money-Lenders)

### Deployment Configuration

#### Environment Variables (if needed)

If your project requires environment variables:

1. **Local development** - Create `.env.local`:

   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   ```

2. **Vercel dashboard** - Add in Project Settings > Environment Variables

#### Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow DNS configuration instructions

#### Automatic Deployments

Once connected to GitHub:

- **Push to main branch** → Automatic production deployment
- **Push to other branches** → Preview deployments
- **Pull requests** → Preview deployments with unique URLs

### Build Optimization

The project is already optimized for production with:

- ✅ Static page generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Bundle analysis

### Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies are in `package.json`
- [ ] Build runs successfully: `npm run build`
- [ ] No TypeScript errors
- [ ] Environment variables configured (if needed)
- [ ] Images are optimized and in correct directories
- [ ] SEO metadata is complete

### Troubleshooting Deployment

**Build fails?**

- Run `npm run build` locally to identify issues
- Check for TypeScript errors
- Ensure all imports are correct

**Images not loading?**

- Verify images are in `public/` directory
- Check file paths in components
- Ensure Next.js Image component has width/height

**Slow loading?**

- Images are automatically optimized by Next.js
- Static pages are pre-rendered for fast loading
- Vercel's global CDN ensures fast delivery worldwide

### Post-Deployment

After successful deployment:

1. **Test your live site** thoroughly
2. **Set up monitoring** (Vercel provides analytics)
3. **Configure custom domain** if needed
4. **Set up continuous deployment** from GitHub

For more detailed information, visit the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) and [Vercel documentation](https://vercel.com/docs).
