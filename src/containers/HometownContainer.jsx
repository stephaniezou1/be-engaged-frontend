import React from 'react'
import {connect} from 'react-redux'

const HometownContainer = (props) => {

    let {name, city, state, hometown} = props.userInformation

    return (
        <div className="hometown-container">
            <h5>Hi, {name} <br/> <br/> You are currently in {city}, {state}</h5> <br/>
            <h5>Polling locations near you:</h5>
            <h6> {hometown && JSON.parse(hometown.pollingLocations)["locationName"] } </h6>
            <h6> {hometown && JSON.parse(hometown.pollingLocations)["line1"] } </h6>
            <h6> {hometown && JSON.parse(hometown.pollingLocations)["city"] }, 
                    {hometown && JSON.parse(hometown.pollingLocations)["state"] }  
                    {hometown && JSON.parse(hometown.pollingLocations)["zip"] } </h6>
        </div>
    )

}

let mapStateToProps = (globalState) => {
    return {
    userInformation: globalState.userInformation    
    }
}

export default connect(mapStateToProps)(HometownContainer)
