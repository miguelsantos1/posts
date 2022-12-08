import styles from '../styles/postComponent.module.css'
import { User } from 'phosphor-react'

export default function Post(props) {

  const title = props.title.toUpperCase()

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <h3> { title } </h3>
        <User className={styles.userIcon}size={40} />
      </div>

      <hr/> 

        <div className={styles.description}>
          <h4> {props.description } </h4>
        </div>

  </div>
  )
} 