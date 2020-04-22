import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from "../../components/UI/Button/Button";
import FormItem from "../../components/WordForm/FormElement/FormItem/FormItem";

import classes from "./FormList.module.css";

class FormList extends Component {
    state = {
        items: [{id: uuidv4(), content: ''}]
    }

    componentDidUpdate(prevProps) {
        if(prevProps.items !== this.props.items && this.props.items.length > 0) {
            this.setState({ items: this.props.items });
        }
    }

    itemChangedHandler = (event, itemIdentifier) => {
        const updatedItems = [...this.state.items];
        const indexChange = updatedItems.findIndex(item => item.id === itemIdentifier);
        updatedItems[indexChange].content = event.target.value;
        this.updateStates(updatedItems);
    }
    
    addItemHandler = (event) => {
        event.preventDefault();
        const updatedItems = [...this.state.items];
        const newItem = { id: uuidv4(), content: '' }
        updatedItems.push(newItem);
        this.setState({ items: updatedItems });
    }

    deleteItemHandler = (event, itemIdentifier) => {
        event.preventDefault();
        const updatedItems = [...this.state.items];
        const indexDelete = updatedItems.findIndex(item => item.id === itemIdentifier);
        updatedItems.splice(indexDelete, 1);
        this.updateStates(updatedItems);
    }

    updateStates = (newItems) => {
        this.setState({ items: newItems })
        this.props.sendItems(newItems); // This updates the parent State -> "WordForm" component
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.List}>
                    {this.state.items.map(item => (
                        <FormItem key={item.id}
                            elementType={this.props.elementType}
                            elementConfig={this.props.elementConfig}
                            deleteClicked={(event) => this.deleteItemHandler(event, item.id)}
                            changed={(event) => this.itemChangedHandler(event, item.id)}
                            value={item.content} />
                    ))}
                </div>

                <Button clicked={this.addItemHandler} btnType="Add Item">Agregar</Button>
            </React.Fragment>
        );
    }
}

export default FormList;