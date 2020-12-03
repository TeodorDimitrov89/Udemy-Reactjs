import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <div style={{marginBottom: '20px'}}>
            <input 
                type="text"
                placeholder="Enter new Person Name"
                onChange={props.personNameChanged}/>
        </div>
        <div style={{marginBottom: '20px'}}>
            <input 
                type="number"
                placeholder="Enter new Person Age"
                onChange={props.personAgeChanged}/>
        </div>
        <button 
            onClick={props.personAdded}
            disabled={!props.disabled}
            >Add Person
        </button>
    </div>
);

export default addPerson;