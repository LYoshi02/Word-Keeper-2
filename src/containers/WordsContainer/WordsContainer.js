import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

import axios from "../../axios-words";
import Button from "../../components/UI/Button/Button";
import Icon from "../../components/UI/Icon/Icon";
import Loading from "../../components/UI/Loading/Loading";
import NotFound from "../../components/Words/NotFound/NotFound";
import Word from "../../components/Words/Word/Word";
import WordSummary from "../../components/Words/WordSummary/WordSummary";

class WordsContainer extends Component {
    state = {
        words: [],
        loading: true,
        notFound: false,
        showAlert: false
    }

    componentDidUpdate(prevProps) {
        if (this.props.words !== prevProps.words ||
            this.props.location.search !== prevProps.location.search ||
            this.props.searchedWord.trim() !== prevProps.searchedWord.trim()) {
            let words = [...this.props.words];
            let filteredWords = this.filterWords(words);
            this.setState({ words: filteredWords });
        }
    }

    filterWords = (words) => {
        const queryParamsFiltered = this.filterQueryParams(words);
        const searchedWordFiltered = this.filterSearchedWords(queryParamsFiltered);

        return searchedWordFiltered;
    }

    filterQueryParams = (words) => {
        let queryParamsFiltered = words;
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

    deleteWordHandler = (wordId) => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'No podrás recuperar esta palabra',
            icon: 'warning',
            showCancelButton: true,
        }).then(result => {
            if (result.value) {
                axios.delete(`/palabras/${wordId}.json`)
                    .then(res => {
                        this.props.updateWords();
                        Swal.fire({
                            title: "Palabra Borrada!",
                            icon: "success"
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
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
            if (this.props.request.finished) {
                words = <NotFound>No se encontraron palabras</NotFound>;
            }
        }

        if(this.props.request.finished && this.props.request.error) {
            words = <NotFound type="error">Se produjo un error al obtener las palabras</NotFound>;
        }

        return (
            <React.Fragment>
                <WordSummary reqFinished={this.props.request.finished} amount={this.state.words.length} />
                {words}

                <Button btnType="Mobile" 
                clicked={() => this.props.history.push(this.props.match.url + "/agregar")} >
                    <Icon type="plus" />
                </Button>
            </React.Fragment>
        );
    }
}

export default withRouter(WordsContainer);