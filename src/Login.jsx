import React, { useState } from "react";

const Login = ({onLogin}) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [isButtonDisabled,setIsButtonDisabled] = useState(true)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    setIsButtonDisabled(!username || !password)
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setIsButtonDisabled(!username || !password)
  }

  const handleButtonDisabled = () => {
    if(!isButtonDisabled){
      onLogin({username,password})
    }
  }

  return (
    <>
      <div>
        <p>Email*</p>
        <input type="email" placeholder="Email*" value={username} onChange={handleUsernameChange}/>
      </div>
      <div>
        <p>Password*</p>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onChange={handleButtonDisabled} disabled={isButtonDisabled} >Login</button>
    </>
  )
}

export default Login;