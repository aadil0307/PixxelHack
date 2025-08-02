# 🎨 PixxelHack - NFT Gallery Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, interactive NFT gallery platform built with cutting-edge web technologies**

[Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

</div>

---

## ✨ Features

### 🎭 **Interactive Gallery Experience**

- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Infinite Scrolling**: Seamless browsing through NFT collections
- **Hover Effects**: Engaging visual feedback on all interactive elements
- **Responsive Design**: Perfect experience across all devices

### 🎨 **Visual Excellence**

- **Modern UI/UX**: Clean, minimalist design with dark theme
- **Custom Components**: Reusable, accessible UI components
- **Loading States**: Beautiful skeleton loaders and progress indicators
- **Color Transitions**: Dynamic color wipes and gradient effects

### 📱 **User Experience**

- **Contact Form**: Fully functional with email notifications
- **Artist Showcase**: Dedicated sections for featured artists
- **Collector Spotlight**: Highlighting top collectors and their collections
- **Newsletter Integration**: Stay updated with latest drops

### 🔧 **Technical Features**

- **TypeScript**: Full type safety and better development experience
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Meta tags and structured data for search engines
- **Accessibility**: WCAG compliant components and navigation

---

## 🛠️ Tech Stack

| Category          | Technology                   |
| ----------------- | ---------------------------- |
| **Framework**     | Next.js 14 (App Router)      |
| **Language**      | TypeScript                   |
| **Styling**       | Tailwind CSS + CSS Modules   |
| **Animations**    | Framer Motion                |
| **UI Components** | Radix UI + Custom Components |
| **Email Service** | Nodemailer (Gmail SMTP)      |
| **Deployment**    | Vercel Ready                 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/nft-gallery.git
   cd nft-gallery
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your email configuration:

   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📧 Email Setup

### Gmail Configuration

1. **Enable 2-Step Verification**

   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security > 2-Step Verification
   - Enable it if not already enabled

2. **Generate App Password**

   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" as the app
   - Click "Generate"
   - Copy the 16-character password

3. **Update Environment Variables**
   ```env
   EMAIL_USER=your-actual-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Test Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email inbox at `aadilshaikh2164@gmail.com`

---

## 📁 Project Structure

```
nft-gallery/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── enhanced-*.tsx    # Enhanced components
│   └── *.tsx            # Feature components
├── lib/                  # Utilities and helpers
├── public/               # Static assets
│   └── images/          # Image assets
└── styles/              # Additional styles
```

---

## 🎯 Key Components

### Interactive Elements

- **Enhanced Navigation**: Sticky header with smooth transitions
- **Ripple Effect**: Click feedback animations
- **Scrambled Text**: Dynamic text animations
- **Color Wipe**: Page transition effects
- **Distorted Image Hover**: Interactive image effects

### Gallery Features

- **Art Grid**: Responsive grid layout for NFTs
- **Infinite Marquee**: Scrolling artist showcases
- **Exclusive Drops**: Featured NFT collections
- **Artist Showcase**: Dedicated artist profiles

### User Interface

- **Theme Provider**: Dark/light mode support
- **Mobile Detection**: Responsive behavior
- **Loading States**: Skeleton loaders and spinners
- **Toast Notifications**: User feedback system

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment with database
- **AWS Amplify**: Full-stack deployment

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for the deployment platform
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the utility-first CSS framework
- **Radix UI** for accessible components

---

<div align="center">

**Made with ❤️ by [Your Name]**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/nft-gallery?style=social)](https://github.com/yourusername/nft-gallery)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/nft-gallery?style=social)](https://github.com/yourusername/nft-gallery)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/nft-gallery)](https://github.com/yourusername/nft-gallery/issues)

</div>
