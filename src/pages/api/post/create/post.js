// Create post

import { PrismaClient } from '@prisma/client'

export default async function CreatePost(req, res) {

  const prisma = new PrismaClient()

  const createPost = await prisma.post.create({
    data: {
      name: req.body.name,
      description: req.body.description
    }
  })

  return res.status(201).redirect('/');


}