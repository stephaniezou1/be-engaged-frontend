import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'

const SearchBar = (props) => {
    
    const handleSearch = (evt) => { 
        props.handleSearchTerm(evt.target.value)
        console.log("HERE", evt.target.value)
    } 

    return (
        <div class="six wide column">
            <div fallbackElement="[object Object]" class="ui search">
            <div class="ui icon input">
                <input 
                    type="text" 
                    name="searchTerm"
                    value={props.searchTerm} 
                    tabindex="0" 
                    class="prompt" 
                    autocomplete="off" 
                    onChange={handleSearch}
                    placeholder="Find an election"
                />
                <i aria-hidden="true" class="search icon"></i>
            </div>
            <div class="results transition">
                <div class="message empty"><div class="header">No results found.</div></div>
            </div>
            </div>
        </div>
    )
}


export default SearchBar
