import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Define validation schema for review submission
const reviewSchema = z.object({
  userId: z.string().optional(), // Optional for now, will be required when auth is implemented
  userName: z.string().min(2).max(100),
  userRole: z.string().optional(),
  company: z.string().optional(),
  content: z.string().min(10).max(1000),
  rating: z.number().min(1).max(5),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validatedData = reviewSchema.parse(body);
    
    const { userId, userName, userRole, company, content, rating } = validatedData;
    
    // Create review in database (not approved by default)
    const review = await prisma.review.create({
      data: {
        userId: userId || null, // Allow null for unauthenticated users initially
        userName,
        userRole: userRole || null,
        company: company || null,
        content,
        rating,
        approved: false, // Reviews need admin approval before being public
      },
    });
    
    return new Response(
      JSON.stringify({ 
        message: 'Review submitted successfully. Awaiting admin approval.', 
        id: review.id 
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ error: 'Invalid input data', details: error.errors }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    console.error('Review submission error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}