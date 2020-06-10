import React from 'react'
import {connect} from 'react-redux'
import { Button, Card } from 'semantic-ui-react'


const Follow = (props) => {

    console.log("PROPS", props)

    let { name, electionId, electionDay, ocdDivisionId } = props.followedElection

    let handleDelete = () => {
        console.log("unfollow clicked")
        let idToDelete = props.follow.id
        // debugger;
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
                        <div className='ui button small' onClick={handleDelete} >
                            <Button basic color='red' >
                                Unfollow
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
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
