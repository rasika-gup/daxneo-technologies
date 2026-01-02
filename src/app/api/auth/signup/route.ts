import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { z } from 'zod';

export const runtime = 'nodejs';

// Define validation schema
const signupSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validatedData = signupSchema.parse(body);
    
    const { name, email, password } = validatedData;
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: 'User with this email already exists' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'user', // Default role for new users
      },
    });
    
    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;
    
    return new Response(
      JSON.stringify({ 
        message: 'User created successfully', 
        user: userWithoutPassword 
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
    
    console.error('Signup error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}