import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Profile.module.css'


const profile = () => {
    const Router = useRouter();
    return (
        <div className={styles.container}>

            <div>
                profile 
            </div>
            <div onClick={() => {
                Router.push('/questions');
            }}>Your Questions</div>

        </div>
    )
}

export default profile