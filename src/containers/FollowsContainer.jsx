import React from 'react'
import Follow from '../components/Follow.jsx'
import {connect} from 'react-redux'
import { Header, Icon } from 'semantic-ui-react'


const FollowsContainer = (props) => {

    let arrayOfFollows = props.allFollows.map((follow) => {
        return <Follow 
            key = {follow.id}
            follow = {follow}
        />
    })
    return (
        <div>
            <Header as='h2' icon textAlign="center">
            <Icon name='plug' circular />
            <Header.Content>Following</Header.Content>
            </Header>
            <div class="ui four column grid container">
                { arrayOfFollows}
            </div>
        </div>
    )
}

// remove that specific follow from array of follows

let mapStateToProps = (globalState) => {
    return {
        allFollows: globalState.userInformation.follows
    }
}

export default connect(mapStateToProps)(FollowsContainer)
