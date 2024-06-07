import Link from "next/link"
import Image from 'next/image'
import styles from "@/styles/components/navbar.module.css"
import { secondary_font, main_font } from "@/lib/fonts"

export default function Navbar() {
  return (
    <nav id={styles.nav} className={secondary_font.className}>
      <ul>
        <li id={styles.name}>
          <h1 className={main_font.className}>
            <Link className={styles.link} href="/">
              <svg className={styles.svg} viewBox="0 0 194.21 221" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path  d="M96.853 20.5l74.531 127.929L22.321 72.57 96.853 200.5l74.531-127.929L22.321 148.43 96.853 20.5z" fill="none" stroke="#FFFFFF" strokeWidth="7"/>
              </svg>
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
