import React, { Component } from 'react';

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
        editing: false
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({ editing: true });
            const id = this.props.match.params.id;

            axios.get(`/palabras/${id}.json`)
                .then(res => {
                    const updatedWordForm = { ...this.state.wordForm }
                    for (let key in res.data) {
                        const updatedFormElement = { ...updatedWordForm[key] };
                        updatedFormElement.value = res.data[key];
                        updatedWordForm[key] = updatedFormElement;
                    }
                    this.setState({ wordForm: updatedWordForm });
                })
                .catch(err => {
                    console.log(err);
                })
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
            const id = this.props.match.params.id;
            axios.put(`/palabras/${id}.json`, word)
                .then(res => {
                    console.log(res);
                    this.props.updateWords();
                    this.props.history.replace("/palabras")
                })
                .catch(err => console.log(err))
        } else {
            axios.post("/palabras.json", word)
                .then(res => {
                    console.log(res);
                    this.props.updateWords();
                    this.props.history.replace("/palabras")
                })
                .catch(err => console.log(err))
        }
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

        return (
            <div className={classes.Container}>
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

                    <Button btnType="Add Word">{(this.state.editing) ? "Editar" : "Agregar"}</Button>
                </form>

                <Backdrop clicked={this.closeForm} type="Form" show={true} />
            </div>
        );
    }
}

export default WordForm;