import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import * as nodemailer from 'nodemailer';

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10).max(1000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validatedData = contactSchema.parse(body);
    
    const { name, email, company, message } = validatedData;
    
    // Create contact query in database
    const contactQuery = await prisma.contactQuery.create({
      data: {
        name,
        email,
        company: company || null,
        message,
      },
    });
    
    // Send email notification to admin
    if (process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      });

      // Send notification email to admin
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
        to: process.env.EMAIL_SERVER_USER, // Admin email
        subject: `New Contact Query from ${name}`,
        html: `
          <h2>New Contact Query</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
        `,
      });

      // Send confirmation email to user
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
        to: email,
        subject: 'Thank you for your message',
        html: `
          <h2>Thank you for contacting Daxneo Technologies</h2>
          <p>Hi ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <p>Best regards,<br/>The Daxneo Technologies Team</p>
        `,
      });
    }
    
    return new Response(
      JSON.stringify({ 
        message: 'Contact query submitted successfully', 
        id: contactQuery.id 
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
    
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}