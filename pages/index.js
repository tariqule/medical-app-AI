import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        <a href="/signin">sign in </a>
      </h1>
      <h1>
        <a href="/signup">sign up </a>
      </h1>
      <h1>
        <a href="/nurse/profile">Nurse Profile </a>
      </h1>
      <h1>
        <a href="/patient/profile">Patient Profile </a>
      </h1>
      <h1>
        <a href="/dashboard">dashboard </a>
      </h1>
    </div>
  );
}
