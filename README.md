# Daxneo Technologies - AI-Powered Solutions Platform

This is a full-stack Next.js application with authentication, admin dashboard, contact forms, and reviews system built for Daxneo Technologies.

## Features

- **Next.js 16** with App Router
- **NextAuth** authentication system (email/password)
- **Prisma ORM** with PostgreSQL database
- **Admin dashboard** with reviews and contact query management
- **Contact form** with email notifications
- **Reviews system** with admin approval workflow
- **Responsive design** with Tailwind CSS
- **SEO optimized** with proper metadata
- **Security features** (rate limiting, CORS, headers)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication Setup

1. Configure your environment variables (see `AUTH_SETUP.md`)
2. Run database migrations:
   ```bash
   npx prisma db push
   ```
3. Create an admin user by signing up and updating the role in the database

## Admin Access

- Register a new account at `/signup`
- Update the user role to 'admin' in the database
- Access the admin dashboard at `/admin`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
