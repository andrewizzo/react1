import React, { useRef } from "react";


const UncontrolledLogin = ({onLogin}) => {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const buttonRef = useRef(null)

    const handleButtonDisabled = () => {
        const isButtonDisabled = !(usernameRef.current.value && passwordRef.current.value)
        buttonRef.current.disabled = isButtonDisabled;
    }

    const handleLogin = () => {
        const username = !usernameRef.current.value;
        const password = !passwordRef.current.value;
        onLogin({username,password})
    }
    const handleReset = () => {
        usernameRef.current.value = '';
        passwordRef.current.value = '';
        buttonRef.current.disabled = true;
    }

    return (
        <>
            <div>
                <p>Email*</p>
                <input type="email" placeholder="Email*" ref={usernameRef} onChange={handleButtonDisabled} />
            </div>
            <div>
                <p>Password*</p>
                <input type="password" placeholder="Password*" ref={passwordRef} onChange={handleButtonDisabled} />
            </div>
            <button ref={buttonRef} onChange={handleLogin} disabled>Login</button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}

export default UncontrolledLogin;