import React, { Component } from 'react';

import axios from "../../axios-words";
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
        }
    }

    inputChangeHandler = (newValue, inputIdentifier) => {
        const updatedWordForm = {...this.state.wordForm}
        const updatedFormElement = {...this.state.wordForm[inputIdentifier]}
        updatedFormElement.value = newValue
        updatedWordForm[inputIdentifier] = updatedFormElement

        this.setState({ wordForm: updatedWordForm });
    }

    closeForm = () => {
        this.props.history.push("/palabras");
    }

    addWordHandler = (event) => {
        event.preventDefault();
        const word = {
            nombre: this.state.wordForm.nombre.value,
            significado: this.state.wordForm.significado.value,
            ejemplo: this.state.wordForm.ejemplo.value,
            tipo: this.state.wordForm.tipo.value
        }

        axios.post("/palabras.json", word)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        let formElementsArray = [];
        for (let key in this.state.wordForm) {
            formElementsArray.push({
                id: key,
                data: this.state.wordForm[key]
            })
        }

        return (
            <React.Fragment>
                <div className={classes.Container}>
                    <Button clicked={this.closeForm} btnType="Close">&times;</Button>
                    <form className={classes.Form} onSubmit={this.addWordHandler}>
                        {formElementsArray.map(element => (
                            <FormElement
                                key={element.id}
                                formElementType={element.data.formElementType}
                                formElementData={element.data}
                                inputChangeHandler={(event) => this.inputChangeHandler(event.target.value, element.id)}
                                receiveNewItems={(items) => this.inputChangeHandler(items, element.id)}
                            />
                        ))}

                        <Button btnType="Add Word">Agregar</Button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default WordForm;