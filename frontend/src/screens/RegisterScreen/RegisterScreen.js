import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import ErrorMessage from '../../components/ErrorMessage'
import MainScreen from '../../components/MainScreen'

function RegisterScreen ({history}) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")
   const [password, setPassword] = useState("")
   const [confirmpassword, setConfirmPassword] = useState("")
//    const [message, setMessage] = useState(null)
//    const [picMessage, setPicMessage] = useState(null)
    const submitHandler=()=>{
        console.log('first');
    }
  return (
    <MainScreen title="REGISTER">
        <div className='loginContainer'>
                {/* {error && <ErrorMessage variant='danger'>{error} </ErrorMessage>}
                {loading && <Loading />} */}

                <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder='Enter name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder='Enter email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmpassword}
                            placeholder='Confirm Password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    {/* {picMessage && (
                        <ErrorMessage variant='danger'>{picMessage}</ErrorMessage>
                    )} */}
                    <Form.Group controlId='pic'>
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.File
                        id = 'custom-file'
                            type="image/png"
                            // onChange={(e) => setPassword(e.target.value)}
                            label = 'Upload Profile Picture'
                            custom
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">Register</Button>

                </Form>
                <Row className="py-3">
                    <Col>
                        Have an Account ? <Link to='/login'>Login Here</Link>
                    </Col>
                </Row>

           

            </div>
    </MainScreen>
    
  )
}

export default RegisterScreen