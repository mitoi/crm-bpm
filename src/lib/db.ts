import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  // This allows TypeScript to understand that `globalThis.prisma` can be either a PrismaClient or undefined.
  var prisma: PrismaClient | undefined
}

// Use `globalThis.prisma` to avoid creating multiple instances of PrismaClient during hot-reloading in development.
export const db = globalThis.prisma || new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
