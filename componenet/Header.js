import styles from "../styles/Header.module.css"

function Header() {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Good</span> Thought's
      </h1>
      <p className={styles.description}>
          keep up to data with the latest web page
      </p>

    </div>
  )
}

export default Header