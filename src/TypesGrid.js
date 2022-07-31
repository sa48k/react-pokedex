import React, { useState } from 'react'
import { Row, Container, Col, Card, CardBody, CardTitle, CardSubtitle, Badge, ButtonGroup, Button, ListGroup, ListGroupItem } from 'reactstrap'

function TypesGrid({ selectedTypes, setSelectedTypes }) {
    if (!selectedTypes) return null;
    const rows = [...Array(Math.ceil(selectedTypes.length / 10))]
    const typeRows = rows.map((row, idx) => selectedTypes.slice(idx * 10, idx * 10 + 10));
    // typeRows[1].push('Show All', 'Hide All') // hack
 
    const handleTypeClick = (e) => {
        let clickedType = selectedTypes.find(t => t.name === e.target.value) // clickedType is a reference, not a value
        clickedType.visible = !clickedType.visible // toggle
        setSelectedTypes([ ...selectedTypes ]) // update object in state
    }

    const content = typeRows.map((row, idx) => (
        <Row key={idx} className="pt-2">
            <ButtonGroup>
                {row.map(t => (
                    <Col className="px-1">
                        <Button onClick={(e) => handleTypeClick(e)} block outline active={t.visible} size="sm" className="px-2" color="success" value={t.name}>{t.name}</Button>
                    </Col>
                ))}
            </ButtonGroup>
        </Row>
    ))
 
    return (
        <>
            {content}
        </>
    )
}


export default TypesGrid