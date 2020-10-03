import React from 'react';
import './App.css';
import Game from './components/game/Game';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

function App() {
    return (
        <Container>
            <Row>
                <Col xs="2"/>
                <Col>
                    <h3>Gomoku Online</h3>
                    <Game/>
                </Col>
                <Col xs="2"/>
            </Row>
        </Container>
    );
}

export default App;
