import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Dashboard.module.css'
import axios_util from '../utils/axios_util'

const home = () => {

    const FILTER_TYPE =
    {
        SEARCH: 'SEARCH',
        STOP: 'STOP'
    }

    const [filterType, setFilterType] = useState(FILTER_TYPE.STOP);
    const [searchText, setSearchText] = useState([]);
    const [users, setUsers] = useState([]);
    const [userSearchResult, SetUserSearchResult] = useState([]);

    let services =
        [
            {
                serviceName: 'Global portal',
                serviceImage: '/global.jpg',
                serviceLink: '/global'
            },
            {
                serviceName: 'University Portal',
                serviceImage: '/university.jpg',
                serviceLink: '/university'
            },
            {
                serviceName: 'educational material sharing',
                serviceImage: '/material.jfif',
                serviceLink: '/material-share'
            },
            {
                serviceName: 'educational help',
                serviceImage: '/help.jpg',
                serviceLink: '/educational-help'
            },
            {
                serviceName: 'Share Project',
                serviceImage: '/project-share.png',
                serviceLink: '/share-project'
            },
            {
                serviceName: 'Find Project Partner',
                serviceImage: '/project-partner.jfif',
                serviceLink: '/project-partner'
            },
            {
                serviceName: 'Find Research Partner',
                serviceImage: '/research-partner.jpg',
                serviceLink: '/research-partner'
            },
            {
                serviceName: 'Financial Donation',
                serviceImage: '/donation.jpg',
                serviceLink: '/financial-donation'
            },
            {
                serviceName: 'Blood Donation',
                serviceImage: '/blood-donate.jfif',
                serviceLink: '/blood-donation'
            }

        ]
    function handleSearch(event) {
        let keyword = event?.target?.value;
        let result = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].username.toLowerCase().includes(keyword.toLowerCase())) result = [...result, users[i]];
        }
        SetUserSearchResult(result);
    }

    useEffect(async () => {
        let data = await axios_util('/get-users', {});
        setUsers(data?.array);
        SetUserSearchResult(data?.array);
    }, [])




    const Router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>

                <div className={styles.logo_box}>
                    <img src="/demo_logo.png" alt="" />
                </div>

                <div className={styles.search_box}>
                    <div className={styles.search_bar}>
                        {
                            (filterType === FILTER_TYPE.SEARCH) ?
                                <>

                                    <input
                                        type="text"
                                        placeholder="search user"
                                        spellCheck="false"
                                        onChange={(event) => { handleSearch(event) }}
                                    />
                                    <div className={styles.search_suggestion}>
                                        {
                                            (userSearchResult.length === 0) ?
                                                <div className={styles.search_prompt}>
                                                    No User Found
                                                </div>
                                                :
                                                userSearchResult.map((current, index) =>
                                                    <div className={styles.searched_user}>

                                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                            <img height="30px"
                                                                style={{ borderRadius: "50%", marginRight: "10px", cursor: "pointer" }}
                                                                src={current.profilePic} alt="" onClick={() => {
                                                                    Router.push('/visit-profile/' + current.userID);
                                                                }} />
                                                            <p>
                                                                {current.username}
                                                            </p>
                                                        </div>
                                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                            <img height="30px"
                                                                style={{ borderRadius: "50%", marginRight: "10px", cursor: "pointer" }}
                                                                src="messenger.jfif" alt="" onClick={() => {
                                                                    Router.push('/messenger/' + current.userID);
                                                                }} />

                                                        </div>
                                                    </div>
                                                )
                                        }
                                    </div>
                                </>

                                :
                                <>
                                </>
                        }
                    </div>
                    <div className={styles.filter_button} onClick={() => {
                        if (filterType === FILTER_TYPE.STOP) setFilterType(FILTER_TYPE.SEARCH);
                        else setFilterType(FILTER_TYPE.STOP)
                    }}>
                        {
                            (filterType === FILTER_TYPE.STOP)
                                ? 'search' : 'stop searching'
                        }
                    </div>
                </div>

                <div className={styles.profile}>
                    <img src="/user_profile.jpg" alt="" onClick={() => {
                        Router.push('/profile');
                    }} />
                </div>

                <div className={styles.messenger}>
                    <img src="/messenger.jfif" alt="" onClick={() => {
                        Router.push('/messenger');
                    }} />
                </div>


                <div className={styles.logout}>
                    <img src="/logout.jpg" alt="" onClick={() => {
                        Router.push('/login');
                    }} />
                </div>
            </div>



            <div className={styles.body}>
                {
                    (filterType === FILTER_TYPE.STOP) &&
                    <div className={styles.services_container}>
                        {
                            services.map((current, index) =>
                                <div className={styles.service}>
                                    <div>
                                        {current.serviceName}
                                    </div>
                                    <img src={current.serviceImage} alt="" onClick={() => {
                                        Router.push(current.serviceLink);
                                    }} />
                                </div>
                            )

                        }
                    </div>
                }
            </div>

        </div>
    )
}

export default home