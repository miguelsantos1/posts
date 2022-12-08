// list all posts

import { PrismaClient } from '@prisma/client'

export default async function Posts(req, res) {

  const prisma = new PrismaClient()

  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res.status(200).json(posts);

}
