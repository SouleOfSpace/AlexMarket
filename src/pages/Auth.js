import React, {useState} from "react";
import {Button, Card, Container, Form, NavLink} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (isLogin) {
            const response = await login()
            console.log(response)
        } else {
            // console.log(`Email: ${email}\nPassword${password}`)
            const response = await registration(email, password)
            console.log(response)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight -54}}>

            <Card style={{width: 600}} className="p-5">

                <h2 className='m-auto'>
                    {isLogin ? "Authorization": "Registration"}
                </h2>

                <Form className='d-flex flex-column'>
                    <Form.Control
                        className="mt-3"
                        placeholder="Input your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Input your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form>
                <div className={"d-flex justify-content-between mt-3"}>
                    {isLogin ?
                        <div className={"d-flex justify-content-between"}>
                            Aren't you register?
                            <NavLink style={{padding: 0, paddingLeft: 10}}
                                     href={REGISTRATION_ROUTE}>
                                Register please.
                            </NavLink>
                        </div>
                        :
                        <div className={"d-flex justify-content-between"}>
                            Are you register?
                            <NavLink style={{padding: 0, paddingLeft: 10}}
                                     href={LOGIN_ROUTE}>
                                Login please.
                            </NavLink>
                        </div>
                    }
                    <Button
                        style={{width: 100}}
                        variant={"outline-success"}
                        onClick={click}
                    >
                        {isLogin ? "Login" : "Register"}
                    </Button>
                </div>
            </Card>
        </Container>
    )
};

export default Auth