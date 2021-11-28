import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/star.png";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()

    return (
        <Col xs={1} md={3} className="j-4"
            onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}
                className={"m-auto mt-3"}>
                <Image width={150} height={150} src={device.img}/>
                <div className={"d-flex justify-content-between align-items-center mt-2 text-black-50"}>
                    <div>Samsung..</div>

                    <div className={"d-flex align-items-center"}>
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}
                        className={"ms-1"}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;