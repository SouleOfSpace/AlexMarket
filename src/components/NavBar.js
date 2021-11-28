import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, ButtonGroup, Container, Nav, Navbar} from "react-bootstrap";
import {SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav.Link href={SHOP_ROUTE} style={{color: "white"}}>My Shop</Nav.Link>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button
                                variant="outline-light"
                                onClick={() => history.push(LOGIN_ROUTE)}
                            >
                                Logout
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button
                                variant="outline-light"
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Admin board
                            </Button>
                        </ButtonGroup>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Login</Button>
                        </ButtonGroup>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;