import React from "react";
import scoreStyle from './Score.module.css';
import black from '../../assets/icon/black.svg';
import white from '../../assets/icon/white.svg';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

export default function Score(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h3>Score</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>⚫: {props.blackScore}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>⚪: {props.whiteScore}</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
