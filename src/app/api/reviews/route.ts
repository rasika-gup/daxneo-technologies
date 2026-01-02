import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    // Get only approved reviews
    const reviews = await prisma.review.findMany({
      where: {
        approved: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20, // Limit to 20 most recent reviews
    });
    
    return new Response(
      JSON.stringify({ reviews }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Reviews fetch error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}