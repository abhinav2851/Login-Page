import React from 'react'
import "./Login.css";
import Google from "../Assets/Google.png";
import Facebook from "../Assets/Facebook.png";
import Twitter from "../Assets/Twitter.png";

function Login() {
 const Clickhandler =(event)=>{
    event.preventDefault();
    console.log("form Submit");
 }
  return (
    <div className='main'>
        <p className='p'>SOME RANDOM TEXT,SOME RANDOM</p>
            <p className='p1'>TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
        <div className='Login'>
                <span >Login</span>
                <span>Signup</span>
                <hr id='line'></hr>
            </div>
        <div className='container'>
            <form onSubmit={Clickhandler}>
                <input id='email' type="email" placeholder='Email Address'  size="30" required></input>
                <input id='password' type="password" placeholder='Password'  minlength ="8" required></input>
                <button className='btn' type='submit'>LOGIN</button>
            </form>
            <a  href="#" className='pt'>Forgot Password?</a>
            <p className='wth'>or login with</p>
            <div className='icon'>
                <a href='https://www.google.com/'><img src={Google} className="Ggl" alt='Google'></img></a>
                <a href='https://www.facebook.com/'><img src={Facebook} className="fb" alt='Google'></img></a>
                <a href='https://twitter.com/'><img src={Twitter} className="tweet" alt='Google'></img></a>
            </div>
            <div>
            <p href ="#"className='footer'>Don't have an account?<a href ="#" className='new'> Create new one!</a></p>
            <p  className='subfooter'>By signing up,you are agree with our <a href='#' className='term'>Terms & Conditions</a></p>
            </div>
        </div>
    </div>
  )
}

export default Login