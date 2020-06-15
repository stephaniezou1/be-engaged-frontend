import React from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Follow = (props) => {

    console.log("FOLLOW PROPS", props)

    let { name, electionId, electionDay, ocdDivisionId } = props.followedElection

    let handleDelete = () => {
        console.log("unfollow clicked")
        let idToDelete = props.follow.id
        fetch(`http://localhost:3000/follows/${idToDelete}`, {
            method: "DELETE",
            headers: {
                "Authorization": props.token
            }
        })
        .then(response => response.json())
        .then((response) => {
           props.delete(response) 
        })
    }
    
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
                        <div className='ui button small' onClick={handleDelete} >
                            <Button basic color='red' >
                                Unfollow
                            </Button>
                        </div>
                    </Card.Body>
            </Card>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        delete: follow => dispatch({
            type: 'UNFOLLOW',
            payload: follow
        })
    }
}

let mapStateToProps = (globalState, ownProps) => {
    console.log(ownProps, "OWN PROPS")
    let {election_id} = ownProps.follow
    let followedElection = globalState.electionInformation.elections.find((election) => {
       return election.id === election_id
    })
    return {
        followedElection: followedElection,
        token: globalState.userInformation.token
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Follow)
