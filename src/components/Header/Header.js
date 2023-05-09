import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand className='me-5' href="">Creative Software</Navbar.Brand>
                <Nav className="me-auto nav-container">
                    <Link className=' me-5 link-container' to='/products'>Products</Link>
                    <Link className=' me-5 link-container' to='/cart'>cart</Link>
                    {
                        user?.email ?
                            <button onClick={logOut} className=' me-5 log-out'>Log Out</button>
                            :
                            <>
                                <Link className=' me-5 link-container' to='/login'>Log In</Link>
                                <Link className=' me-5 link-container' to='/register'>Register</Link>
                            </>
                    }

                </Nav>
                <p className='text-warning'>{user?.email}</p>
            </Container>
        </Navbar>
    );
};

export default Header;