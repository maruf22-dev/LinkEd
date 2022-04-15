import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Login.module.css'
import universities from '../utils/universities'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuid } from 'uuid'
import axios_util from '../utils/axios_util'


export default function Login() {

    const Router = useRouter();
    const PAGETYPES = {
        LOGIN: 'LOGIN',
        REGISTER: 'REGISTER',
        RECOVERY: 'RECOVERY'
    }
    const RESGISTER_TYPES =
    {
        STAGE1: 'STAGE1',
        STAGE2: 'STAGE2',
        STAGE3: 'STAGE3'
    }
    const RECOVERY_TYPES =
    {
        STAGE1: 'STAGE1',
        STAGE2: 'STAGE2',
        STAGE3: 'STAGE3'
    }
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [pageType, setPageType] = useState(PAGETYPES.LOGIN);
    const [resgisterType, setRegisterType] = useState(RESGISTER_TYPES.STAGE1);
    const [recoveryType, setRecoveryType] = useState(RECOVERY_TYPES.STAGE1);
    const [showUniversities, setShowUniversities] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signupUserName, setSignupUserName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupPasswordConfirmation, setSignupPasswordConfirmation] = useState("");


    const notify = (message) => toast.dark(
        message,
        {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
        }
    );



    const signup = async (username, email, university_name, password, confirm_password) => {
        if (password !== confirm_password) {
            notify('Passwords doesn\'t match!');
            return;
        }

        await axios_util("/add-user", {
            profilePic: '/user_profile.jpg',
            userID: ("user_" + uuid()),
            username: username,
            email: email,
            university: university_name,
            password: password,
            bio: null,
            skills: null,
        })
        notify(`new account created,\nwelcome ${username}`);

    }



    return (
        <div className={styles.container}>
            <div className={styles.icon_container}>
                <div>
                    <img src="/demo_logo.png" alt="" />
                </div>
            </div>
            {
                (pageType === PAGETYPES.LOGIN) &&
                <div className={styles.login_box}>
                    <div className={styles.login_box_greeting_container}>
                        SIGN IN
                    </div>
                    <div className={styles.login_box_email_container}>
                        <div className={styles.login_input_prompt}>
                            Email
                        </div>

                        <div className={styles.login_input_container}>
                            <input
                                type="text"
                                placeholder="Email"
                                spellCheck="false"
                                onChange={(email) => { setEmail(email.target.value) }}

                            />
                        </div>
                    </div>
                    <div className={styles.login_box_password_container}>
                        <div className={styles.login_input_prompt}>
                            Password
                        </div>
                        <div className={styles.login_input_container}>
                            <input type="password"
                                placeholder="Password" spellCheck="false"
                                autoComplete="new-password"
                                onChange={(password) => { setPassword(password.target.value) }}
                            />
                        </div>
                    </div>
                    <div className={styles.login_box_recovery_prompt_container}>
                        <div className={styles.login_box_recovery_prompt} onClick={() => { setPageType(PAGETYPES.RECOVERY) }}>
                            Forgot password?
                        </div>
                    </div>
                    <div className={styles.login_button_container}>
                        <div className={styles.login_button} onClick={async () => {

                            let data = await axios_util('/verify_login_info', {
                                email: email,
                                password: password
                            });

                            if (data.status === 200 && email === 'admin') {
                                Router.push('/admin');
                            }
                            else if (data.status === 200) {
                                Router.push('/home');
                            }
                            else if (data.status === 304) {
                                notify(`This email is not registered`);
                            }
                            else if (data.status === 305) {
                                notify(`password does not match`);
                            }
                            else {
                                notify(`Internal Server Error.`);
                            }
                        }}>
                            Login
                        </div>
                    </div>
                    <div className={styles.login_box_signup_prompt_container}>
                        <div className={styles.login_box_signup_prompt}>
                            Don't have an account?
                        </div>
                        <div className={styles.login_box_signup_button} onClick={() => {
                            setRegisterType(RESGISTER_TYPES.STAGE1);
                            setPageType(PAGETYPES.REGISTER);
                        }}>
                            Create account
                        </div>
                    </div>
                </div>

            }
            {
                pageType === PAGETYPES.REGISTER &&
                <div className={styles.register_box}>
                    <div className={styles.login_box_greeting_container}>
                        REGISTER
                    </div>

                    {
                        (resgisterType === RESGISTER_TYPES.STAGE1) &&

                        <div className={styles.login_box_email_container}>
                            <div className={styles.login_input_prompt}>
                                Name
                            </div>
                            <div className={styles.login_input_container}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    spellCheck="false"
                                    onChange={(username) => { setSignupUserName(username.target.value) }}
                                />
                            </div>
                        </div>
                    }

                    {
                        (resgisterType === RESGISTER_TYPES.STAGE1) &&
                        <div className={styles.login_box_email_container}>
                            <div className={styles.login_input_prompt}>
                                Email
                            </div>
                            <div className={styles.login_input_container}>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    spellCheck="false"
                                    onChange={(useremail) => { setSignupEmail(useremail.target.value) }}
                                />
                            </div>
                        </div>
                    }
                    {
                        (resgisterType === RESGISTER_TYPES.STAGE2) &&

                        <div className={styles.login_box_email_container}>
                            <div className={styles.login_input_prompt}>
                                University
                            </div>
                            <div className={styles.login_input_container}>
                                <input
                                    value={selectedUniversity}
                                    type="text"
                                    placeholder="Name"
                                    spellCheck="false"
                                    onClick={() => {
                                        setShowUniversities(!showUniversities);
                                    }}
                                    onChange={() => { }}
                                />
                            </div>
                        </div>
                    }
                    {
                        (resgisterType === RESGISTER_TYPES.STAGE2) &&


                        <div className={styles.university_suggestion_container}>
                            {
                                showUniversities && universities.map((current, index) =>
                                    <div className={styles.university_list_item}
                                        key={index}
                                        onClick={() => {
                                            setShowUniversities(false);
                                            setSelectedUniversity(current)
                                        }}

                                    >{current}</div>)
                            }
                        </div>

                    }



                    {
                        (resgisterType === RESGISTER_TYPES.STAGE3) &&
                        <div className={styles.login_box_password_container}>
                            <div className={styles.login_input_prompt}>
                                Password
                            </div>
                            <div className={styles.login_input_container}>
                                <input type="password"
                                    placeholder="Password" spellCheck="false"
                                    autoComplete="new-password"
                                    onChange={(password) => { setSignupPassword(password.target.value) }}

                                />
                            </div>
                        </div>
                    }


                    {
                        (resgisterType === RESGISTER_TYPES.STAGE3) &&

                        <div className={styles.login_box_password_container}>
                            <div className={styles.login_input_prompt}>
                                confirm password
                            </div>
                            <div className={styles.login_input_container}>
                                <input type="password"
                                    placeholder="confirm password" spellCheck="false"
                                    autoComplete="new-password"
                                    onChange={(confirm_password) => { setSignupPasswordConfirmation(confirm_password.target.value) }}
                                />
                            </div>
                        </div>

                    }


                    <div className={styles.login_box_signup_prompt_container}>
                        <div className={styles.login_box_signup_prompt}>
                            Already have an account?
                        </div>
                        <div className={styles.login_box_signup_button} onClick={async () => {
                            setPageType(PAGETYPES.LOGIN)
                        }}>
                            Sign in
                        </div>
                    </div>

                    <div className={styles.login_button_container}>
                        <div className={styles.login_button} onClick={async () => {

                            if (resgisterType === RESGISTER_TYPES.STAGE1)
                                setRegisterType(RESGISTER_TYPES.STAGE2);
                            else if (resgisterType === RESGISTER_TYPES.STAGE2)
                                setRegisterType(RESGISTER_TYPES.STAGE3);
                            else {
                                await signup(signupUserName, signupEmail, selectedUniversity, signupPassword, signupPasswordConfirmation);
                                setRegisterType(RESGISTER_TYPES.STAGE1);
                                setPageType(PAGETYPES.LOGIN);
                            }


                        }} >
                            {
                                (resgisterType === RESGISTER_TYPES.STAGE3) ?
                                    "Sign Up" :
                                    "Next"
                            }
                        </div>
                    </div>
                </div>
            }
            {
                pageType === PAGETYPES.RECOVERY &&
                <div className={styles.login_box}>
                    <div className={styles.login_box_greeting_container}>
                        RECOVER ACCOUNT
                    </div>
                    {
                        (recoveryType === RECOVERY_TYPES.STAGE1) &&
                        <div className={styles.login_box_email_container}>
                            <div className={styles.login_input_prompt}>
                                Email
                            </div>
                            <div className={styles.login_input_container}>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    spellCheck="false"
                                />
                            </div>
                        </div>
                    }
                    {
                        (recoveryType === RECOVERY_TYPES.STAGE2) &&
                        <div className={styles.login_box_email_container}>
                            <div className={styles.login_input_prompt}>
                                Verification Code
                            </div>
                            <div className={styles.login_input_container}>
                                <input
                                    type="text"
                                    placeholder="Enter sent Code"
                                    spellCheck="false"
                                />
                            </div>
                        </div>
                    }



                    {
                        (recoveryType === RECOVERY_TYPES.STAGE3) &&
                        <div className={styles.login_box_password_container}>
                            <div className={styles.login_input_prompt}>
                                Password
                            </div>
                            <div className={styles.login_input_container}>
                                <input type="password"
                                    placeholder="Password" spellCheck="false"
                                    autoComplete="new-password"
                                />
                            </div>
                        </div>
                    }

                    {
                        (recoveryType === RECOVERY_TYPES.STAGE3) &&
                        <div className={styles.login_box_password_container}>
                            <div className={styles.login_input_prompt}>
                                Confirm Password
                            </div>
                            <div className={styles.login_input_container}>
                                <input type="password"
                                    placeholder="Confirm Password" spellCheck="false"
                                    autoComplete="new-password"
                                />
                            </div>
                        </div>
                    }

                    <div className={styles.login_box_signup_prompt_container}>
                        <div className={styles.login_box_signup_prompt}>
                            Remembered the password?
                        </div>
                        <div className={styles.login_box_signup_button} onClick={() => { setPageType(PAGETYPES.LOGIN) }}>
                            Sign in
                        </div>
                    </div>

                    <div className={styles.login_button_container}>
                        <div className={styles.login_button} onClick={() => {

                            if (recoveryType === RECOVERY_TYPES.STAGE1)
                                setRecoveryType(RECOVERY_TYPES.STAGE2);
                            else if (recoveryType === RECOVERY_TYPES.STAGE2)
                                setRecoveryType(RECOVERY_TYPES.STAGE3);
                            else {

                                setRecoveryType(RECOVERY_TYPES.STAGE1);
                                setPageType(PAGETYPES.LOGIN);
                            }


                        }} >
                            {
                                (recoveryType === RECOVERY_TYPES.STAGE3) ?
                                    "Change Password" :
                                    "Next"
                            }
                        </div>
                    </div>

                </div>
            }
            <div className={styles.tag_container}>
                <div className={styles.tagline}>
                    Connecting the students of Bangladesh.
                </div>
                <div className={styles.learn_more_link} onClick={() => { Router.push('learn-more') }}>
                    Learn More
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    )
}