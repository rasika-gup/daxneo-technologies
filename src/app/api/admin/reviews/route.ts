import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    // The middleware will handle authentication
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return new Response(
      JSON.stringify({ reviews }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Admin reviews fetch error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, approved } = body;
    
    if (!id) {
      return new Response(
        JSON.stringify({ error: 'Review ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Update review approval status
    const updatedReview = await prisma.review.update({
      where: { id },
      data: { approved },
    });
    
    return new Response(
      JSON.stringify({ 
        message: `Review ${approved ? 'approved' : 'rejected'} successfully`, 
        review: updatedReview 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Admin review update error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return new Response(
        JSON.stringify({ error: 'Review ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Delete review
    await prisma.review.delete({
      where: { id },
    });
    
    return new Response(
      JSON.stringify({ message: 'Review deleted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Admin review delete error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}