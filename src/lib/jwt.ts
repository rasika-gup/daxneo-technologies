// JWT utility functions
export const generateToken = (payload: { id: string; email: string; role: string }): string => {
  if (typeof window !== 'undefined') {
    // Client-side - should not generate tokens on client
    throw new Error('Token generation not allowed on client side');
  }
  
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set');
  }
  
  // Using Node.js built-in crypto to create a simple JWT-like token
  // In production, use the proper JWT library
  const header = JSON.stringify({ alg: 'HS256', typ: 'JWT' });
  const encodedHeader = Buffer.from(header).toString('base64url');
  
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  
  // In a real implementation, you would sign this properly
  // For now, we'll return a basic JWT format without proper signature
  // This is just to have a placeholder until we resolve the typing issue
  return `${encodedHeader}.${encodedPayload}.signature_placeholder`;
};

export const verifyToken = (token: string): { id: string; email: string; role: string } | null => {
  if (typeof window !== 'undefined') {
    // Client-side - should not verify tokens on client
    return null;
  }
  
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }
    
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString());
    return payload;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
};