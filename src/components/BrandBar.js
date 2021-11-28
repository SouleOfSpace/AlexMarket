import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row xs={1} md={4} className="g-4">
            {device.brands.map(brand =>
            <Col>
            <Card
                style={{cursor: "pointer"}}
                key={brand.id}
                xs={1}
                className={"align-items-center"}
                onClick={() => {device.setSelectedBrand(brand)}}
                border={brand.id === device.selectedBrand.id ? "primary" : "info"}
            >
                {brand.name}
            </Card></Col>)}
        </Row>
    );
});

export default BrandBar;
