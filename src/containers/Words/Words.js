import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { withRouter } from "react-router-dom";

import axios from "../../axios-words";
import Loading from "../../components/UI/Loading/Loading";
import NotFound from "../../components/Words/NotFound/NotFound";
import Word from "../../components/Words/Word/Word";
import WordSummary from "../../components/Words/WordSummary/WordSummary";

class Words extends Component {
    state = {
        words: [],
        loading: true,
        notFound: false
    }

    componentDidUpdate(prevProps) {
        if(this.props.words !== prevProps.words || 
           this.props.location.search !== prevProps.location.search ||
           this.props.searchedWord.trim() !== prevProps.searchedWord.trim()) {
            let words = [...this.props.words];
            let filteredWords = this.filterWords(words);
            // console.log(filteredWords);
            this.setState({ words: filteredWords });
        }
    }

    // TODO: REFACTOR THIS BITCH
    filterWords = (words) => {
        let queryParamsFiltered = words;

        if(this.props.location.search) {
            const query = new URLSearchParams(this.props.location.search);
            for(let param of query.entries()) {
                queryParamsFiltered = words.filter(word => word.tipo === param[1])
            }
        }

        let searchedWordFiltered = queryParamsFiltered;
        if(this.props.searchedWord.trim() !== "") {
            const search = this.props.searchedWord.trim().toLowerCase();
            searchedWordFiltered = [];

            queryParamsFiltered.map(word => {
                const name = word.nombre.toLowerCase();
                if (name.indexOf(search) !== -1) searchedWordFiltered.push(word);
            })
        }

        return searchedWordFiltered;
    }

    editWordHandler = (wordId) => {
        this.props.history.push(`${this.props.match.url}/editar/${wordId}`)
    }

    deleteWordHandler = (wordId) => {
        axios.delete(`/palabras/${wordId}.json`)
            .then(res => {
                this.props.updateWords();
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        let words = <Loading></Loading>;
        if (this.state.words.length > 0) {
            words = (
                <Masonry>
                    {this.state.words.map(word => (
                        <Word key={word.id}
                            nombre={word.nombre}
                            significado={word.significado}
                            ejemplo={word.ejemplo}
                            tipo={word.tipo}
                            editWord={() => this.editWordHandler(word.id)}
                            deleteWord={() => this.deleteWordHandler(word.id)}
                        />
                    ))}
                </Masonry>
            )
        } else {
            if(this.props.requestFinished) {
                words = <NotFound></NotFound>;
            }
        }

        return (
            <React.Fragment>
                <WordSummary reqFinished={this.props.requestFinished} amount={this.state.words.length} />
                {words}
            </React.Fragment>
        );
    }
}

export default withRouter(Words);