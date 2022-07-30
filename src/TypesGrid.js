import React, { useState } from 'react'
import { Row, Container, Col, Card, CardBody, CardTitle, CardSubtitle, Badge, ButtonGroup, Button, ListGroup, ListGroupItem } from 'reactstrap'

function TypesGrid({ typechart }) {
    // need to store values for which types are enabled/disabled
    // const [selectedTypes, setSelectedTypes] = useState([{}]);
    const types = typechart.map(t => t.name)
    const rows = [...Array(Math.ceil(types.length / 6))]
    const typeRows = rows.map((row, idx) => types.slice(idx * 10, idx * 10 + 10));
    typeRows[1].push('Show All', 'Hide All') // hack
    console.log(typeRows)

    const content = typeRows.map((row, idx) => (
        <Row key={idx} className="pt-2">
            <ButtonGroup>
                {row.map(t => (
                    <Col className="px-1">
                        <Button block size="sm" className="px-2" color="secondary">{t}</Button>
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