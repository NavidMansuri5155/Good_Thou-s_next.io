import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link className={navStyles.h1} href='/'> πποΌΆαΆ€Δ πΡπ’</Link>
      <ul>
        <li>
          <Link href='/'>π·πΎπΌπ΄</Link>
        </li>
        <li>
          <Link href='/about'>π°π±πΎππ</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav