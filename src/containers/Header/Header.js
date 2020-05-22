import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Button from "../../components/UI/Button/Button";
import Icon from "../../components/UI/Icon/Icon";
import NavToggle from "../../components/Header/NavToggle/NavToggle";

import classes from "./Header.module.css";


class Header extends Component {
    state = {
        focus: false
    }

    inputStateHandler = () => {
        this.setState(prevState => {
            return { focus: !prevState.focus }
        })
    }

    cleanInput = () => {
        this.setState({ inputValue: "" });
        this.props.changed("");
    }

    render() {
        const searchContainerClasses = [classes.Search];
        if(this.state.focus) {
            searchContainerClasses.push(classes.Focus);
        }

        return (
            <header className={classes.Header}>
                <div className={classes.Container}>
                    <NavToggle openNavigation={this.props.clicked} />
    
                    <div className={searchContainerClasses.join(' ')}>
                        <Icon type="search" iconClass="Search" />
                        <input type="text" placeholder="Buscar una palabra..."
                            className={classes.Input} 
                            value={this.props.inputValue}
                            onChange={(event) => this.props.onInputChanged(event.target.value)} 
                            onFocus={this.inputStateHandler}
                            onBlur={this.inputStateHandler}
                            />
                        <button className={classes.Delete} 
                            onClick={() => this.props.onInputChanged("")}
                            type="button">&times;</button>
                    </div>
    
                    <Button clicked={() => this.props.history.push(this.props.match.url + "/agregar")} 
                        btnType="Add Header">Agregar Palabra</Button>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        inputValue: state.header.searchedWord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInputChanged: (value) => dispatch(actions.searchedWordChanged(value))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));