import React from 'react'
import Election from '../components/Election.jsx'
import {connect} from 'react-redux'

const ElectionsContainer = (props) => {
    console.log("HERE", props)
    let arrayOfElections = props.allElections.map((election) => {
        return <Election 
        key={election.id} 
        election={election} 
        followAnElection={props.followAnElection}/>
    })
    return(
        <ul>
            {arrayOfElections}
        </ul>
    )
}

let mapStateToProps = (globalState) => {
    return {
        allElections: globalState.electionInformation.elections
    }
}

export default connect(mapStateToProps)(ElectionsContainer);
