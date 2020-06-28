import React, { Component } from 'react';
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { addNewFollow } from '../actions/users.js'

const Election = (props) => {
    
    let handleClick = (evt) => {
        console.log("props token", props.token)
        evt.preventDefault()
        fetch(`https://be-engaged-backend.herokuapp.com/follows`, {
            method: "POST",
            headers: {
            "Authorization": props.token,
            "content-type": "application/json"
            },
            body: JSON.stringify({
                election_id: props.election.id,
            })
        })
        .then(response => response.json())
        .then((response) => {
            if (response.id) {
                props.addNewFollow(response)

            }
        })
    }

    let followButton = () => {
        if (props.followedElections.includes(props.election.id)) {
            return "followed"
        } else {
            return "follow"
        }
    }

    console.log(props.election.id, "election ID")
        
    let {electionId, name, electionDay, ocdDivisionId} = props.election

    return (
        <div>
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Title>{electionDay}</Card.Title>
                <Card.Text>
                        Election ID: {electionId} 
                        <br/> {ocdDivisionId}
                </Card.Text>
                    <div className='follow-button' onClick={handleClick}>
                        <Button basic color='blue'> {followButton()}</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}


let mapDispatchToProps = {
    addNewFollow: addNewFollow
}

let mapStateToProps = (globalState) => {
    let followedElections = globalState.userInformation.follows.map((follow) => {
        return follow.election_id
    })
    return {
        token: globalState.userInformation.token,
        user_id: globalState.userInformation.id,
        followedElections: followedElections
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Election);
