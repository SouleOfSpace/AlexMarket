import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    console.log('safasf')

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show = {show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mb-2"}>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className={"mb-2"}>
                        <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        className={"mb-2"}
                        placeholder={"Enter name device"}
                    />
                    <Form.Control
                        className={"mb-2"}
                        placeholder={"Enter price device"}
                        type={"number"}
                    />
                    <Form.Control
                        placeholder={"Enter price device"}
                        type={"file"}
                    />
                    <hr/>
                    <Button
                        className={"mb-2"}
                        variant={"outline-secondary"}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {
                        info.map( i =>
                            <Row className={"d-flex me-2"} key={i.number}>
                                <Col md={4} className={"mb-2"}>
                                    <Form.Control
                                        placeholder={'Enter property name'}
                                    />
                                </Col>

                                <Col md={4} className={"mb-2"}>
                                    <Form.Control
                                        placeholder={'Enter property description'}
                                    />
                                </Col>

                                <Col md={4} className={"mb-2"}>
                                    <Button
                                        variant={"outline-danger"}
                                        onClick={() => removeInfo(i.number)}
                                    >
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;