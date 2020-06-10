import React from 'react';
import { Button, Card } from 'semantic-ui-react'
import {connect} from 'react-redux'

const Election = (props) => {
    
    const handleClick = (evt) => {
        console.log("follow clicked")
        evt.preventDefault()
        fetch(`http://localhost:3000/follows`, {
            method: "POST",
            headers: {
            "Authorization": props.token,
            "content-type": "application/json"
            },
            body: JSON.stringify({
                election_id: id,
                user_id: props.user_id
            })
        })
        .then(response => response.json())
        .then((response) => {
            if (response.id) {
                props.addNewFollow(response)
            }
        })
    }

    let {id, electionId, name, electionDay, ocdDivisionId} = props.election

    return (
        <div>
            <Card.Group centered>
                <Card>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className='date'> Election ID: {electionId} 
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

let addNewFollow = (resp) => {
    return {
      type: "ADD_NEW_FOLLOW",
      payload: resp
    }
}

let mapDispatchToProps = {
    addNewFollow: addNewFollow
}

let mapStateToProps = (globalState) => {
    return {
        token: globalState.userInformation.token,
        user_id: globalState.userInformation.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Election);
