import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import InputEmoji from 'react-input-emoji';
import styles from '../../styles/Messenger-individual.module.css'
import axios_util from '../../utils/axios_util';



const message = () => {

    let scrollRef = useRef();

    async function sendMessageToDB(message) {
        await axios_util('/send-message', message);
    }


    const Router = useRouter();
    let demoHistory = [
        {
            userID: 1,
            threadName: 'Md. Maruf Bin Salim',
            lastMessageTime: '10:01',
        },
        {
            userID: 1,
            threadName: 'Md. Hasan Bin Salim',
            lastMessageTime: '10:00',

        },
        {
            userID: 1,
            threadName: 'Md. Rahim Bin Salim',
            lastMessageTime: '10:00',

        },
        {
            userID: 1,
            threadName: 'Md. Karim Bin Salim',
            lastMessageTime: '10:00',

        },
    ];





    const [text, setText] = useState("Hello");
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [messageHistory, setMessageHistory] = useState(demoHistory);
    const [allUsers, setAllUsers] = useState([]);

    const [messages, setMessages] = useState([]);


    
 

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

    const sendMessage = async () => {
        const message = {
            text: text,
            time: Date.now(),
        }

        let result = [];
        for (let i = 0; i < messages.length; i++) {

            result = [...messages, allUsers[i]];
        }
        result = [...messages, message];
        setText("");
        setMessages(result);
        await sendMessageToDB(message);
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });;

    }

    useEffect(async () => {
        let response = await axios_util('/get-messages', {});
        setMessages(response?.array.sort(function (a, b) {
            return a.time - b.time;
        }));
        response = await axios_util('/get-users', {});
        setAllUsers(response?.array);
        setSearchResult(response?.array);
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });;
    }, [])



    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo_box}>
                    <img src="/demo_logo.png" alt="" onClick={() => {
                        Router.push('../home');
                    }} />
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.main}>
                    <div className={styles.search}>


                        <div className={styles.search_bar_container}>
                            <input
                                type="text"
                                placeholder="Search"
                                spellCheck="false"
                                className={styles.search_bar}
                                onChange={(e) => { handleSearch(e) }}
                            />
                        </div>

                        <div className={styles.main_search}>

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
                                                        <p>   {current.threadName} </p>
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
                </div>


                <div className={styles.chat}>
                    <div className={styles.chat_main}>
                        <div className={styles.messageContainer}>
                            {
                                messages.map((current, index) =>
                                    <div className={styles.message}>
                                        <div className={styles.message_top}>
                                            <div className={styles.profile_pic}>
                                                <img alt="" src={"/user_profile.jpg"} />
                                            </div>
                                            <div className={styles.profile_name}>
                                                profile name
                                            </div>
                                        </div>
                                        <div className={styles.message_text}>
                                            {current?.text}
                                        </div>
                                        {
                                            (index ===  messages.length -1) &&
                                            <div ref={scrollRef}></div>
                                        }

                                    </div>

                                )
                            }
                        </div>
                    </div>

                    <div className={styles.chat_bottom}>
                        <InputEmoji className={styles.message_bar}
                            borderColor={"#ffffff"}
                            height={60}
                            spellcheck="false"
                            fontSize={17}
                            value={text}
                            onChange={(e) => { setText(e) }}
                            onEnter={sendMessage}
                        />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default message