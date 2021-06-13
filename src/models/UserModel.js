import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function RegisterUser(user) {
  return await prisma.user.create({
    data: {
      email: "elsa@prisma.io",
      name: "dd",
    },
  });
}
