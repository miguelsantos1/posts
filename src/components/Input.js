import styles from '../styles/inputComponent.module.css'


export default function Input(props) {
  return(
      <input
      {...props} 
      className={styles.input}
      name={ props.name }
      id={ props.name }
      type="text"
      />
  )
}