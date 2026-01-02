import * as bcrypt from 'bcrypt';
import prisma from './prisma';

// Hash password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Verify password
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Get user by ID
export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

// Get user by email
export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

// Create user
export const createUser = async (userData: { name: string; email: string; password: string }) => {
  const hashedPassword = await hashPassword(userData.password);
  return await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      role: 'user',
    },
  });
};

// Authenticate user
export const authenticateUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user) {
    return null;
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return null;
  }

  return user;
};