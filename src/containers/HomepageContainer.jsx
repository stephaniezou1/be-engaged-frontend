import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

class HomepageContainer extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://code.gabriellealexa.com/mutual_aid_3.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Be Engaged</h3>
                    <p>Explore and track local and national elections across the US</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://code.gabriellealexa.com/mutual_aid_3.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Stay Engaged</h3>
                    <p>Sign up for text notifications and never miss a deadline to vote</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://code.gabriellealexa.com/mutual_aid_3.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Always Engaged</h3>
                    <p>Helping you and your neighbors find convenient polling locations</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default HomepageContainer
