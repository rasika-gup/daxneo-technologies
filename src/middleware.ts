import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export async function middleware(request: NextRequest) {
  // Rate limiting for contact form
  if (request.nextUrl.pathname === '/api/contact/submit') {
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const key = `contact_${clientIP}`;
    
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    
    const record = rateLimitStore.get(key);
    
    if (!record) {
      rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    } else {
      if (now < record.resetTime) {
        if (record.count >= 5) { // Max 5 requests per 15 minutes
          return new NextResponse(
            JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
            { status: 429, headers: { 'Content-Type': 'application/json' } }
          );
        } else {
          rateLimitStore.set(key, { count: record.count + 1, resetTime: record.resetTime });
        }
      } else {
        rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
      }
    }
  }
  
  // Rate limiting for review submission
  if (request.nextUrl.pathname === '/api/reviews/submit') {
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const key = `reviews_${clientIP}`;
    
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour
    
    const record = rateLimitStore.get(key);
    
    if (!record) {
      rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    } else {
      if (now < record.resetTime) {
        if (record.count >= 2) { // Max 2 review submissions per hour
          return new NextResponse(
            JSON.stringify({ error: 'Rate limit exceeded. You can submit max 2 reviews per hour.' }),
            { status: 429, headers: { 'Content-Type': 'application/json' } }
          );
        } else {
          rateLimitStore.set(key, { count: record.count + 1, resetTime: record.resetTime });
        }
      } else {
        rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
      }
    }
  }
  
  // Check authentication for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    
    if (!token) {
      // Redirect to login page for admin routes
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      url.searchParams.set('callbackUrl', request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
    
    // Check if user has admin role
    if (token.role !== 'admin') {
      // Return 403 for non-admin users trying to access admin
      return new NextResponse(
        JSON.stringify({ error: 'Forbidden: Admin access required' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
  
  // Check authentication for admin API routes
  if (request.nextUrl.pathname.startsWith('/api/admin/')) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    
    if (!token) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Check if user has admin role
    if (token.role !== 'admin') {
      return new NextResponse(
        JSON.stringify({ error: 'Forbidden: Admin access required' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
  
  // Security headers for all responses
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // CORS headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  return response;
}

export const config = {
  matcher: [
    '/api/:path*',
    '/admin/:path*',
  ],
};