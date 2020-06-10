import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'

const HometownContainer = (props) => {

    let {name, city, state} = props.userInformation

    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='home' circular />
                <Header.Content>Hi, {name} <br/> <br/> You are currently in {city}, {state} </Header.Content>
            </Header>
        </div>
    )

}

let mapStateToProps = (globalState) => {
    return {
    userInformation: globalState.userInformation
    }
}

export default connect(mapStateToProps)(HometownContainer)
