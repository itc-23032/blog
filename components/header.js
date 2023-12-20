import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  )
}
export default Header
