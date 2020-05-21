import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as actions from "../../store/actions/index";

import axios from "../../axios-words";
import Backdrop from "../../components/UI/Backdrop/Backrop";
import Button from "../../components/UI/Button/Button";
import FormElement from "../../components/WordForm/FormElement/FormElement";

import classes from "./WordForm.module.css";

class WordForm extends Component {
    state = {
        wordForm: {
            nombre: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tu Palabra',
                    class: 'Title',
                    required: true
                },
                class: 'Nombre',
                formElementType: 'nombre',
                value: ''
            },
            significado: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Escribe algo...',
                    class: 'Input'
                },
                heading: {
                    text: 'Significado'
                },
                class: 'Seccion',
                formElementType: 'seccion',
                value: []
            },
            ejemplo: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Escribe algo...',
                    class: 'Input'
                },
                heading: {
                    text: 'Ejemplo'
                },
                class: 'Seccion',
                formElementType: 'seccion',
                value: []
            },
            tipo: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'sustantivo', displayValue: 'Sustantivo' },
                        { value: 'verbo', displayValue: 'Verbo' },
                        { value: 'adjetivo', displayValue: 'Adjetivo' },
                        { value: 'otro', displayValue: 'Otro' }
                    ],
                    class: 'Select'
                },
                heading: {
                    text: 'Tipo'
                },
                class: 'Tipo',
                formElementType: 'tipo',
                value: 'sustantivo'
            }
        },
        editing: false,
        btnDisabled: true
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({ editing: true });
            const id = this.props.match.params.id;

            axios.get(`/palabras/${id}.json?auth=${this.props.token}`)
                .then(res => {
                    const updatedWordForm = { ...this.state.wordForm }
                    for (let key in res.data) {
                        const updatedFormElement = { ...updatedWordForm[key] };
                        updatedFormElement.value = res.data[key];
                        updatedWordForm[key] = updatedFormElement;
                    }
                    this.setState({ wordForm: updatedWordForm, btnDisabled: false });
                });
        } else {
            this.setState({ btnDisabled: false });
        }
    }

    inputChangeHandler = (newValue, inputIdentifier) => {
        const updatedWordForm = { ...this.state.wordForm }
        const updatedFormElement = { ...this.state.wordForm[inputIdentifier] }
        updatedFormElement.value = newValue
        updatedWordForm[inputIdentifier] = updatedFormElement

        this.setState({ wordForm: updatedWordForm });
    }

    submitWordHandler = (event) => {
        event.preventDefault();
        const word = {
            nombre: this.state.wordForm.nombre.value,
            significado: this.state.wordForm.significado.value,
            ejemplo: this.state.wordForm.ejemplo.value,
            tipo: this.state.wordForm.tipo.value
        }

        if (this.state.editing) {
            this.props.onEditWord(word, this.props.match.params.id, this.props.token);
        } else {
            this.props.onCreateWord(word, this.props.token);
        }

        this.props.history.replace("/palabras");
    }

    closeForm = () => {
        this.props.history.push("/palabras")
    }

    render() {
        let formElementsArray = [];
        for (let key in this.state.wordForm) {
            formElementsArray.push({
                id: key,
                data: this.state.wordForm[key]
            })
        }

        let redirectForm = null;
        if(this.props.closeForm) {
            redirectForm = <Redirect to="/palabras" />;
        }

        return (
            <div className={classes.Container}>
                {redirectForm}
                <Button clicked={this.closeForm} btnType="Close">&times;</Button>
                <form className={classes.Form} onSubmit={this.submitWordHandler}>
                    {formElementsArray.map(element => (
                        <FormElement
                            key={element.id}
                            formElementType={element.data.formElementType}
                            formElementData={element.data}
                            inputChangeHandler={(event) => this.inputChangeHandler(event.target.value, element.id)}
                            receiveNewItems={(items) => this.inputChangeHandler(items, element.id)}
                        />
                    ))}

                    <Button disabled={this.state.btnDisabled} 
                    btnType="Add Word">{(this.state.editing) ? "Editar" : "Agregar"}</Button>
                </form>

                <Backdrop clicked={this.closeForm} type="Form" show={true} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        closeForm: state.wordForm.closeForm,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateWord: (word, token) => dispatch(actions.createWord(word, token)),
        onEditWord: (word, id, token) => dispatch(actions.editWord(word, id, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordForm);