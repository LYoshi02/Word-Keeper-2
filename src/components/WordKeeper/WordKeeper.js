import React from 'react';

import Layout from "../../hoc/Layout/Layout";
import Words from "../../containers/Words/Words";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus
} from "@fortawesome/free-solid-svg-icons";
library.add(faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
faTrash, faPen, faPlus);

const wordKeeper = () => (
    <Layout>
        <Words />
    </Layout>
)

export default wordKeeper;