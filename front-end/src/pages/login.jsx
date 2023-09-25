import React from 'react'

const Login = () => {
  return (
    <React.Fragment>
        <div className="login-container">
            <form action="/login" method='POST'>
                <input type="text" placeholder='enter name' id='name' required/>
                <input type="password" placeholder='enter password' id='password' required />
                <button id="submit-btn" >Login</button><br></br>
            </form>
        </div>
    </React.Fragment>
  )
}

export default Login