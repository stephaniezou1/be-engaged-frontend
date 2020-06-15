import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const SearchBar = (props) => {
    
    const handleSearch = (evt) => { 
        props.handleSearchTerm(evt.target.value)
        console.log("HERE", evt.target.value)
    } 

    return (
        <Form inline className="search-bar">
            <FormControl 
                type="text" 
                name="searchTerm"
                value={props.searchTerm} 
                tabindex="0" 
                class="prompt" 
                autocomplete="off" 
                onChange={handleSearch}
                placeholder="Find an election" 
                className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
        </Form>
    )
}


export default SearchBar
