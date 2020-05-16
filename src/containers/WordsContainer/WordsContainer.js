import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Button from "../../components/UI/Button/Button";
import Icon from "../../components/UI/Icon/Icon";
import Loading from "../../components/UI/Loading/Loading";
import NotFound from "../../components/Words/NotFound/NotFound";
import Word from "../../components/Words/Word/Word";
import WordSummary from "../../components/Words/WordSummary/WordSummary";

class WordsContainer extends Component {
    componentDidMount() {
        this.props.onFetchWords();
    }

    componentDidUpdate(prevProps) {
        if (this.props.words !== prevProps.words ||
            this.props.location.search !== prevProps.location.search ||
            this.props.searchedWord.trim() !== prevProps.searchedWord.trim()) {
            const filteredWords = this.filterWords(this.props.words);
            this.props.onChangeFilteredWords(filteredWords);
        }
    }

    filterWords = (words) => {
        const queryParamsFiltered = this.filterQueryParams(words);
        const searchedWordFiltered = this.filterSearchedWords(queryParamsFiltered);

        return searchedWordFiltered;
    }

    filterQueryParams = (words) => {
        let queryParamsFiltered = [...words];
        if (this.props.location.search) {
            const query = new URLSearchParams(this.props.location.search);
            for (let param of query.entries()) {
                queryParamsFiltered = words.filter(word => word.tipo === param[1]);
            }
        }

        return queryParamsFiltered;
    }

    filterSearchedWords = (words) => {
        let searchedWordFiltered = words;
        if (this.props.searchedWord.trim() !== "") {
            const search = this.props.searchedWord.trim().toLowerCase();
            searchedWordFiltered = [];

            words.map(word => {
                const name = word.nombre.toLowerCase();
                if (name.indexOf(search) !== -1) searchedWordFiltered.push(word);
            })
        }
        return searchedWordFiltered;
    }

    editWordHandler = (wordId) => {
        this.props.history.push(`${this.props.match.url}/editar/${wordId}`)
    }

    render() {
        let words = <Loading></Loading>;
        if (this.props.filteredWords.length > 0) {
            words = (
                <Masonry>
                    {this.props.filteredWords.map(word => (
                        <Word key={word.id}
                            nombre={word.nombre}
                            significado={word.significado}
                            ejemplo={word.ejemplo}
                            tipo={word.tipo}
                            editWord={() => this.editWordHandler(word.id)}
                            deleteWord={() => this.props.onDeleteWord(word.id)}
                        />
                    ))}
                </Masonry>
            )
        } else {
            if (this.props.reqFinished) {
                if (this.props.reqError) {
                    words = <NotFound type="error">Se produjo un error al obtener las palabras</NotFound>
                } else {
                    words = <NotFound>No se encontraron palabras</NotFound>
                }
            }
        }

        return (
            <React.Fragment>
                <WordSummary reqFinished={this.props.reqFinished} amount={this.props.filteredWords.length} />
                {words}

                <Button btnType="Mobile" 
                clicked={() => this.props.history.push(this.props.match.url + "/agregar")} >
                    <Icon type="plus" />
                </Button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchedWord: state.header.searchedWord,
        words: state.words.words,
        filteredWords: state.words.filteredWords,
        loading: state.words.loading,
        reqFinished: state.words.reqFinished,
        reqError: state.words.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchWords: () => dispatch(actions.fetchWords()),
        onChangeFilteredWords: (words) => dispatch(actions.changeFilteredWords(words)),
        onDeleteWord: (id) => dispatch(actions.deleteWord(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WordsContainer));