import React, { Component } from 'react'
import Follow from '../components/Follow.jsx'

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
        allFollows: globalState.followInformation.follows
    }
}

export default FollowsContainer
