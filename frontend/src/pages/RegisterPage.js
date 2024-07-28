import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImagePicker from "../components/image-picker/ImagePicker";
import Navigation from "../components/navigation/Navigation";
import useRegisterUser from "../hooks/useRegisterUser";

const RegisterPage = () => {

    const {
        username, setUsername, email, setEmail, password, setPassword, successMessage,
        setSelectedImage,
        handleSubmit
    } = useRegisterUser();
    return (
        <div className="App">
            <Navigation
                isNavigationWhite={true}
            />
            <Form style={{padding: "35px"}} onSubmit={handleSubmit}>
                <h2>Create new account!</h2>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <Form.Check type="checkbox" label="Accepts Terms & Conditions" required={true}/>
                </Form.Group>

                <ImagePicker setSelectedImage={setSelectedImage} imageUrls={[
                    'https://cdn3d.iconscout.com/3d/premium/thumb/man-5692600-4743369.png',
                    'https://cdn3d.iconscout.com/3d/premium/preview/boy-avatar-6299533-5187865.png?f=webp&h=700',
                    'https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-fashion-boy-avatar-png-image_6514592.png'
                ]}/>

                {successMessage && <p style={{color: "darkgreen"}}>{successMessage}</p>}

                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>

        </div>
    );
}

export default RegisterPage;
