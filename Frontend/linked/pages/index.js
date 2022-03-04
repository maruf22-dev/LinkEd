import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const Router = useRouter();
  useEffect(async () => { 
    Router.push("/login");
  }, [Router]) 

  return (
    <div className={styles.container}>
      <div className={styles.loading_container}>
        <img className={styles.loading_image} height={100} src="/home_loading_image.gif" alt=""/>
        <div>
          <h2>Recovering Profile Information . . .</h2>
        </div>
      </div>
    </div>
  )
}