import React, { Component } from 'react';

import Word from "../../components/Words/Word/Word";
import WordSummary from "../../components/Words/WordSummary/WordSummary";

class Words extends Component {
    state = {
        wordsAmount: 2,
        word: {

        }
    }
    
    render() {
        return (  
            <React.Fragment>
                <WordSummary amount={this.state.wordsAmount} />

                <Word name="Hola" />
            </React.Fragment>
        );
    }
}
 
export default Words;