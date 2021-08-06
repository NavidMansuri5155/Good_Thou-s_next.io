import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link className={navStyles.h1} href='/'> 𝐍𝐚ＶᶤĐ 𝐁т𝓢</Link>
      <ul>
        <li>
          <Link href='/'>🅷🅾🅼🅴</Link>
        </li>
        <li>
          <Link href='/about'>🅰🅱🅾🆄🆃</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav