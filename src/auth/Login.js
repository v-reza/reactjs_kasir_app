import React, { useState } from 'react'
import styles from '../auth/style.module.css'
const Login = () => {
    const classShowHidePw = {
        right: 0,
        cursor: "pointer",
        padding: "10px",
    }

    const [showAlert, setShowAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const clickShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }

    const closeAlert = () => {
        setShowAlert(false)
    }

    const handleLogin = () => {

    }

    return (
        <>
            <div style={{ backgroundColor: '#0E4BF1' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <div class={styles.container}>
                        <div class={styles.forms}>
                            <div class={styles.form + " " + styles.login}>
                                <div class={
                                    showAlert ? styles.alert : styles.alerthide
                                }>
                                    <span class={styles.closeBtn} onClick={closeAlert}>&times;</span>
                                    {errorAlert}
                                </div>
                                <span class={styles.title}>Login Admin</span>

                                <form onSubmit={handleLogin}>
                                    <div class={styles.inputfield}>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required></input>
                                        <i class="uil uil-envelope icon"></i>
                                    </div>
                                    <div class={styles.inputfield}>
                                        <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} class="password" placeholder="Enter your password" required></input>
                                        <i class="uil uil-lock icon"></i>
                                        <i class={showPassword ? "uil uil-eye showHidePw" : "uil uil-eye-slash showHidePw"} style={classShowHidePw} onClick={clickShowPassword}></i>
                                    </div>

                                    <div class={styles.inputfield + " " + styles.button}>
                                        <input type="submit" value={loading ? "Loading" : "Login"} disabled={loading}></input>
                                    </div>
                                </form>

                                <div class="login-signup">
                                </div>
                            </div>

                            {/* <!-- Registration Form --> */}
                            <div class={styles.form + " " + styles.signup}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login