import Link from "next/link"
import styles from "@/styles/components/navbar.module.css"
import { secondary_font, main_font } from "@/lib/fonts"

export default function Navbar() {
  return (
    <nav id={styles.nav} className={secondary_font.className}>
      <ul>
        <li id={styles.name}>
          <h1 className={main_font.className}>
            <Link className={styles.link} href="/">
              <span>Alysanne</span>
            </Link>
          </h1>
        </li>
        <li><Link className={styles.link} href="/solomon">Solomon</Link></li>
        <li><Link className={styles.link} href="/tarot">Tarot</Link></li>
        <li><Link className={styles.link} href="/tech">Tech</Link></li>
        <li><Link className={styles.link} href="/fragance">Fragance</Link></li>
        <li><Link className={styles.button} href="/contact">Contact me</Link></li>
      </ul>
    </nav>
  )
}
