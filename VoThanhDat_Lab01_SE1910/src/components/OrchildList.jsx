import { OrchidsData } from "../data/data.js";
import { OrchidCard } from "./OrchidCard.jsx";
import { Col, Container, Row } from "react-bootstrap";

export function OrchildList() {
    return (
        <Container id="orchids" className="py-4">
            <h2 className="mb-4">Orchid Collection</h2>
            <Row className="g-4">
                {OrchidsData.map((orchid) => (
                    <Col key={orchid.id} xs={12} sm={6} lg={4}>
                        <OrchidCard orchid={orchid} />
                    </Col>
                ))}
            </Row>
        </Container>
    );

}
