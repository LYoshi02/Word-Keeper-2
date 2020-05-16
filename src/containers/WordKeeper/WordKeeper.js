import React from 'react';
import { Route } from "react-router-dom";
import axios from "../../axios-words";

import Layout from "../../hoc/Layout/Layout";
import WordsContainer from "../WordsContainer/WordsContainer";
import WordForm from "../WordForm/WordForm";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus
} from "@fortawesome/free-solid-svg-icons";
library.add(faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus);

const wordKeeper = () => {
    return (
        <Layout>
            <WordsContainer />

            <Route path={["/palabras/agregar", "/palabras/editar/:id"]} 
                render={routeProps => <WordForm {...routeProps} />}/>
        </Layout>
    )
}

export default withErrorHandler(wordKeeper, axios);