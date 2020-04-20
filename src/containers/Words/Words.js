import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import axios from "../../axios-words";
import Word from "../../components/Words/Word/Word";
import WordSummary from "../../components/Words/WordSummary/WordSummary";

class Words extends Component {
    state = {
        wordsAmount: 0,
        words: []
    }

    componentDidMount() {
        axios.get('/palabras.json')
            .then(res => {
                const fetchedWords = [];
                for(let key in res.data) {
                    fetchedWords.push({
                        id: key,
                        ...res.data[key]
                    });
                }
                this.setState({ wordsAmount: fetchedWords.length, words: fetchedWords });
            })
    }

    render() {
        let words = null;
        words = (
            <Masonry>
                {this.state.words.map(word => (
                    <Word key={word.id}
                        nombre={word.nombre}
                        significado={word.significado}
                        ejemplo={word.ejemplo}
                        tipo={word.tipo}
                    />
                ))}
            </Masonry>
        )

        return (
            <React.Fragment>
                <WordSummary amount={this.state.wordsAmount} />
                {words}
            </React.Fragment>
        );
    }
}

export default Words;