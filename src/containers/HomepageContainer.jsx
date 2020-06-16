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
                    src="https://static.politico.com/30/e2/88407939458ca5a3f6dcad55761f/191019-aocsanders.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Be Engaged</h1>
                    <h4>Explore and track local and national elections across the US</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.pewresearch.org/wp-content/uploads/2020/06/FT_20.06.09_BlackLivesMatter_feature.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2>Stay Engaged</h2>
                    <h4>Sign up for text notifications and never miss a deadline to vote</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.thoughtco.com/thmb/UtYV0hA5Wxeg2Lisy5fTY2PzlVE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/votetoday-56cae6c45f9b5879cc51f103.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h2>Always Engaged</h2>
                    <h4>Helping you and your neighbors find convenient polling locations</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default HomepageContainer
