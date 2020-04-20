import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import axios from "../../axios-words";
import Word from "../../components/Words/Word/Word";
import WordSummary from "../../components/Words/WordSummary/WordSummary";

class Words extends Component {
    state = {
        wordsAmount: 2,
        word: {}
    }

    render() {
        return (
            <React.Fragment>
                <WordSummary amount={this.state.wordsAmount} />

                <Masonry>
                    <Word name="Hola" />
                    <Word name="Hola" />
                    <Word name="Hola" />
                </Masonry>
            </React.Fragment>
        );
    }
}

export default Words;