import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Dashboard.module.css'

const home = () => {
    
    const Router = useRouter();
    return (
        <div className={styles.container}>
            <div> home</div>
            <div onClick={() => {
                Router.push('/profile');
            }}>Profile</div>
            <div onClick={() => {
                Router.push('/login');
            }}>Log Out</div>
        </div>
    )
}

export default home