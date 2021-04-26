import React from 'react';

const Login = (props) => {

    const {email,
            setEmail,
            password,
            setPassword,
            userLogin,
            userSignup,
            hasAccount,
            sethasAccount,
            emailError,
            passwordError} = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>E-mail</label>
                <input type="text" autoFocus required value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="buttoncontainer">
                    {hasAccount?(
                        <>
                            <button onClick={userLogin}>Sign In</button>
                            <p>Dont have an Account? <span onClick={()=>sethasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ):(
                        <>
                            <button onClick={userSignup}>Sign Up</button>
                            <p>Have an account? <span onClick={()=>sethasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Login;