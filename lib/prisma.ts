// @ts-ignore: PrismaClient is generated dynamically
import { PrismaClient } from '@prisma/client'

// @ts-ignore
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// Use a Proxy to completely lazy-load PrismaClient.
// This prevents Next.js static build evaluation from triggering native engine loads via externalRequire.
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = new PrismaClient()
    }
    return (globalForPrisma.prisma as any)[prop]
  }
})
