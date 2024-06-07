import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solomon",
  description: "Alysanne's blog home",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello this is solomon</p>
    </main>
  );
}
