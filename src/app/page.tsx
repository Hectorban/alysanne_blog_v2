import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Alysanne's blog home",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello</p>
    </main>
  );
}
