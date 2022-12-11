import styles from '../styles/home.module.css'

import { useState, useEffect } from 'react'
import Post from '../components/Post'
import axios from 'axios'
import { PlusCircle } from 'phosphor-react'
import Link from 'next/link'

 
export async function getServerSideProps() {

  
  const data = await fetch(`${process.env.WEB}/api/post/get/posts`)
  const posts = await data.json()

  return {
    props: {
      posts
    }
  }

}

export default function Home(props) {


  return (

    <>

    <header>
        <h1><span>P</span>ost</h1>

      <Link title="Nova postagem" href="/post">
          <PlusCircle size={80} weight="fill" color="#fff" />
      </Link>
    </header>

    <main> 
      <section className={styles.about}>
      <h2> Faça sua próxima postagem aqui! </h2>  
      </section> 

        <h2 className={styles.subtitle}> Feed </h2>

      <section className={styles.feed}>

       { props.posts.map(post => {
         return(
           <Post 
           key={ post?.id }
           title={ post?.name } 
           description={ post?.description }
           />
           )
          }) }

      </section>
    </main>

    

    </>

  )
}
