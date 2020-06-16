import React from 'react'
import {connect} from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const HometownContainer = (props) => {

    let {name, city, state, hometown} = props.userInformation

    return (
        <div className="hometown-container">
            <p align="center"> Find your nearest polling stations and track local elections </p>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.wabe.org/wp-content/uploads/2020/01/StaceyAbrams.01220-e1579870694105.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2>Hi, {name}</h2>
                    <h5>You are currently in {city}, {state}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.snopes.com/uploads/2019/07/ocasio-cortez-omar-getty.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2>Hi, {name}</h2>
                    <h5>You are currently in {city}, {state}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Accordion defaultActiveKey="0" className="accordian-container">
                <Card className="polling-card">
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me to see polling locations near you
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body> 
                        <h6> {hometown && JSON.parse(hometown.pollingLocations)["locationName"] } </h6>
                        <h6> {hometown && JSON.parse(hometown.pollingLocations)["line1"] } </h6>
                        <h6> {hometown && JSON.parse(hometown.pollingLocations)["city"] }, 
                            {hometown && JSON.parse(hometown.pollingLocations)["state"] }  
                            {hometown && JSON.parse(hometown.pollingLocations)["zip"] } 
                        </h6> 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="polling-card">
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
           
        </div>
    )

}

let mapStateToProps = (globalState) => {
    return {
    userInformation: globalState.userInformation    
    }
}

export default connect(mapStateToProps)(HometownContainer)
