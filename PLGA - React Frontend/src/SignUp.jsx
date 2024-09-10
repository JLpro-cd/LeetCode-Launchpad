import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from './utils';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            credentials: 'include',
            body: JSON.stringify({ username, password}),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Invalid credentials');
                }
            })
            .then((data) => {
                if (data.message === 'User successfully registered!') {
                    setSuccessMessage('Registration successful! Happy studying!');
                    navigate('/');
                } else {
                    setErrorMessage(data.message);
                }
            })
            .catch((error) => console.error('Error registering user:', error));
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type = "text"
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type = "password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p style={{ color: 'red'}}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green'}}>{successMessage}</p>}
                <button type = "submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;