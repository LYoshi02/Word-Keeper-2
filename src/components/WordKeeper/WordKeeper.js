import React from 'react';
import { Route } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import Words from "../../containers/Words/Words";
import WordForm from "../../containers/WordForm/WordForm";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus
} from "@fortawesome/free-solid-svg-icons";
library.add(faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
faTrash, faPen, faPlus);

const wordKeeper = (props) => (
    <Layout>
        <Words />

        <Route path={"/palabras/agregar"} component={WordForm} />
    </Layout>
)

export default wordKeeper;