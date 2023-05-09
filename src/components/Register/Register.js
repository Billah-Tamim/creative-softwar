import React, { useContext } from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();



    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/products');
        })
        .catch(error=>{
            console.error(error);
        });
    }

    return (
        <Card className='m-5 p-3'>
            <h3 className='mx-auto text-info'>Register For A New Account</h3>
            <Form onSubmit={handleRegister}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> <br />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default Register;