import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "components/Header";

const Home: NextPage = () => {

  return (
   <div className={styles.container}>
     <h1 className={styles.title}>

       Welcome to <Link href="/counter">counter</Link>
     </h1>

   </div>
  )
}

export default Home
