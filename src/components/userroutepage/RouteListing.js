import React from 'react';
import {Row, Col, Button, ButtonGroup } from 'reactstrap';

export default function routeListing ({id, name, polyline, userId, selectRoute, dropRoute }) {
    return (
        <Row>
            <Col xs="4">
                {name}
            </Col>
            <Col xs="8">
                <ButtonGroup>
                    <Button outline color="success" size="sm" onClick={() => selectRoute(name, polyline)}>Air Data</Button>
                    <Button outline color="danger" size="sm" onClick={() => dropRoute(userId, id)} >Delete Loc</Button>
                </ButtonGroup>
            </Col> 
        </Row>
    )
};