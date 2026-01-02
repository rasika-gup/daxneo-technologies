import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // The middleware will handle authentication
    const url = new URL(req.url);
    const status = url.searchParams.get('status'); // Optional filter by status
    
    // Build query based on status filter
    const whereClause: any = {};
    if (status) {
      whereClause.status = status;
    }
    
    const contactQueries = await prisma.contactQuery.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return new Response(
      JSON.stringify({ contactQueries }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Admin contact queries fetch error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;
    
    if (!id || !status) {
      return new Response(
        JSON.stringify({ error: 'Contact query ID and status are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Update contact query status
    const updatedQuery = await prisma.contactQuery.update({
      where: { id },
      data: { status },
    });
    
    return new Response(
      JSON.stringify({ 
        message: 'Contact query status updated successfully', 
        contactQuery: updatedQuery 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Admin contact query update error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return new Response(
        JSON.stringify({ error: 'Contact query ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Delete contact query
    await prisma.contactQuery.delete({
      where: { id },
    });
    
    return new Response(
      JSON.stringify({ message: 'Contact query deleted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Admin contact query delete error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}