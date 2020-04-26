import React, { Component } from 'react';
import { Route } from "react-router-dom";

import axios from "../../axios-words";
import Layout from "../../hoc/Layout/Layout";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Words from "../Words/Words";
import WordForm from "../WordForm/WordForm";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus
} from "@fortawesome/free-solid-svg-icons";
library.add(faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus);

class WordKeeper extends Component {
    state = {
        words: [],
        searchedWord: '',
        request: {
            finished: false,
            error: false
        }
    }

    componentDidMount() {
        this.getWords();
    }

    getWords = () => {
        return axios.get('/palabras.json')
            .then(res => {
                const fetchedWords = [];
                for (let key in res.data) {
                    fetchedWords.push({
                        id: key,
                        ...res.data[key]
                    });
                }
                this.setState({ words: fetchedWords, request: { finished: true} });
            })
            .catch(err => {
                this.setState({ request: { finished: true, error: true} });
            });
    }

    headerChangedHandler = (value) => {
        this.setState({ searchedWord: value });
    }

    render() {
        return (
            <Layout headerChanged={this.headerChangedHandler}>
                <Words words={this.state.words} 
                    updateWords={this.getWords} 
                    request={this.state.request} 
                    searchedWord={this.state.searchedWord} />

                <Route path={["/palabras/agregar", "/palabras/editar/:id"]} 
                    render={routeProps => <WordForm updateWords={this.getWords} {...routeProps} />}/>
            </Layout>
        )
    }
}

export default withErrorHandler(WordKeeper, axios);