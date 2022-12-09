import styles from '../styles/postComponent.module.css'
import { User } from 'phosphor-react'
import Link from 'next/link'

export default function Post(props) {

  const title = props.title.toUpperCase()

  return (
    <div className={styles.post}>
        <Link className={styles.link} href={`/post/${props.title}`}>
        <div className={styles.postHeader}>
          <h3> { title } </h3>
          <User className={styles.userIcon}size={40} />
        </div>
        <hr/>
          <div className={styles.description}>
            <h4> {props.description } </h4>
          </div>
         </Link>
        </div>
  )
} 