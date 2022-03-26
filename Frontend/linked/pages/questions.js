import React, { useState } from 'react'
import styles from '../styles/Questions.module.css'
import { useRouter } from 'next/router'


const questions = () => {

    const Router = useRouter();

    const [questionLinks, setQuestionLinks] = useState([
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
        {
            link: "http://localhost:3000/educational-help/12345",
            date: "12:11:00 21/12/2022"
        },
    ]);

    return (

        <div className={styles.container}>
            <div className={styles.icon_container}>
                <div>
                    <img src="/home.jpg" alt="" onClick={()=>{
                        Router.push('/home');
                    }}  />
                </div>
                <div>
                    <img src="/user_profile.jpg" alt="" onClick={()=>{
                        Router.push('/profile');
                    }} />
                </div>
                <div className={styles.page_info}>
                    Questions you have posted before are shown below.
                </div>
            </div>


            <div className={styles.questions_list_container}>
                <div className={styles.add_question_panel}>
                    <div className={styles.add_question_prompt}>
                        Add a question to your universitiy portal
                    </div>
                    <div className={styles.add_question_button}>
                        <img src="/plus_logo.png" alt="" onClick={()=>{
                        Router.push('/addQuestions');
                    }} />
                    </div>
                </div>
                {
                    (questionLinks.length !== 0) ?

                        <>
                            {
                                questionLinks.map((current, index) =>
                                    <div key={index} className={styles.question_list_item}>
                                        <div className={styles.question_link} 
                                        onClick={()=>{
                                            Router.push(current.link);
                                        }}>
                                            {current.link}
                                        </div>
                                        <div className={styles.question_date}>
                                            {
                                                current.date
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </>
                        :
                        <>
                            <div className={styles.empty_prompt}>
                                You haven't posted any questions!!
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default questions