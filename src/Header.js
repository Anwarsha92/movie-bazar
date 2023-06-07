import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div className='sticky-top'>

            <Navbar style={{ backgroundColor: 'black' }}>
                <Container className='text-center'>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://www.freeiconspng.com/uploads/movie-icon-7.png"
                            width="50"
                            className="d-inline-block "
                        />{' '}
                        <strong className='ms-2 fs-4 text-white'>MovieBazar</strong>
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header