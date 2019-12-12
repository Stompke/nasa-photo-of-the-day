import React from 'react';
import { ExplanationStyles } from './ExplanationStyles.js';

const Explanation = (props) => {


    return (
        <ExplanationStyles >
        {props.explanation}
        </ExplanationStyles>
    )
}

export default Explanation;