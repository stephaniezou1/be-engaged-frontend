import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


export class AboutContainer extends Component {
    render() {
        return (
            <div className="about-container">
                <h1 className="header"> About </h1>
                <CardGroup className="news-card-group">
                <Card className="news-card">
                    <Card.Img variant="top" src="https://media.npr.org/assets/img/2020/05/29/mail-voting-photo_wide-5d825b3d169d8959e66b58dc484c05c0fcc899f4-s800-c85.jpg" />
                    <Card.Body className="news-card-body">
                    <Card.Title className="news-card-title">The Truth About Vote by Mail</Card.Title>
                    <Card.Text>
                        Sadly, partisan bickering has cast a shadow of doubt over the legitimacy of voting by mail as an alternative to voting in person. For this reason, I want to reassure you that voting by mail is a secure and established part of our American electoral system that has long been supported by Republicans and Democrats alike.                    
                    </Card.Text>
                    <Card.Link href="https://www.vote.org/blog/vote-by-mail/">Go to blog post</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="news-card">
                    <Card.Img variant="top" src="https://res.cloudinary.com/crooked-media/image/upload/f_auto,q_auto/c_scale,w_800/v1580352456/save_america_hero_v2_t8t2vx.png" />
                    <Card.Body className="news-card-body">
                    <Card.Title className="news-card-title">Resource for more info: Vote Save America</Card.Title>
                    <Card.Text>
                    Even if you think you’re registered, double-check! Sometimes names get removed by mistake, or by people who are afraid of what happens if you vote.
                    </Card.Text>
                    <Card.Link href="https://votesaveamerica.com/">Go to website</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="news-card">
                    <Card.Img variant="top" src="https://res.cloudinary.com/crooked-media/image/upload/f_auto,q_auto/c_scale,w_800/v1590445028/vbm-photo-2_kx3x1i.png" />
                    <Card.Body className="news-card-body">
                    <Card.Title className="news-card-title">Register to vote with Vote.org</Card.Title>
                    <Card.Text>
                    You have the right to vote. If anyone tries to stop you, call the Election Protection Hotline at 1-866-687-8683. We also wrote a handy guide that outlines your voting rights.
                    </Card.Text>
                    <Card.Link href="https://www.npr.org/2020/06/04/864899178/why-is-voting-by-mail-suddenly-controversial-heres-what-you-need-to-know">Go to full article</Card.Link>
                    </Card.Body>
                </Card>
                </CardGroup>
            </div>
        )
    }
}

export default AboutContainer
