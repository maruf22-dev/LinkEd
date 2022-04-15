import axios from 'axios';
import { Router, useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Messenger.module.css'
import { useState, useEffect } from 'react';
import axios_util from '../utils/axios_util';


const messenger = () => {

    let demoUsers = [
        {
            userID: 1,
            threadName: 'Md. Maruf Bin Salim',
        },
        {
            userID: 1,
            threadName: 'Md. Hasan Bin Salim',
        },
        {
            userID: 1,
            threadName: 'Md. Rahim Bin Salim',
        },
        {
            userID: 1,
            threadName: 'Md. Karim Bin Salim',
        },
    ];
    let demoHistory = [
        {
            userID: 1,
            username: 'Md. Maruf Bin Salim',
            lastMessageTime: '10:01',
        },
        {
            userID: 1,
            username: 'Md. Hasan Bin Salim',
            lastMessageTime: '10:00',

        },
        {
            userID: 1,
            username: 'Md. Rahim Bin Salim',
            lastMessageTime: '10:00',

        },
        {
            userID: 1,
            username: 'Md. Karim Bin Salim',
            lastMessageTime: '10:00',

        },
    ];



    let Router = useRouter();
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [messageHistory, setMessageHistory] = useState(demoHistory);
    const [allUsers, setAllUsers] = useState(demoUsers);


    let handleSearch = (event) => {
        let keyword = event?.target?.value;
        setSearchText(keyword);
        let result = [];
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username.toLowerCase().includes(keyword.toLowerCase()))
                result = [...result, allUsers[i]];
        }
        setSearchResult(result);
    }

    useEffect(async () => {
        let data = await axios_util('/get-users', {});
        setAllUsers(data?.array);
        setSearchResult(data?.array);
    }, [])

    return (
        <div className={styles.container}>

            <div className={styles.navbar}>
                <div className={styles.logo_box}>
                    <img src="/demo_logo.png" alt="" onClick={() => {
                        Router.push('/home');
                    }} />
                </div>
            </div>


            <div className={styles.top_container}>
                <div className={styles.title_container}>
                    {(searchText === "") ?
                        <p>
                            Chat History
                        </p>
                        :
                        <p>
                            Search Results
                        </p>
                    }
                </div>

                <div className={styles.search_bar_container}>
                    <input
                        type="text"
                        placeholder="Search"
                        spellCheck="false"
                        className={styles.search_bar}
                        onChange={(e) => { handleSearch(e) }}
                    />
                </div>
            </div>


            <div className={styles.main}>
                {
                    (searchText === "") ?
                        <div className={styles.history_container}>
                            {
                                messageHistory.map((current, index) =>
                                    <div key={index} className={styles.history}
                                        onClick={(event) => {
                                            Router.push(`/messenger/${current.userID}`);
                                        }}
                                    >
                                        <div className={styles.profile_pic}>
                                            <img alt="" src={"/user_profile.jpg"} />
                                        </div>
                                        <div className={styles.threadname_container}>
                                            <p>   {current.username} </p>
                                        </div>
                                        <div className={styles.time_container}>
                                            <p>
                                                {current.lastMessageTime}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        :
                        <div className={styles.search_result_container}>
                            {
                                searchResult.map((current, index) =>
                                    <div className={styles.search_result}
                                        key={index}
                                        onClick={(event) => {
                                            Router.push(`/messenger/${current.userID}`);
                                        }}>
                                        <div className={styles.profile_pic}>
                                            <img alt="" src={"/user_profile.jpg"} />
                                        </div>
                                        <div className={styles.threadname_container}>
                                            <p>   {current.username} </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }


            </div>
        </div>
    )
}


export default messenger