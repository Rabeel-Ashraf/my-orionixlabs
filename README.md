# Orionixlabs Automation and Self Hosting Solutions

This is the official website for Orionixlabs, a modern, multi-page Next.js + Tailwind CSS + TypeScript project. It's designed to be production-ready, animated, and drop-deployable to Vercel or Netlify.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS.
- **Rich Animations**: Smooth, performant animations with Framer Motion.
- **Interactive Background**: WebGL particle background on desktop with a lightweight fallback for mobile.
- **Dark/Light Mode**: Theme toggling with system preference detection.
- **CMS-ready Blog**: MDX-based blog and case studies.
- **Functional Contact Form**: API route using Nodemailer for email delivery.
- **SEO Optimized**: `next-seo` and `next-sitemap` for optimal search engine visibility.
- **Fully Responsive**: Premium design that looks great on all devices.
- **Accessibility Focused**: WCAG AA compliant with keyboard navigation and ARIA attributes.

## 🚀 Getting Started

### 1. Environment Setup

First, create a `.env.local` file in the root of the project by copying the example file:

```bash
cp .env.example .env.local
```

Now, fill in the required environment variables in `.env.local`. These are necessary for the contact form and newsletter functionality.

```env
# Mailer (Nodemailer) - for the contact form
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
SMTP_FROM_EMAIL=from@example.com
CONTACT_FORM_RECEIVER_EMAIL=to@example.com

# Mailchimp (for the newsletter)
MAILCHIMP_API_KEY=xxx-usX
MAILCHIMP_LIST_ID=abc123

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXX

# Website URL (for sitemap generation)
SITE_URL=https://orionixlabs.com
```

### 2. Install Dependencies

Install the project dependencies using `yarn`:

```bash
yarn install
```

### 3. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Editing Content

### Blog Posts & Case Studies

The blog and case studies are powered by MDX. You can easily add or edit content by modifying the files in the `_posts` directory.

-   **Blog Posts**: Add/edit `.mdx` files in `_posts/blog/`.
-   **Case Studies**: Add/edit `.mdx` files in `_posts/case-studies/`.

Each file requires YAML frontmatter at the top:

```mdx
---
title: 'My Awesome Blog Post'
date: '2025-01-15'
author: 'Rabeel Ashraf'
image: '/images/blog/post-image.png'
excerpt: 'A short summary of the blog post that will appear in the list view.'
---

Your content starts here. You can use **Markdown** and even `JSX` components.
```

## 🧪 Running Tests

This project uses Jest and React Testing Library for unit tests.

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🌐 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Before deploying, ensure you have set up the environment variables in your Vercel project settings.

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
