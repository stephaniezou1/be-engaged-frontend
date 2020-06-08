import React from 'react';

const Election = (props) => {

  const handleClick = (evt) => {
    console.log(":(");
  }

  let {electionId, name, electionDay, ocdDivisionId} = props.election
  return(
    <li>
      <h3>Name: {name}</h3>
      <h4>Election Day: {electionDay}</h4>
      <h5>Election ID: {electionId}</h5>
      <h5>OCD Division ID: {ocdDivisionId}</h5>
      <button onClick={handleClick}>Follow</button>
    </li>
  )
}

export default Election;
