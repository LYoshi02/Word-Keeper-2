import React from 'react';
import { Route } from "react-router-dom";
import axios from "../../axios-words";

import Layout from "../../hoc/Layout/Layout";
import WordsContainer from "../../containers/WordsContainer/WordsContainer";
import WordForm from "../../containers/WordForm/WordForm";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

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