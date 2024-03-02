// lib/prisma.ts
// import { PrismaClient } from '@prisma/client';

// export const prisma = new PrismaClient();
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === 'production') {
  global.prisma = new PrismaClient();
}

export const prisma = global.prisma || new PrismaClient();
