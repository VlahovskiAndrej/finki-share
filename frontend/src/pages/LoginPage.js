import {useEffect, useState} from 'react';
import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Home from "../components/Home";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            console.log(response.text())
            if (response.ok){
                console.log('Login successful');
                setIsLoggedIn(true)
            }
             else
                console.error('Login failed');

        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="App">
            <NavigationBar></NavigationBar>

            <Form style={{padding:"35px"}} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div>
                {isLoggedIn ? (
                    <p>logged in</p>
                ) : (
                    <div></div>
                )}
            </div>

        </div>
    );
}

export default LoginPage;
