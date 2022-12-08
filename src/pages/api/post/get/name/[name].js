// List post by name

import { PrismaClient } from "@prisma/client";

export default async function GetPostByName(req, res) {

  const { name } = req.query

  const prisma = new PrismaClient()
  
  const post = await prisma.post.findFirst({
    where: {
      name: name
    }
  })  

  return res.status(200).json(post)

}