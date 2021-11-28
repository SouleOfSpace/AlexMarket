import React from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import yellowStar from "../assets/yellow_star.png"

const   DevicePage = () => {
    const device = {id: 1, name: 'Mi 10t Pro', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'}
    const description = [
        {id: 1, title: "Оперативная память", description: "8 гб"},
        {id: 2, title: "Камера", description: "8 MP"},
        {id: 3, title: "Процессор", description: "Intel Core I7"},
        {id: 4, title: "Кличество ядер", description: "8 гб"},
        {id: 5, title: "Аккумулятор", description: "13000"}
    ]

    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4} className={"d-flex align-items-center justify-content-center"}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={"d-flex flex-column align-items-center"}>
                        <h2 className={"text-center"}>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{background: `url(${yellowStar}) no-repeat center center`,
                                width:240, height:240, backgroundSize: "cover", fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4} className={"d-flex align-item-center justify-content-center text-center"}>
                    <Card className={"d-flex flex-column align-content-center justify-content-center text-center"}
                          style={{width: 300, height: 300, fontSize:32, border: "5px solid lightgray"}}
                    >
                        <h3>От {device.price} рублей</h3>
                        <Button variant={"outline-info"}>Add in basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"}>
                <h1 className={"mt-2 mb-2 p-0"}>Характеристики:</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent", padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
};

export default DevicePage;