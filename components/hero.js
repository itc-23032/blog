import styles from 'styles/hero.module.css'
const Hero = props => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
        {props.imageOn && <figure> [画像] </figure>}
      </div>
    </div>
  )
}

export default Hero
