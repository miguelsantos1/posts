// List post by ID

import { PrismaClient } from "@prisma/client";

export default async function GetPostById(req, res) {

  const { id } = req.query

  const prisma = new PrismaClient()
  
  const post = await prisma.post.findFirst({
    where: {
      id: id
    }
  })

  return res.status(200).json(post)

}