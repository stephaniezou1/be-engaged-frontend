import React from 'react';
import Election from '../components/Election.jsx'
import {connect} from 'react-redux'
import SearchBar from '../components/SearchBar.jsx'
import CardGroup from 'react-bootstrap/CardGroup'

const ElectionsContainer = (props) => {
    
    let arrayOfElections = props.elections.map((election) => {
        return <Election 
        key={election.id} 
        election={election} 
        />
    })

    return(
        <div className="explore-container" >
            <h1 className="header">Explore</h1>
            <p align="center"> Stay up to date with elections across the country </p>
            <SearchBar 
                handleSearchTerm={props.handleSearchTerm}
                searchTerm={props.searchTerm}
            />
            <br/>
            
            <CardGroup>
                {arrayOfElections}
            </CardGroup>
        </div>
    )
    
}

let mapStateToProps = (globalState) => {
    return {
        allElections: globalState.electionInformation.elections
    }
}

export default connect(mapStateToProps)(ElectionsContainer);
