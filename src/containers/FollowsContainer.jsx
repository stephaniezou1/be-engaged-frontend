import React, { Component } from 'react'
import Follow from '../components/Follow.jsx'
import {connect} from 'react-redux'

const FollowsContainer = (props) => {

    let arrayOfFollows = props.allFollows.map((follow) => {
        return <Follow 
            key = {follow.id}
            follow = {follow}
        />
    })
    return (
        <div>
            {arrayOfFollows}
        </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        allFollows: globalState.userInformation.follows
    }
}

export default connect(mapStateToProps)(FollowsContainer)
