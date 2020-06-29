import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Container, Row} from 'react-bootstrap'

export class AboutContainer extends Component {
    render() {
        return (
            <div className="about-container">
                <h1 className="header"> About </h1>
                <CardDeck>
                <Container>
                <Row xs="2">
                <Card className="news-card">
                    <Card.Body>
                        <Card.Title>The Truth About Vote by Mail</Card.Title>
                        <Card.Text>
                            Sadly, partisan bickering has cast a shadow of doubt over the legitimacy of voting by mail as an alternative to voting in person. For this reason, I want to reassure you that voting by mail is a secure and established part of our American electoral system that has long been supported by Republicans and Democrats alike.                    
                        </Card.Text>
                        <Card.Link href="https://www.vote.org/blog/vote-by-mail/">Go to blog post</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="news-card">
                    <Card.Body>
                        <Card.Title>Resource for more info: Vote Save America</Card.Title>
                        <Card.Text>
                        Even if you think you’re registered, double-check! Sometimes names get removed by mistake, or by people who are afraid of what happens if you vote.
                        </Card.Text>
                        <Card.Link href="https://votesaveamerica.com/">Go to website</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="news-card">
                        <Card.Body>
                        <Card.Title>Register to vote with Vote.org</Card.Title>
                        <Card.Text>
                        You have the right to vote. If anyone tries to stop you, call the Election Protection Hotline at 1-866-687-8683. We also wrote a handy guide that outlines your voting rights.
                        </Card.Text>
                        <Card.Link href="https://www.npr.org/2020/06/04/864899178/why-is-voting-by-mail-suddenly-controversial-heres-what-you-need-to-know">Go to full article</Card.Link>
                    </Card.Body>
                </Card>
                </Row>
            </Container>
                </CardDeck>
            </div>
        )
    }
}

export default AboutContainer
