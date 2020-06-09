import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

const Election = (props) => {
    
    const handleClick = (evt) => {
        evt.preventDefault()
        props.followAnElection(props.election)
    }

    let {electionId, name, electionDay, ocdDivisionId} = props.election
    return (
        <div>
            <Card.Group centered>
                <Card>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Election ID: {electionId} 
                        <br/> ocdDivisionId: {ocdDivisionId}</span>
                    </Card.Meta>
                    <Card.Description>
                        Election Date: {electionDay}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui button' onClick={handleClick}>
                        <Button basic color='blue' >
                            Follow
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

export default Election;
