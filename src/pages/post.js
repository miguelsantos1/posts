import { House } from 'phosphor-react'
import Input from '../components/Input' 
import styles from '../styles/post.module.css' 

import Link from 'next/link'

export default function Post() {

  return(
    <>
      <header>
      <h1><span>P</span>ost</h1>
      <Link title="Home" href="/">
      <House size={80} weight="fill" color="white" />
      </Link>
      </header>

      <main>

        <form className={styles.form} action="/api/post/create/post" method="POST">
          <h2 className={styles.title}>NOVA POSTAGEM</h2>

          <Input
          name="name" 
          placeholder="NOME"
          maxLength={19}
          required
          />
          <textArea className={styles.input}

          name="description" 
          placeholder="DESCRIÇÃO"
          maxLength={300}
          rows={5}
          required
          >

          </textArea>

          <input 
          className={styles.button}
          value="POSTAR!"
          type="submit"
          />

        </form>
      </main>
    </>

  )
}