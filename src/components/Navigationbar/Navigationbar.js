import React from 'react';
import { Navbar,Container ,Nav, Row, Col } from 'react-bootstrap';
import './Navigationbar.css';

const Navigationbar=()=>{
    return(
        <Navbar className="navbar" fixed="top" variant="dark">
            <Nav className="navbar-font">
            <Container>
                <Row>
                    <Col><Nav.Link href="#home" >Home</Nav.Link></Col>
                    <Col><Nav.Link href="#About">About</Nav.Link></Col>
                    <Col><Nav.Link href="#Projects">Projects</Nav.Link></Col>
                    <Col><Nav.Link href="#Contact">Contact</Nav.Link></Col>
                </Row>
            </Container>    
            </Nav>
        </Navbar>
    )
}

export default Navigationbar