import React from 'react'
import Follow from '../components/Follow.jsx'
import {connect} from 'react-redux'
import CardGroup from 'react-bootstrap/CardGroup'


const FollowsContainer = (props) => {

    let arrayOfFollows = props.allFollows.map((follow) => {
        return <Follow 
            key = {follow.id}
            follow = {follow}
        />
    })
    return (
        <div className="following-container" >
            <h1 className="header">Following</h1>
            <p align="center"> Your selection of elections to follow </p>
                <CardGroup>
                    { arrayOfFollows}
                </CardGroup>        
        </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        allFollows: globalState.userInformation.follows
    }
}

export default connect(mapStateToProps)(FollowsContainer)
