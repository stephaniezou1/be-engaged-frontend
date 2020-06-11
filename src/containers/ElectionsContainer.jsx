import React from 'react';
import Election from '../components/Election.jsx'
import {connect} from 'react-redux'
import { Header , Icon} from 'semantic-ui-react'
import SearchBar from '../components/SearchBar.jsx'


const ElectionsContainer = (props) => {
    
    let arrayOfElections = props.elections.map((election) => {
        return <Election 
        key={election.id} 
        election={election} 
        />
    })

    return(
        <div>
        <Header as='h2' icon textAlign="center">
            <Icon name='world' circular />
            <Header.Content> Explore </Header.Content>
        </Header>
        <SearchBar 
            handleSearchTerm={props.handleSearchTerm}
            searchTerm={props.searchTerm}
        />
            <div class="ui four column grid container">
                {arrayOfElections}
            </div>
        </div>
    )
    
}

let mapStateToProps = (globalState) => {
    return {
        allElections: globalState.electionInformation.elections
    }
}

export default connect(mapStateToProps)(ElectionsContainer);
