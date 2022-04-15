import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import styles from '../styles/BloodDonation.module.css'
import axios_util from '../utils/axios_util';

const blood_donation_page = () => {

    const Router = useRouter();
    const [addPostVisibility, setAddPostVisibility] = useState(true);
    const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const [group, setGroup] = useState(0);
    const [number, setNumber] = useState(null);
    const [description, setDescription] = useState("");
    const [posts, setPosts] = useState([]);



    useEffect(async () => {
        let response = await axios_util('/get-bd-posts', {});
        setPosts(response.array);
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
            {
                addPostVisibility &&
                <div className={styles.add_post}>
                    <div className={styles.add_post_image}>
                        <img src="/user_profile.jpg" alt="" onClick={() => {
                            Router.push('/profile');
                        }} />
                    </div>
                    <div className={styles.add_post_bar} onClick={() => {
                        setAddPostVisibility(false);
                    }}>
                        <p>
                            Post here if you need blood to be donated.
                        </p>
                    </div>
                </div>
            }
            {
                !addPostVisibility &&
                <div className={styles.add_post_container}>
                    <div onClick={() => {
                        setGroup((group + 1) % BLOOD_GROUPS.length);
                    }} className={styles.blood_group_changer}>
                        {
                            BLOOD_GROUPS[group]
                        }
                    </div>
                    <div className={styles.add_phone}>
                        <p>

                            Contact Number
                        </p>
                        <input
                            type="text"
                            pattern="[0-9]*"
                            value={number}
                            placeholder="Enter your Contact Number"
                            spellCheck="false"
                            onChange={(e) =>
                                setNumber((v) => (e.target.validity.valid ? e.target.value : v))
                            }
                        />
                    </div>
                    <div className={styles.add_description}>
                        <p>
                            description
                        </p>
                        <textarea
                            placeholder='add your description here'
                            spellCheck="false"
                            onChange={(e) =>
                                setDescription((v) => (e.target.validity.valid ? e.target.value : v))
                            }
                        />
                    </div>
                    <div className={styles.add_button_container}>

                        <div onClick={() => {
                            setAddPostVisibility(true);
                            setNumber(0);
                            setGroup(0);
                            setDescription("");
                        }}>
                            Discard
                        </div>
                        <div onClick={async () => {

                            let newPost =
                            {
                                bloodGroup: BLOOD_GROUPS[group],
                                description: description,
                                number: number,
                                postedById: 'jkasdkjasdjkj',
                                postedByName: 'Md. Maruf Bin Salim',
                                postedByImageLink: '/user_profile.jpg'
                            }
                            let newPosts = [];
                            newPosts.push(newPost);
                            for (let i = 0; i < posts.length; i++) newPosts.push(posts[i]);
                            setPosts(newPosts);
                            await axios_util('/add-bd-post', newPost);
                            setAddPostVisibility(true);
                        }}>
                            Post
                        </div>
                    </div>
                </div>
            }
            {
                addPostVisibility &&
                <div className={styles.blood_feed}>
                    {
                        (posts.length !== 0) &&
                        posts.map((current, index) =>
                            <div key={index} className={styles.post}>
                                <div className={styles.post_top}>
                                    <img src={current.postedByImageLink} alt="" onClick={() => {
                                        Router.push('/visit-profile/' + current.postedById);
                                    }} />
                                    <p>
                                        {current.postedByName}
                                    </p>
                                </div>
                                <div className={styles.post_main}>
                                    Blood group needed: {current.bloodGroup}
                                </div>
                                <div className={styles.post_contact}>
                                    You can contact me at : {current.number}
                                </div>
                                <div className={styles.post_description}>
                                    {current.description}
                                </div>
                            </div>
                        )
                    }
                    {
                        (posts.length === 0) &&
                        <div className={styles.post_prompt}>
                            There is no posts in the page.
                        </div>
                    }
                </div>

            }

        </div>
    )
}

export default blood_donation_page