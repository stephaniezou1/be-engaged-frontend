import React from 'react'
import Follow from '../components/Follow.jsx'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


const FollowsContainer = (props) => {

    let arrayOfFollows = props.allFollows.map((follow) => {
        return <Follow 
            key = {follow.id}
            follow = {follow}
        />
    })
    return (
        <div>
            <Card>
            <Card.Header as="h5">Following</Card.Header>
                <CardGroup>
                    { arrayOfFollows}
                </CardGroup>        
            </Card>
        </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        allFollows: globalState.userInformation.follows
    }
}

export default connect(mapStateToProps)(FollowsContainer)
