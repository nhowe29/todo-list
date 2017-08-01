import React from 'react';
import TextField from 'material-ui/TextField'
import TodosStore from "./TodosStore";

const RETURN_KEY_CODE = 13;

class NewTodo extends React.Component {

    constructor() {
        super();

        this.styles = {
            spacing: {
                float: 'left',
                width: '30%',
                margin: '3%'
            },
            prompt: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: 16,
                lineHeight: '16px',
            }
        }
    }

    onKeyDown(event)
    {
        if (event.keyCode === RETURN_KEY_CODE) {
            var text = event.target.value.trim();
            if (text == '') {
                return; // todo: show error instead
            } else {
                TodosStore.add(event.target.value.trim());

                // Clear text field input
                event.target.value = '';
            }


        }
    }

    render() {
        return (
            <div style={this.styles.spacing}>
                <p style={this.styles.prompt}>What's in your todo list?</p>
                <TextField
                    onKeyDown={this.onKeyDown}
                    hintText="New todo"
                    fullWidth={true}
                    />
            </div>
        )
    }
}

export default NewTodo;