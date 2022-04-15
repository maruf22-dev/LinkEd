import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Profile.module.css'


const profile = () => {
    const Router = useRouter();
    return (
        <div className={styles.container}>

            <div className={styles.nav_top}>
                <div className={styles.profile}>
                    <img src="/demo_logo.png" alt="" onClick={() => {
                        Router.push('/home');
                    }} />

                    <img src="/user_profile.jpg" alt="" />
                </div>
            </div>
            <div className={styles.nav_bottom}>
                <div className={styles.profile_name}>
                    maruf
                </div>
            </div>
            <div className={styles.nav_bottom}>
                <div className={styles.profile_name} style={{ fontSize: "18px" }}>
                    Studies at North South University, Dhaka
                </div>
            </div>
            <div className={styles.nav_bottom}>
                <div className={styles.profile_name} style={{ fontSize: "25px" }}>
                    Bio
                </div>
                <div className={styles.profile_name} style={{ fontSize: "18px" }}>
                    I am a student, majoring in computer science. I like competetive programing
                </div>
            </div>
            <div className={styles.nav_bottom}>
                <div className={styles.profile_name} style={{ fontSize: "25px" }}>
                    Skills
                </div>
                <div className={styles.profile_name} style={{ fontSize: "18px" }}>
                   Chess, react.js, web design, competetive programing
                </div>
            </div>
        </div>
    )
}

export default profile