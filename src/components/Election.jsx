import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'
import {connect} from 'react-redux'

class Election extends Component {

    state = {
        clicked: false
    }
    
    handleClick = (evt) => {
        console.log("props token", this.props.token)
        evt.preventDefault()
        fetch(`http://localhost:3000/follows`, {
            method: "POST",
            headers: {
            "Authorization": this.props.token,
            "content-type": "application/json"
            },
            body: JSON.stringify({
                election_id: this.props.election.id,
            })
        })
        .then(response => response.json())
        .then((response) => {
            if (response.id) {
                this.props.addNewFollow(response)

            }
        })
    }

    render () {

        let {electionId, name, electionDay, ocdDivisionId} = this.props.election

        return (
            <div>
                <Card.Group centered>
                    <Card>
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>
                            <span className='date'> Election ID: {electionId} 
                            <br/> {ocdDivisionId}</span>
                        </Card.Meta>
                        <Card.Description>
                            Election Date: {electionDay}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui button' onClick={this.handleClick} onClick= {() => this.setState({clicked: !this.state.clicked})}>
                            <Button basic color='blue' >
                                { this.state.clicked ? "followed" : "follow"}
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
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
