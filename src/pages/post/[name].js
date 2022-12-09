import { useRouter } from 'next/router'
import { House, User } from 'phosphor-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

import styles from '../../styles/userpost.module.css'

export default function Post() {
  const router = useRouter();
  const name = router.query.name

  const [userPost, setUserPost] = useState({})

  useEffect(() => {
    axios(`/api/post/get/name/${name}`).then((response) => {
      setUserPost(response.data)
    })
  }, [])

  console.log(userPost)
  
  return(
    <>

    <header>
      <h1><span>P</span>ost</h1>
      <Link title="Home" href="/">
      <House size={80} weight="fill" color="white" />
      </Link>
    </header>

      <h2 className={styles.post}>Post</h2>
    <main className={styles.postContent}>

    <div className={styles.postHeader}>
      <h3 className={styles.name}>{ userPost?.name }</h3>
      <User className={styles.userIcon}size={40} />
    </div>
    <hr/>

    <h3 className={styles.description}>{ userPost?.description }</h3>


    </main>


    </>

  )
}