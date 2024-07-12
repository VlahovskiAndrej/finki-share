import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from "../components/navigation/Navigation";
import useSetUser from "../hooks/useSetUser";

function LoginPage() {

    const {username, setUsername, password, setPassword, isLoggedIn, handleSubmit} = useSetUser();

    return (
        <div className="App">
            <Navigation></Navigation>

            <Form style={{padding: "35px"}} onSubmit={handleSubmit}>
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
                    <Form.Check type="checkbox" label="Check me out"/>
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
