import React, { Component } from 'react';
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'


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
                <Card border="warning" style={{ width: '18rem' }}>
                    <Card.Header>{name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{electionDay}</Card.Title>
                    <Card.Text>
                            Election ID: {electionId} 
                            <br/> {ocdDivisionId}
                    </Card.Text>
                        <div className='ui button' onClick={this.handleClick} onClick= {() => this.setState({clicked: !this.state.clicked})}>
                            <Button basic color='blue' >
                                { this.state.clicked ? "followed" : "follow"}
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
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
