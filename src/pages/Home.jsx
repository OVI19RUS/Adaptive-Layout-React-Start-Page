import React, { useState } from 'react';
import { Link } from "react-router-dom";
import validator from 'validator'

function Home() {
    const [isClicked, setIsClicked] = useState(false);
    const [emailError, setEmailError] = useState('')

    function handleClick() {
        setIsClicked(!isClicked)
    }

    function validateEmail(e) {
        let email = e.target.value;
        if (validator.isEmail(email)) {
            setEmailError('Valid Email')
        } else {
            setEmailError('Enter valid Email!')
        }
    }

    return (
        <div className='content'>
            <div className='content--left'>
                <div id='circle--small-blue'></div>
                <div id='circle--big-purple'></div>
                <div id='circle--big-blue'></div>
                <div id='circle--small-purple'></div>
            </div>
            <div className='content--right'>
                <div className='content--label'>
                    <h1>Lorem ipsum</h1>
                    <h1>Lorem ipsum lorem</h1>
                    <h1>Lorem ipsum lorem ipsum</h1>
                </div>
                <div className='content--input'>
                    <label for="email--input" className='label--email'>Email</label>
                    <p><input type='email' id='email--input' onChange={(e) => validateEmail(e)}>
                    </input>
                        <span className={`email--error--detection ${emailError === 'Valid Email' ? 'email--accept' : ''}`}>{emailError}</span>
                    </p>
                    <p>
                        <label for='content--checkbox' className='label--checkbox'>
                            I agree with&nbsp;
                            <a href="/privacy">Privacy Policy</a>
                            <input type='checkbox' id='content--checkbox' onClick={handleClick}></input>
                            <span class="checkmark"></span>
                        </label></p>
                    <Link to='/subscribe'>
                        <button className={`content--btn ${isClicked === true ? 'active' : ''}`}></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
