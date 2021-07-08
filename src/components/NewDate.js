import React, { useState } from 'react';
import { DateInput, ButtonInput } from './NewDateStyles';

const NewDate = (props) => {

const [day, setDay] = useState('5');
const [month, setMonth] = useState('7');
const [year, setYear] = useState('2018');

// let dayInput = document.querySelector('#day');
// let dayInputText = dayInput.textContent;
// let myDay = '2';

// useEffect(() => {
//     console.log('changed day')
// }, [day])

const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      props.setNewDate('&date=' + year +'-' + month +'-' + day)

    }
  }


    return (
        <div>
             <DateInput onKeyPress={handleKeyPress} placeholder='day' onKeyUp={() => setDay(document.querySelector('#dayInput').value)} id="dayInput" ></DateInput>
             <DateInput onKeyPress={handleKeyPress} placeholder='month' onKeyUp={() => setMonth(document.querySelector('#monthInput').value)} id="monthInput" ></DateInput>
             <DateInput onKeyPress={handleKeyPress} placeholder='Year' onKeyUp={() => setYear(document.querySelector('#yearInput').value)} id="yearInput" ></DateInput>




        
        <ButtonInput onClick={() => {
            props.setNewDate('&date=' + year +'-' + month +'-' + day)
            
            }}>
            Get New Date
        </ButtonInput>

        </div>
    )
}

export default NewDate;