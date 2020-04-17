import React from 'react';

import Layout from "../../hoc/Layout/Layout";
import Palabras from "../Words/Words";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus
} from "@fortawesome/free-solid-svg-icons";
library.add(faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
faTrash, faPen, faPlus);

const wordKeeper = () => (
    <Layout>
        <Palabras />
    </Layout>
)

export default wordKeeper;