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

  res.send('<h1>dados enviados</h1> <br> <a href="/"> Voltar </a>')

}