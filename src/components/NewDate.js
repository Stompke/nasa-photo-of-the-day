import React, { useState } from 'react';

const NewDate = (props) => {

const [day, setDay] = useState('');
const [month, setMonth] = useState('');
const [year, setYear] = useState('');

// let dayInput = document.querySelector('#day');
// let dayInputText = dayInput.textContent;
// let myDay = '2';

// useEffect(() => {
//     console.log('changed day')
// }, [day])

    return (
        <div>
             <input placeholder='day' onKeyUp={() => setDay(document.querySelector('#dayInput').value)} id="dayInput" ></input>
             <input placeholder='month' onKeyUp={() => setMonth(document.querySelector('#monthInput').value)} id="monthInput" ></input>
             <input placeholder='Year' onKeyUp={() => setYear(document.querySelector('#yearInput').value)} id="yearInput" ></input>

        
        <button onClick={() => {
            props.setNewDate('&date=' + year +'-' + month +'-' + day)
            
            }}>
            Get New Date
        </button>

        </div>
    )
}

export default NewDate;