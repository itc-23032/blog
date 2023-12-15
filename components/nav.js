import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
