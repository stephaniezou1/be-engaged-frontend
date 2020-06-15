import React from 'react'
import {connect} from 'react-redux'

const HometownContainer = (props) => {

    let {name, city, state} = props.userInformation

    return (
        <div className="hometown-container">
            <h5>Hi, {name} <br/> <br/> You are currently in {city}, {state}</h5>
        </div>
    )

}

let mapStateToProps = (globalState) => {
    return {
    userInformation: globalState.userInformation
    }
}

export default connect(mapStateToProps)(HometownContainer)
